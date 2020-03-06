###
 # @Author: ray_sun
 # @Date: 2020-03-06 10:41:09
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 11:15:24
 ###
#!/bin/sh
string="runoob is a great site"
echo `expr index "$string" r`  # 输出 4
echo ${#string}  # 输出 4
array=(12344 2 3)
echo ${array[@]}
echo ${#array[0]}