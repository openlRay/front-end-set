###
 # @Author: ray_sun
 # @Date: 2020-03-06 14:51:50
 # @LastEditors: ray_sun
 # @LastEditTime: 2020-03-06 15:48:50
 ###
#!/bin/sh
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done

for str in 'This is a string'
do
    echo "${str}1"
done

int=1
while(($int<=5))
do
    echo $int
    let "int++"
done

# echo '按下 <CTRL-D> 退出'
# echo -n '输入你最喜欢的网站名: '
# while read FILM
# do
#     echo "是的！$FILM 是一个好网站"
# done

my_arry=(a b "c","d" abc)
echo "-------FOR循环遍历输出数组--------"
for i in ${my_arry[@]};
do
  echo $i
done

echo "-------::::WHILE循环输出 使用 let i++ 自增:::::---------"
j=0
while [ $j -lt ${#my_arry[@]} ]
do
  echo ${my_arry[$j]}
  let j++
done