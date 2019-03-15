#!/bin/sh
ls # print a list of items in current directory

echo Hello World # shell automatically places a space in between each parameter being echoed

#echo "What is your name?"
#read name # takes user input and saves it as a variable
#echo "How are you, $name?"
#read remark
#echo "I am $remark too!"

MY_MESSAGE="Hello World"
MY_SHORT_MESSAGE=hi
MY_NUMBER=1
MY_PI=3.142
MY_OTHER_PI="3.142"
MY_MIXED=123abc

echo $MY_MESSAGE # prints variable
echo "$MY_MESSAGE"

echo "MYVAR is: $MYVAR"
MYVAR="hi there"
echo "MYVAR is: $MYVAR"

#echo "What is your name?"
#read USER_NAME
#echo "Hello $USER_NAME"
#echo "I will create you a file called $USER_NAME_file"
#touch "${USER_NAME}_file"

for i in 1 2 3 4 5
do
  echo "Looping ... number $i"
done

for i in hello 1 * 2 goodbye 
do
  echo "Looping ... i is set to $i"
done

INPUT_STRING=hello
while [ "$INPUT_STRING" != "bye" ]
do
  echo "Please type something in (bye to quit)"
  read INPUT_STRING
  echo "You typed: $INPUT_STRING"
done

X=5

if [ "$X" -lt "0" ]
then
  echo "X is less than zero"
fi
if [ "$X" -gt "0" ]; then
  echo "X is more than zero"
fi
[ "$X" -le "0" ] && \
      echo "X is less than or equal to  zero"
[ "$X" -ge "0" ] && \
      echo "X is more than or equal to zero"
[ "$X" = "0" ] && \
      echo "X is the string or number \"0\""
[ "$X" = "hello" ] && \
      echo "X matches the string \"hello\""
[ "$X" != "hello" ] && \
      echo "X is not the string \"hello\""
[ -n "$X" ] && \
      echo "X is of nonzero length"
[ -f "$X" ] && \
      echo "X is the path of a real file" || \
      echo "No such file: $X"
[ -x "$X" ] && \
      echo "X is the path of an executable file"
[ "$X" -nt "/etc/passwd" ] && \
      echo "X is a file which is newer than /etc/passwd"

[ $X -ne 0 ] && echo "X isn't zero" || echo "X is zero"
[ -f $X ] && echo "X is a file" || echo "X is not a file"
[ -n $X ] && echo "X is of non-zero length" || \
      echo "X is of zero length"
