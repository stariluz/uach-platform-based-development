#!/bin/bash
# 5
keyFile="keyWord"


if [ -f $keyFile ]; then
    content=$(cat $keyFile)
    if [[ $content == "fing" ]]; then
        echo "La palabra almacenada es fing"
    else
        echo "La palabra almacenada no es fing"
    fi
else
    echo "El archivo no existe"
fi