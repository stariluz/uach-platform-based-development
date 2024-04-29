En un inicio solemos estar acostumbrados a la programación sincrona, esta es programación secuencial que ejecuta pproceso tras proceso en orden.

Si por ejemplo consultamos la base de datos, una aplicación sincrona iría a la base de datos, y mientras tanto, nos hace esperar cierto tiempo con la pantalla congelada.

Los lenguajes de programación ordinarios peuden manejar la asincronía pero esta asincronía debe ser explicita.

Dado que node.js se basó en el motor V8 de chrome y el motor V8 de Chrome está hecho para ejecutar todo el javascript asíncronamente, node es un motor asíncrono no bloqueante.

Al ejecutar promesas con un then, estamos creando un hilo aparte que al concluír sus procesos correctamente, regresará algo a la función que indiquemos en then.

En Python, Java, Ruby, C, etc. todo es síncrono a menos que uno defina que es asíncrono.

En Javascript todo es asíncrono a menos que lo definamos como síncrono.