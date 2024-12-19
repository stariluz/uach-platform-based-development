#!/bin/bash
# 10

if [ $# -ne 2 ]; then
    echo "Para ejecutar este script se necesitan 2 números."
    exit 1
fi


firstValue=$1
secondValue=$2
total=$1
for (( i=1; i<secondValue; i++ )); do
    total=$((total*firstValue))
done

echo "$firstValue^$secondValue=$total"