# ¿Qué es un sistema operativo?
Dependiendo del tipo de sistema operativo tiene distintos propósitos.
El principal es la gestión de tareas. Un sistema operativo de un equipo de cómputo básico.
Una de esas tareas a gestionar son las **tareas programadas**, es decir tareas que ocurren cada cierto tiempo.
CLI y IGU son 2 tipos de interfaces que permiten interactuar al sistema operativo con el usuario.

## Cron
Es el nombre del programa que permite a los usuarios dejar tareas programadas. Un programa es un script que la linea de comandos va a interpretar.

## Crontab
Es el archivo donde podemos escribir las tareas que se ejecutarán cada cierto tiempo.
Se empieza leyendo de derecha a izquierda.
Día de la semana. Del 0 al 6 empezando con domingo.
Mes. Del 0 al 12. El 0 es para ningún mes. Enero empieza en el 1.
Día del mes. Del 0 al 31. El 0 es ningún día. El primer día empueza en 1.
Horas. Desde la hora 0 hasta la 23.
Minutos. Desde el minuto 0 hasta el 59.

Los días de la semana invalidan los días del mes. Si ponemos que es todos los domingos, no podemos indicar los días del mes.


-- February 15, 2024

# Bash
Terminal de tipo ÑU que es el que es utilizado generalmente por sistemas UNIX. Bash es un lenguaje de programación de tipo específico que nos permite ejecutar tareas en el sistema operativo.

Con el Shell Banner le estamos diciendo donde está el interprete de nuestro script.

-----
NOTA
Interpolar es el nombre que recibe cuando una variable entra dentro de una cadena.Yo lo conocía como formatear.
-----
