#!/bin/bash
# Este es un comentario

# Variables y constantes
nombre="Luis"
edad=32

# Imprimir
echo $nombre
echo $edad


# Estructuras de datos
## Arreglo
arreglo=("Hector" "soy" "loca")

### Imprimir arreglo
echo ${arreglo[*]}

# Modificación de una variable
((edad++))
((edad+=2))
echo $edad

# Modificación de un arreglo
arreglo[1]="EXPLICITAMENTE QUIERO SER"
echo ${arreglo[*]}

echo "Mi nombre es $nombre y mi edad es $edad"
echo "El arreglo en la posición 1 vale '${arreglo[1]}'"

# Aritmetics operands
n1=6
n2=3
n3=$((n1*n2))
echo "The result is $n3"

# Comparative operators
# < (-lt)
# > (-gt)
# <= (-le)
# >= (-ge)
# == (-eq)
# != (-ne)
# Not null (-n)
# Null (-z)

# Control structures

if [[ $n1 > $n2 ]]; then
    echo "$n1 is greater than $n2 bitch"
else
    echo "$n2 is greater than $n1 bitch"
fi

if [ $n1 -gt $n2 ]; then
    echo "$n1 is greater than $n2 BITCH"
else
    echo "$n2 is greater than $n1 BITCH"
fi

# Files operations
# -e Check if it is a file
# -f Check if it is a file but not a folder 
# -r Check if it is empty
# -d Check if it is a folder
# -r -w -x Check if it can be read, written or executed.
file="./file.txt"

if [ -f $file ]; then
    # result=$((-r $file))
    echo "$file JAJAJAJ"
else
    echo "$file doesn't exists JAJAJAJ"
fi

# Logical Operators
# || OR
# && AND
if [ -r $file ] && [ -x $file ]; then
    echo "File has rights"
else
    echo "File hasn't rights"
fi

# Condicionales
gretting="hi"
case $1 in
    hi )
    echo "WELCOME DADDY DO YOU WANNA SHOW ME YOUR ****"
        ;;
    bye|googbye|soGood )
    echo "GOODBYE DADDY YOUR **** WAS SO GOOD"
        ;;
    * )
    echo "DADDY WHY ARE YOU IGNORING ME :c"
        ;;
esac

# Repetitive data structures
# WHILE
user=""

while [[ $user != 'admin' ]]; do
    read -p "WHAT SERVICE DO YOU WANT DADDY?" user
done

# FOR
for (( i=0; i<10; i++ )); do
    echo "Number is $i";
done

guesses=(pedro juan david lulu maria ivan)
for guess in ${guesses[@]}; do
    echo "$guess AAAAAA"
done

# Functions

helpMeImNotRealThisIsNotAJokeImDyingInside(){
    echo "THIS IS THE END PLEASE DON'T CONTINUE WITH THE JOKES YOU ARE DYING :C"
}
helpMeImNotRealThisIsNotAJokeImDyingInside


itsEnoughPleaseStop(){
    echo "$(( $1 - $2 ))"
}
total=$(itsEnoughPleaseStop 9 4)
echo "The result is $total DADDY ;P"


# INVESTIGAR QUE ES UN GESTOR DE PAQUETES; INVESTIGAR QUE ES UN GESTOR DE PAQUETES, QUE GESTOR DE PAQUETES USA LINUX MINT Y MACOS Y TRAER INSTALADO 