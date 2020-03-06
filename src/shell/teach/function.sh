###
 # @Author: ray_sun
 # @Date: 2020-03-06 15:31:02
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 15:39:24
 ###
#!/bin/sh
demoFun(){
    echo "这是我的第一个 shell 函数!"
}
funWithReturn(){
  flag=1
  if (flag)
  then
    echo true
  else
    echo false
  fi  
  return
}
funWithReturn
# echo "输入的两个数字之和为 $? !"

