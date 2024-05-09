# Protocolos TCP/IP

Las capas del protocolo son:
- Capa de aplicación. Se refiere a la aplicaci+on que estará haciendo la comunicación, por ejemplo, una aplicación de correo electrónico.
- Capa de transporte. UDP o TCP. La gran mayoría de navegación se realiza mediante el protocolo TCP.
- Protocolo de internet. 
- Interfaz de Red. Se encarga de determinar como va a dividir los paquetes dependiendo de como va a viajar.
- Red física.

## HTTP
Sobre el protocolo TCP/IP se construyó el protocolo HTTP. HTTP Existen dentro de TCP, es decir que los paquetes que viajan a través de TCP tendrán una estructura HTTP.

Puertos
80->HTTP
443->HTTPS
22->SSH

El canal de HTTP es unidireccional. Es stateless, no le importa el contexto.
No es relevante el puerto de salida del Cliente

## WS (Web Socket)
En el protocolo Web Socket se abre un canal TCP entre servidor y cliente que no se cierre. Los canales de tiempo real trabajan con Web Sockets.

## Otros protocolos
- AMQP
- MQQT

