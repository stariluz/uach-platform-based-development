### docker logs
It print all the logs of the container
| Flag | Description |
|-|-|
| -f name | Print all the logs and keep the proccess, it helps to watch in live what is happening in the container |

### docker create
Create a container without running it.

| Flag | Description |
|-|-|
| --name name | Set a custom name to the container |

### docker start
Turn on an container

### docker run
It is like do an docker create and a docker start.
Creates the container and turn on it.


The main registry of docker is docker hub. We can create our own images.

The images lifecycle.

### docker pull IMAGE_NAME
When we want to use a new image, it will do a `docker pull IMAGE_NAME`

### docker images
Let us know the images installed on our computer

As we as can use an object for generate a class, we can use a container to create an image

| apt | yum |
| - | - |
| linux | fedora |
| ubuntu | RedHat |
| debian | |

### docker commit CONTAINER_NAME IMAGE_NAME
This will create an image from the container.

If we want to delete an image, we can't have an container being executed.

```sh
~ docker rmi debian-vim-24-03
Untagged: debian-vim-24-03:latest
Deleted: sha256:2dc12a8b54596f88cd58a028c637d469e8e5333c50c8556fe4ec45cc4253d162
Deleted: sha256:a36471b6cef184b829a37e3ff6525b169894e7088c92466271a8ab3d6b586c4b
```


```sh
~ docker ps
CONTAINER ID   IMAGE              COMMAND              CREATED          STATUS                      PORTS                  NAMES
722bba07be25   debian-vim-24-03   "vim"                52 seconds ago   Exited (0) 27 seconds ago                          great_roentgen
e5cf4b0e1938   debian             "bin/bash"           34 minutes ago   Exited (0) 3 minutes ago                           strange_poitras
bf9d9a5b97d3   httpd              "httpd-foreground"   43 minutes ago   Up 42 minutes               80/tcp                 server-web-24
9e670f465a4a   httpd              "httpd-foreground"   47 minutes ago   Up 47 minutes               0.0.0.0:4000->80/tcp   container1
```

# IAC: Infraestructure as Code
It allows to generate a configuretion from code files, the containers are tecnologic infraestructure.


# History of commands of the class
```sh
docker ps
docker run -dti -p:4000:80 --name container1
docker run -dti -p:4000:80 --name container1 --hostname container1 httpd
docker ps
docker logs -f container1
docker create -ti --name server-web-24  httpd
docker ps -a
docker start server-web-24
docker ps
docker images
docker pull alpine
docker images
docker run -ti debian bin/bash
docker ps
docker ps -a
docker commit strange_poitras debian-vim-24-03
docker images
docker run -ti debian-vim-24-03 vim
docker ps -a
docker rm strange-poitras
docker rm strange_poitras
docker rm great_roentgen
docker rmi debian-vim-24-03
cd scripts-pbd
docker pull debian
docker run --name 
run -ti --name debiandContdebian bin/bash
docker run -ti --name debiandCont debian bin/bash
```

# Create a tag
```
docker build  -t IMAGE_NAME .
docker images
docker run -ti IMAGE_NAME
```