#!/bin/bash
# 1

file_size=`du -k "$1" | cut -f1`
echo "El tamaño de $1 es: $file_size MB"