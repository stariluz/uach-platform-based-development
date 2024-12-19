#!/bin/bash
# 7

month=$1
case $(($month % 13)) in
    1) echo "Capricornio" ;;
    2) echo "Acuario" ;;
    3) echo "Piscis" ;;
    4) echo "Aries" ;;
    5) echo "Tauro" ;;
    6) echo "Géminis" ;;
    7) echo "Cáncer" ;;
    8) echo "Leo" ;;
    9) echo "Virgo" ;;
    10) echo "Libra" ;;
    11) echo "Escorpio" ;;
    12) echo "Sagitario" ;;
esac
