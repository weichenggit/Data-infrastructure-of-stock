# 1. Play with Docker

```
docker run -d -p 3000:3000 unclebarney/chit-chat

docker images

docker ps
```

![](/assets/1.jpeg)

```
Go to http://localhost:3000 in browser
```

![](/assets/2.jpeg)

# 2. Start Zookeeper Server

```
docker run -d -p 2181:2181 -p 2888:2888 -p 3888:3888 --name zookeeper confluent/zookeeper

docker images

docker ps
```

![](/assets/3.jpeg)

**Get Zookeeper CLI:**

wget [http://apache.mirrors.ionfish.org/zookeeper/zookeeper-3.4.8/zookeeper-3.4.8.tar.gz](http://apache.mirrors.ionfish.org/zookeeper/zookeeper-3.4.8/zookeeper-3.4.8.tar.gz)

tar xvf zookeeper-3.4.8.tar.gz

mv zookeeper-3.4.8 zookeeper

rm zookeeper-3.4.8.tar.gz

![](/assets/5.jpeg)

cd zookeeper/bin

./zkCli.sh -server localhost:2181

![](/assets/7.jpeg)

**Browse Znode Data：**

```
ls /

ls /zookeeper

get /zookeeper/quota
```

![](/assets/zookeeper1.jpeg)

**Create Znode Data:**

```
create /workers "bittiger"

ls /

ls /workers

get /workers
```

![](/assets/zookeeper2.jpeg)

**Delete Znode Data:**

```
delete /workers

ls /

ls /workers

get /workers
```

![](/assets/zookeeper3.jpeg)

**Create Ephemeral Znode Data:**

```
create -e /workers "unclebarney"

ls /

ls /workers

get /workers
```

![](/assets/zookeeper4.jpeg)

**Watcher:**

```
get /workers true
```

![](/assets/zookeeper5.jpeg)

# 

# 3. Work with kafka

**Dependencies:**

```
scala -version

sbt sbtVersion

python --version

pip --version
```

![](/assets/kafkanew.jpeg)

**Start Kafka Server:**

```
docker run -d -p 9092:9092 -e KAFKA\_ADVERTISED\_HOST\_NAME=localhost -e KAFKA\_ADVERTISED\_PORT=9092 --name kafka --link zookeeper:zookeeper confluent/kafka

docker images

docker ps
```

![](/assets/kafka2.jpeg)

**Get Kafka CLI:**

```
wget http://apache.mirrors.ionfish.org/kafka/0.10.0.1/kafka\_2.11-0.10.0.1.tgz

tar xvf kafka\_2.11-0.10.0.1.tgz

mv kafka\_2.11-0.10.0.1 kafka

rm kafka\_2.11-0.10.0.1.tgz
```

![](/assets/kafka3.jpeg)

**Create Kafka Topic:**

```
./kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic bigdata

./kafka-topics.sh --list --zookeeper localhost:2181
```

![](/assets/kafka5.jpeg)

**Produce Messages:**

```
./kafka-console-producer.sh --broker-list localhost:9092 --topic bigdata
```

**Consume Messages:**

```
./kafka-console-consumer.sh --zookeeper localhost:2181 --topic bigdata![](/assets/kafka6.jpeg)
```

./kafka-console-consumer.sh --zookeeper localhost:2181 --topic bigdata --from-beginning

![](/assets/kafka7.jpeg)

**Look Into Kafka Broker:**

```
docker exec -it kafka bash

cd /var/lib/kafka

ls
```

![](/assets/kafka8.jpeg)

# 



