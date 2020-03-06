###
 # @Author: ray_sun
 # @Date: 2020-03-06 15:52:42
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 17:37:15
 ###
#!/bin/sh

revision=$(printf %x $(date +%s))

function title()
{
  echo $
  cat
  # echo -n $'\033[33m'
  # cat
  # echo -n $'\033[0m'
}
# title <<< 'Change Environment'

function log()
{
  echo ${1}
	echo -e "`date "+%Y-%m-%d %H:%M:%S"` ${1}"
}
log 'Environment Environment'