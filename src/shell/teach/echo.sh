###
 # @Author: ray_sun
 # @Date: 2020-03-06 14:02:23
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 14:15:45
 ###
#!/bin/sh
# read name 
# echo "$name It is a test"

echo -e "OK! \n" # -e 开启转义
echo "It is a test"

echo -e "OK! \c" # -e 开启转义 \c 不换行
echo "It is a test"

echo `date`