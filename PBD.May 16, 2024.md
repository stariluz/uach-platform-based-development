# HTTP
Dentro del protocolo HTTP se define una estructura con la que se estarán comunicando las computadoras.
Esta estructura es similar, pero varía un poco entre una solicitud, y una respuesta.
## Request
### Header
Header el cual contendrá la url, el método utilizado, entre otros.
El navegador por si solo, unicamente hace llamadas del método get GET.
### Body
Aquí se manda el contenido de la petición, es decir, suele ser uno o más elementos que contienen la información que se guardará, actualizará, o simplemente información necesaria para el servidor en ese momento.

## Response
### Header
Dentro del response, encontramos el header que mantiene la información del request, pero además devuelve un status.

#### Status
El estatus da información acerca de la respuesta que se recibe del servidor.

##### 100
Continuar la petición
##### 200
La operación se realizó, no sabemos si correctamente o equivocadamente. Hay distintos casos del como se ejecutó
###### 200
Se ejecutó correctamente.
###### 206
Partial content. Se entrega parcialmente la respuesta, no es la respuesta completa. Es utilizado mucho para el streaming.
##### 300
Habla del enrutamiento de la petición, la petición se está moviendo entre rutas entre varios servidores.
###### 308
Permanent redirect.
###### 307
Temporary redirect. Hay un recurso que temporalmente no se encuentra en la url actual.
##### 400
Problemas de la petición.
###### 404
Cuando el recurso solicitado no se encuentra.
###### 403
Recurso prohibido.
###### 401
Unautorized.
##### 500
Errores del lado de la petición.
###### 500
Internal Server Error.
###### 502
Bad Gateway.
###### 503
Service Unavailable.

#### Content type
Dentro del header de la respuesta también se manda algún MIME type el cual dará información acerca del tipo de contenido que contendrá el cuerpo de la respuesta.


## Curl
Es un cliente mediante consola que puede hacer llamadas http.