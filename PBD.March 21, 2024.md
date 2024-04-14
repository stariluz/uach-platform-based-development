# Volumes
The containers are disposable because docker designed them like this.

The container is saved in a space of memories. A volume is like a link of a container with an space of memory.

### docker volume

| Command | Params      | Description                                               |
| ------- | ----------- | --------------------------------------------------------- |
| ls      | VOLUME_NAME | List the volumes in the system                            |
| create  | VOLUME_NAME | Creates a new volume                                      |
| rm      | VOLUME_NAME | Deletes a volume                                          |
| inspect | VOLUME_NAME | Show the information about the existence of the container |

```
docker run -dti -p3000:3306 --name mysql_pbd_1 --hostname mysql_pbd_1 -e MYSQL_ROOT_PASSWORD=yipiImASqlDeveloper -v mysql_data_pbd_1:/var/lib/mysql mysql
```

| Flags | Params                     | Description                                                                                                                                            |
| ----- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -e    | ENV_VAR                    | It allow us to pass the eviroment variables.                                                                                                           |
| -v    | VOLUME_NAME:FOLDER_TO_SYNC | The volume to link with the container, if the volume doesn't exists, it will create it. It will save the data from the folder to sync, into the volume |


```
docker exec -ti mysql_pbd_1 /bin/bash
```

# Tags
Docker can identify images with tags. 

### docker tag IMAGE_NAME TAG_NAME:VERSION

## TASK: do an account in docker hub.

```sh
docker login
docker tag USER_NAME/TAG_NAME
docker push USER_NAME/TAG_NAME
```

We can do a deploy in gitlab to.

Go to a repository -> Deploy -> Container Registry
Then do this:
```
docker login registry.gitlab.com
```

Next we do a docker tag
```
docker tag registry.gitlab.com/USER_NAME/TAG_NAME
docker push registry.gitlab.com/USER_NAME/TAG_NAME
```
