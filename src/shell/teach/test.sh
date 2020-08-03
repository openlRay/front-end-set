#!/usr/bin/env bash

declare branch
declare revision=$(printf %x $(date +%s))

# 标题
function title()
{
  echo -n $'\033[33m'
  cat
  echo -n $'\033[0m'
}

# 错误
function error()
{
  echo -n $'\033[31mError: '
  cat
  echo -n $'\033[0m'
  return 1
}>&2

# 解析参数
function parse_param()
{
  # 解析构建的branch
  if [[ "${CI_COMMIT_REF_NAME}" == 'master' ]]
  then
    branch='develop'
  elif [[ "${CI_COMMIT_REF_NAME}" == 'pre' ]]
  then
    branch='pre'
  elif [[ "${CI_COMMIT_REF_NAME}" == 'production' ]]
  then
    branch='production'
  else
    branch='hotfix'
  fi
  # 判断参数是否符合条件
  #if [[ "${branch}" != 'production' && "${branch}" != 'develop' ]]
  #then
  #  error <<< 'branch param illegal'
  #  return
  #fi
}

# 初始化git上下文
function init_git_context()
{
  title <<< 'Init GIT Context'
  export CI_REPOSITORY_PUSH_URL=$(echo "${CI_REPOSITORY_URL}" | sed 's/[^@]*/git/' | sed 's/\//:/') &&
  git remote set-url --push origin "${CI_REPOSITORY_PUSH_URL}"
}
# 构建静态资源
function build_static()
{
  if {
    ! [[ -f package.json ]] || # 不存在package.json文件
    ! npm run | grep '^ *build$' > /dev/null # 不包含command为“build”的npm script
  }
  then
    return # 忽略构建静态资源
  fi
  title <<< 'Build Static Resources'
  npm install --only=dev # 安装开发环境依赖包
  if [[ "${CI_COMMIT_REF_NAME}" == 'production' ]]
  then
    npm run build:production
  elif [[ "${CI_COMMIT_REF_NAME}" == 'pre' ]]
  then
    npm run build:pre
  else
    npm run build
  fi
  git add -f dist
}

# 安装依赖包
function install_package()
{
  if [[ -f package-lock.json ]]
  then
    if [[ -d node_modules ]]
    then
      rm -rf node_modules # 删除开发依赖的node_modules目录
    fi
    title <<< 'Install NPM Packages'
    npm install --production && # 安装npm依赖包
    if [[ -d node_modules ]]
    then
      git add -f node_modules # 添加node_modules目录到git版本管理中
    fi
  fi
}
# 更换环境
function change_environment()
{
  if ! [[ -f index.product.php ]]
  then
    return # 忽略安装composer依赖包
  fi
  title <<< 'Change Environment'
  cp index.product.php index.php
}

# 创建标签
function create_tag() {
  title <<< 'Create Tag'
  git add . &&
  git commit -qm '[GM]项目构建' &&
  git tag "${branch}/${revision}" &&
  git push origin "${branch}/${revision}"
}

# 清理标签
function clean_tag {
  local keep=5
  local -a refs
  read -a refs <<< $(git ls-remote --tags "${CI_REPOSITORY_PUSH_URL}" "${branch}"/* | awk '{ print $2}' | sort)
  local total="${#refs[@]}"
  if ! [[ total > keep ]]
  then
    return
  fi
  title <<< 'Clean Tag'
  local i
  local remove=$((total - keep))
  for (( i = 0; i < remove; i ++ ))
  do
    git push origin :"${refs[${i}]}"
  done
}

# 同步执行代码
# parse_param && # 解析参数
# init_git_context && # 初始化git上下文
# install_package && # 安装依赖包
# build_static && # 构建静态资源
# change_environment && # 更换环境
# create_tag && # 打上git tag


# # 后台执行代码
(clean_tag &) 0</dev/null 1>/dev/null 2>&1