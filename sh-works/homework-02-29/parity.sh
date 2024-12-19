#!/bin/bash
# 6

if [[ $(($1 % 2)) == 0 ]]; then
    echo "$1 is par"
    exit 1
else
    echo "$1 is not par"
fi