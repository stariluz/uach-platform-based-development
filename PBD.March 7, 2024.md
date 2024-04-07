# Docker

## docker run
> `docker run debian` <br>
> It generates a container that has an debian ambient.

| Flag | Description |
|-|-|
| -ti | It link the ttys (logs) from the container to the logs of the operative system  |
| -d | Link the ttys (logs) from the container to the logs of the operative system, and keep the container on. |
| -P | It assigns an arbitrary port to the container |
| -p3000:80 | It assigns the port 3000 of the operative sistem and the port 80 of the container to the container. If the ports are taken, it will now allow to create the port  |

The images by default are downloaded from docker hub.
```sh
# Echo
docker run debian echo "Hi debian"
# Run bash of the debian container
docker run -ti debian /bin/bash
```
This will run the task in the container, and then, it will turn off it.

> A container can be *created*, *executed*, *turned off*, *turned on*, or *deleted*.

### docker ps
```sh
# Show the containers on
docker ps
# Show all the containers
docker ps -a
```

We can execute an action over a container with its name

### docker exec
```bash
docker ps
docker exec -ti jovial_goodall /bin/bash
```
### docker stop
```bash
docker stop jovial_goodall
```
### docker rm
```bash
docker rm jovial_goodall
```

# Server
```bash
docker run -dtiP httpd
docker ps
```
It returns the http server running as:
```
CONTAINER ID   IMAGE     COMMAND              CREATED         STATUS         PORTS                   NAMES
222450e45adb   httpd     "httpd-foreground"   9 seconds ago   Up 8 seconds   0.0.0.0:55000->80/tcp   pedantic_mccarthy
```


For the container, the request is to the port 80, and for the computer, is the port 0.0.0.0:55000 who do the request. We can access to it from the browser with the url: `localhost:55000`.

> Each port helps to do conections for different purposes:
> - https: 443
> - http: 80
> 
> There exists physical ports, and logical ports, as the network ports.

```bash
docker run -dti -p3000:80 httpd
docker ps
```

> ## JSON
> Javascript Object Notation
> 
> Each programming language has a representation of the objects to plain text, it means, serialization of the objects.

