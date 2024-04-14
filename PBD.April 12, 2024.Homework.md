```
docker run -dti -p3000:3306 --name mysql_pbd_homework --hostname mysql_pbd_homework -e MYSQL_ROOT_PASSWORD=ImASqlDeveloper -v data:/var/lib/mysql mysql
```
```
docker run -dti -p3000:3306 --name mysql_pbd_homework --hostname mysql_pbd_homework -e MYSQL_ROOT_PASSWORD=ImASqlDeveloper -v data:/var/lib/mysql mariadb:10.5.8
```
[Database files](https://github.com/datacharmer/test_db/archive/master.zip)