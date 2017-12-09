# 1. Start Cassandra Server

```
docker run -d -p 7199:7199 -p 9042:9042 -p 9160:9160 -p 7001:7001 --name cassandra cassandra:3.7

docker images

docker ps
```

# ![](/assets/cassandra1.jpeg)

# 2. Get Cassandra CLI

```
wget http://apache.mirrors.ionfish.org/cassandra/3.11.1/apache-cassandra-3.11.1-bin.tar.gz

tar xvf apache-cassandra-3.11.1-bin.tar.gz

mv apache-cassandra-3.10 cassandra

rm apache-cassandra-3.11.1-bin.tar.gz

```

![](/assets/cassandra2.jpeg)

# 3. Create keyspace 

```
./cqlsh localhost 9042

CREATE KEYSPACE "bittiger" WITH replication = {'class': 'SimpleStrategy', 'replication_factor':1} AND durable_writes = 'true';

USE bittiger;

DESCRIBE KEYSPACE;
```

![](/assets/cassandra3.jpeg)

# 4. Create table

```
./cqlsh localhost 9042

CREATE TABLE user ( first_name text, last_name text, PRIMARY KEY (first_name));

DESCRIBE TABLE user;
```

![](/assets/cassandra4.jpeg)

# 5. Insert data

```
./cqlsh localhost 9042

INSERT INTO user (first_name, last_name) VALUES ('uncle', 'barney');
INSERT INTO user (first_name, last_name) VALUES ('Kobe', 'Brayant');
INSERT INTO user (first_name, last_name) VALUES ('Mike', 'Jordan');
```

# 6. Query data

```
./cqlsh localhost 9042

SELECT COUNT (*) FROM USER;
SELECT * FROM USER;
```

![](/assets/cassandra5.jpeg)



```
SELECT * FROM user WHERE first_name='uncle';
```

![](/assets/cassandra6.jpeg)

```
SELECT * FROM user WHERE last_name='barney';

SELECT * FROM user WHERE last_name='barney' allow filtering;
```

![](/assets/cassandra7.jpeg)

# 7. Look Into Cassandra Node

```
docker exec -it cassandra bash

cd /var/lib/cassandra

ls

cd bittiger/

cd cd user-4d627fa0c5db11e7851e29ff21047bb5/

ls

nodetool flush

ls
```

![](/assets/cassandra9.jpeg)

![](/assets/cassandra10.jpeg)

# 8. Delete data

```
./cqlsh localhost 9042

DELETE last_name FROM user WHERE first_name='uncle';

DELETE FROM user WHERE first_name='uncle';
```

![](/assets/cassandra11.jpeg)

# 9. Remove table

```
./cqlsh localhost 9042

TRUNCATE user;

SELECT * FROM user;

DROP TABLE user;

SELECT * FROM user;
```

![](/assets/cassandra12.jpeg)

