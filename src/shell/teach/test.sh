###
 # @Author: ray_sun
 # @Date: 2020-03-06 14:39:48
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 14:50:43
 ###
#!/bin/sh
a=5
b=6

result=$[a+b] # 注意等号两边不能有空格
echo "result 为： $result"

if [ ! -d "./ddd/" ];then
  mkdir ./ddd
  else
  echo "文件夹已经存在"
fi