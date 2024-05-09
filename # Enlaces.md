# Enlaces
Heap
Stack

En el heap existen pequeños fragmentos de memoria que apuntan al stack.
Existen 2 tipos de borrados: hard o soft.

Cuando le decimos al sistema operativo mkdir, reserva un espacio en el stack y en el heap, y una vez creados los va a percistir.
En primera instancia las cosas se crean en la memoria volatil, la RAM o ROM. Luego de crearlo se va a dirigir a la memoria persistente.

Si luego de borrar un archivo, es probable que aúm se pueda encontrar navegando por la memorioa buscandolo.
Un enlace soft es solo la dirección al a donde se almaceno el archivo, no el archivo en si mismo.
El hard es el que va a la dirección directa de la memoria, se borra y ya no es recuperable.


```
  ln // para crear enlaces
  -s // sirve para crear enlaces soft
  -h // sirve para crear enlaces hard

  ls
  -lha // list hidden access // muestr si el archivo es un enlace soft o hard
```
Lo ideal es crear un enlace dependiedo del nivel de uso.

# ps // Process system 
Muestra los procesos que se estan ejecutando.
Existen procesos que el sistema operativo ejecuta desde que arranca el sistema. Cuando arrancan los TTYs arrancan los procesos del sistema. El reloj también es proceso de sistema.

Un proceso de sistema lo podemos apagar.
Hay procesos dentro del sistema operativo que siempre deben estar vivos, a estos se les llama demonios.

En los libros se dice que el procesador es como un relog, por que hay algo dentro que va girando, por ello su potencia se miden en hertz (Hz). Cuando el procesador pasa un ciclo va realizando pedacitos de las tareas. La terminal lanza su hilo de tarea. Un hilo en el sistema operativo es un hilo que el operador va a atender de manera independiente.
Actualmente los procesadores soportan multihilos y multicore. 

# &
Se utiliza para mandar cualquier proceso a otro hilo, por lo cual se ejecutara de fondo. Este funciona cuando trabajamos a nivel de sistema operativo.

Cuando estamos trabajando en el desarrollo de aplicaciones web, tenemos un servidor donde existe la aplicación web. El 2010 es el primer año que twitter se cayó, se le llamaba el ballenazo de twitter. Empezamos a conocer el primer problema de la computación moderna, la concurrencia. Muchos usuarios usando la misma aplicación.

La escabilidad de una aplicación consiste en que tan bien aprovecha sus recursos.
El escalamiento vertical es aumentar recursos dentro del mismo procesador.
El escalamiento horizontal es utilizar mejor esos recursos.
Por más bueno que sea un tortillero, no puede sacar más tortillas de las que la máquina le permite. 
La relación entre escalamiento vertical y horizontal le llamamos rendimiento.
Una aplicación podrá responder a las peticiones al mismo tiempo.

Es importante saber en donde optimizar.

# kill
Los procesos tienen un PID (Process Identifier). Si queremos desasernos del proceso con un PID 252 debemos ejecutar `kill 252`. Para matar el proceso como root sería `kill -9 252`.

# REGEX
Una expresión regular es una cadena de texto en una notación que nos permite saber si un texto cumple un patrón.

# grep
Busca un patrón en una lista de archivos. Nos permite buscar dentro del contenido de los archivos.

```sh
greep 'RUN' readme.txt > results
greep 'RUN' readme.txt >> results
```

Estudiar expresiones regulares. UNIX. 