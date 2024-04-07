### docker bridge

Docker has itsn own intern network (Bridge). It is the used to conect diferent containers.

Docker creates the network class B type IPv4 with the identifiers 172.17.0.XX/16 where the docker server is 172.17.0.1 and each container executed adquires a next IP until the 254.

It's bad to run commands with the IP because it can change in each execution. Thats why we assign a hostname to the container, because, the DNS of docker will retrieve the IP even though the IP changes.

```sh
# To get the IP of a container
docker inspect IMAGE_NAME
```

Docker has 3 preconfigured networks:
- Bridge. The standard red used by all the containers
- Host. The container uses the same IP of the physic server.
- None. Is used to indicate that the container has not a conected network.

```sh
# To get a list of all the networks in docker
docker network ls
```

> PCI SS: Payment Card Industry. It is the standard of security for the enterprises than process the data of credit cards. The servers are segmented for accotate the responsability of the business about the data.

### Exercise
```bash
docker network create r1
docker run -dti --network r1 --name c1 --hostname c1 debian
docker run -dti --network r1 --name c2 --hostname c2 debian

# BASH 1
docker exec -ti c1 /bin/bash

# BASH 2
docker exec -ti c2 /bin/bash

# BASH 1
apt udpate
apt-get install iputils-ping
ping c2

# BASH 2
apt udpate
apt-get install iputils-ping
ping c1
```

```bash
# BASH 1 output
PING c2 (172.18.0.3) 56(84) bytes of data.
64 bytes from c2.r1 (172.18.0.3): icmp_seq=1 ttl=64 time=0.181 ms
64 bytes from c2.r1 (172.18.0.3): icmp_seq=2 ttl=64 time=0.257 ms
64 bytes from c2.r1 (172.18.0.3): icmp_seq=3 ttl=64 time=0.226 ms
64 bytes from c2.r1 (172.18.0.3): icmp_seq=4 ttl=64 time=0.204 ms
64 bytes from c2.r1 (172.18.0.3): icmp_seq=5 ttl=64 time=0.087 ms
64 bytes from c2.r1 (172.18.0.3): icmp_seq=6 ttl=64 time=0.289 ms
64 bytes from c2.r1 (172.18.0.3): icmp_seq=7 ttl=64 time=0.251 ms
```
```bash
# BASH 2 output
PING c1 (172.18.0.2) 56(84) bytes of data.
64 bytes from c1.r1 (172.18.0.2): icmp_seq=1 ttl=64 time=0.234 ms
64 bytes from c1.r1 (172.18.0.2): icmp_seq=2 ttl=64 time=0.065 ms
64 bytes from c1.r1 (172.18.0.2): icmp_seq=3 ttl=64 time=0.079 ms
64 bytes from c1.r1 (172.18.0.2): icmp_seq=4 ttl=64 time=0.390 ms
```

#### docker network disconnect NETWORK_NAME CONTAINER_NAME
```bash
# BASH 3
docker network disconnect r1 c1
```
#### docker network connect NETWORK_NAME CONTAINER_NAME
```bash
# BASH 3
docker network connect r1 c1
```

```bash
# BASH 3
docker network disconnect r1 c1
docker network disconnect r1 c2
docker network connect r1 c2
docker network connect r1 c1

# BASH 3
docker network disconnect r1 c2
docker network disconnect r1 c1
docker network connect r1 c1
docker network connect r1 c2
```

#### docker network rm NETWORK_NAME
It is used to delete a network.

> We can't delete a network if a container is connected.
```bash
# BASH 3
docker network disconnect r1 c2
docker network rm r1
# The network can't be deleted because c1 is in r1
docker network disconnect r1 c1
docker network rm r1
#The network was deleted
```


# First Parcial Project.
12 de abril.