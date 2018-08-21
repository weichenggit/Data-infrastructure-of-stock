# Big-Data-Stock-Platform

Build a platform to analysis real-time stock data crawlered from internet

•    Implemented a high-performance data processing platform to analyze stock data \(Kafka, Cassandra, Spark\)

•    Transmitted streams of real time data at least 10,000 messages per second \(Kafka\)

•    Optimized data storage schema for Cassandra to speed up data query performance

•    Averaged and clustered the streaming stock price every 5 seconds \(Spark Streaming\)

•    Designed a UI interface to display real time streaming average price on the web \(Node.js ,Redis and D3.js\)

# Project Architecture

![](/assets/architecture.jpeg)

# Web UI:

![](/assets/stock-visualization.jpeg)

# Send data to Kafka Broker : data-producer.py

A data producr which can grasp stock data each second and sent to kafka

### Dependencies

kafka-python:[https://github.com/dpkp/kafka-python](https://github.com/dpkp/kafka-python)

schedule:[https://pypi.python.org/pypi/schedule](https://pypi.python.org/pypi/schedule)

### Run

```
python data-producer.py AAPL stock-analyzer localhost:9092
python data-producer.py AMZN stock-analyzer localhost:9092
```

# 

# Store the data: data-storage.py

receive data from kafka and store data in Cassandra.

### Dependencies

cassandra-driver: [https://github.com/datastax/python-driver](https://github.com/datastax/python-driver)

cql

```
pip install -r requirements.txt
```

### Run

create keyspace and table using cqlsh.

```
CREATE KEYSPACE "stock" WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1} AND durable_writes = 
'true';
USE stock;

CREATE TABLE stock (stock_symbol text, trade_time timestamp, trade_price float, PRIMARY KEY (stock_symbol,trade_time));
```

```
python data-storage.py stock-analyzer localhost:9092 stock stock localhost
```

# 

# Processing the data: data-stream.py

### Dependencies

pyspark:[http://spark.apache.org/docs/latest/api/python/](http://spark.apache.org/docs/latest/api/python/)

kafka-python:[https://github.com/dpkp/kafka-python](https://github.com/dpkp/kafka-python)

### Run

```
/Users/chengwei/spark/bin/spark-submit --jars spark-streaming-kafka-0-8-assembly_2.11-2.0.0.jar data-stream.py stock-analyzer localhost:9092 average-stock-price
```



# Cache the data: redis-producer.py

Redis producer:consume message from kafka and publish to redis PUB.

### Dependencies

kafka-python: [https://github.com/dpkp/kafka-python](https://github.com/dpkp/kafka-python)

redis: [https://pypi.python.org/pypi/redis](https://pypi.python.org/pypi/redis)

### Run

```
python redis-publisher.py average-stock-price localhost:9092 localhost 6379 stock-price

The first average-stock-price is my kafka topic.

The first IP address is my docker-machine address.

The second average-stock-price is my redis channel followed by redis host and redis port.
```



# Web

## index.js

Build a webpage shows the real-time procesed stock data.

### Dependencies

socket.io:[http://socket.io/](http://socket.io/)

redis:[https://www.npmjs.com/package/redis](https://www.npmjs.com/package/redis)

```
npm install
```

### Run

If your all your application run in a docker-machine named bigdata, and the ip of the virtual machine is 192.168.99.100

```
node index.js --redis_host=localhost --redis_port=6379 --redis_channel=stock-price
```

![](/assets/nodejs.jpeg)

