#!/bin/bash
# 3

value=$1
factorial=$value

for (( i=$value-1; i>0; i-- )); do
    ((factorial*=i))
done

echo "$value! = $factorial"