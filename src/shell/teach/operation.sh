###
 # @Author: ray_sun
 # @Date: 2020-03-06 11:36:00
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 11:47:40
 ###
#!/bin/sh
a=10
b=20

val=`expr $a + $b`
echo "a + b : $val"

val=`expr $a - $b`
echo "a - b : $val"

val=`expr $a \* $b`
echo "a * b : $val"

val=`expr $b / $a`
echo "b / a : $val"

val=`expr $b % $a`
echo "b % a : $val"

echo [ $a = $b ]

if [ $a == $b ]
then
   echo "a 等于 b"
fi
if [ $a != $b ]
then
   echo "a 不等于 b"
fi