###
 # @Author: ray_sun
 # @Date: 2020-03-06 14:16:42
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 14:37:20
 ###
#!/bin/sh
printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  
printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234 
printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543 
printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876 

printf %s abc def
printf "%s\n" abc def
printf "%s %s %s\n" a b c d e f g h i j

printf "a string, no processing:<%b>\n" "A\nB"