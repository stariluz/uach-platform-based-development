# Segunda unidad. Conceptos básicas de las plataformas web

Node.js es una plataforma que se generó a partir del nucleo de ejecución de javascript de Google Chrome.

Javascript es el lenguaje de programación más usado para desarrollo web de manera integral.

El navegador solo entiende 3 lenguajes HTML, CSS, y JS. 

Hay 4 cosas en las que debemos de fijarnos en un lenguaje de programación.
* Tipado
* Tipo
* Paradigma
* Nivel

### Tipado
La capacidad de crear espacios de memoria diferentes según la variable que se declara. El tipo de dato interviene en un lenguaje de programación ya que esté indica la cantidad de memoria que se tendrá que reservar.

Hay lenguajes de tipado estático y de lenguaje dinámico.

Los lenguajes de tipado dinámico separan el stack en bloques de memoria del tamaño más grande que podrán almacenar.


### Tipo

Hay lenguajes compilados, interpretados o traducidos.

Tenemos un archivo de java `app.java`:
```java
Class App {
    public static void main(String args[]){

    }
}
```
Para compilar java ejecutamos `Javac App.java` lo cual generará `App.class` en lenguaje *Bytecode*, el cual será interpretado ahora sí por la Java Virtual Maachine.

Hay más de 600 lenguajes que compilan su código a *Bytecode*.

### Paradigma

Un **Paradigma* es una forma de hacer las cosas, y no cambia.
C es un lenguaje imperativo.
El paradigma imperativo se enfoca en la estructuración de ordenes.
El paradigma orientado a objetos se enfoca en la abtracción de la realidad.

### Nivel

El nivel en un lenguaje de programación es que tan abstracto es.

Hay compiladores de alto nivel a bajo nivel, pero también hay compiladores de bajo nivel a alto nivel. Básicamente es el que se encarga de modificar el nivel de un lenguaje.



Los lenguajes de programación no son una ciencia si no que tienen que ver más con las herramientas del artista. 

La historia de la web se divide en web estática (1.0) y dinámica (2.0).

Cuando se creó Android, tomó de base la JVM para realizar la AVM.

#### Estándar de codificación (Estilo)

Por ejemplo:

| Style      | Lower      | Upper      |
| ---------- | ---------- | ---------- |
| camelCase  | firstName  | FirstName  |
| snake_case | first_name | FIRST_NAME |


## Javascript

Tiene tipado dinámico, y es de tipo interpretativo.

La definición/especificación correcta de Javascript es ECMAScript. A partir del ECMAScript 6 Javascript es imperativo, funcional y orientado a objetos.
---
En javascript tenemos variables globales y locales

```js
// Data types
let number=1;
let number2=3.12;
let boolean=true;
let char='a';
let student={{
    name: "Star",
    number: 3,
    zipCode: 31110
}}

let _function = function(a,b){

}

let _function = ()=>{

}
```