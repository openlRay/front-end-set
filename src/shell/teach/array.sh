###
 # @Author: ray_sun
 # @Date: 2020-03-06 11:32:08
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 11:34:14
 ###
#!/bin/sh
my_array[0]=A
my_array[1]=B
my_array[2]=C
my_array[3]=D

echo "数组的元素为: ${my_array[*]}"
echo "数组的元素为: ${my_array[@]}"
echo "数组的长度为: ${#my_array[@]}"
