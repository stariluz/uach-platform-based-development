#!/bin/bash
# 4

value=$1
multiplication=0

for (( i=1; i<=10; i++ )); do
    multiplication=$((value*i))
    echo "$value*$i=$multiplication"
done