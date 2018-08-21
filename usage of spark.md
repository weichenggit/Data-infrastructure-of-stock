# 1. Get Spark CLI

```
scala -version

sbt --version

tar xvf spark-2.0.0-bin-hadoop2.7

mv spark-2.0.0-bin-hadoop2.7 spark

rm spark-2.0.0-bin-hadoop2.7.tgz
```

![](/picture/spark1.jpeg)

```
Spark-shell

pyspark

http://localhost:4040
```

# ![](/picture/spark2.jpeg)![](/picture/spark3.jpeg)

# 2. Start Cassandra Server

```
rawdata = range(0, 100)
○ Use python range to generate 100 numbers

data = sc.parallelize(rawdata)
○ Convert rawdata into spark RDD

count = data.count()
○ Spark will count the number of records
count
```

![](blob:file:///e0b4bcf4-b613-4070-9833-78ce9bca1cfe)

# 3. Spark Wordcount in 3 Lines

```
text = sc.textFile('shakespeare.txt')

counts = text.flatMap(lambda line: line.split(" ")).map(lambda word: (word, 1)).reduceByKey(lambda a, b: a + b)

counts.count()

counts.collect()
```

# ![](/picture/spark5.jpeg)

# 4. Try Some Analytics of Your Own

```
array1 = sc.parallelize([0,2,4,5,9,77])

array2 = sc.parallelize([1,5,3,4,10,100,104])

array1.union(array2).collect()

array1.intersection(array2).collect()
```

# ![](/picture/spark6.png)

```
array3 = array1.union(array2)

array3.coalesce(3)

array3.distinct()

array3.collect()

array3.filter(lambda x:x%2 == 1).collect()
```

![](/picture/spark7.jpeg)

![](/picture/spark8.png)



```

```

```
sc.parallelize([1,1,2,3,5,8])

result=rdd.groupBy(lambda x:x%2).collect()

sorted([(x,sorted(y))for(x,y)in result])
```

![](/picture/spark9.jpeg)

```
m = sc.parallelize([(1, 2), (3, 4),(5,6),(4, 2)]).keys()

m.collect()

n = sc.parallelize([(1, 2), (3, 4),(5,6),(4, 2)]).values()

n.collect()
```

![](/picture/spark11.png)

```
rdd = sc.parallelize([1, -2, 0, 9, -5, 3,2])

result = rdd.map(lambda x: x*x +1)

result.collect()

result.min()

result.max()
```

![](/picture/spark10.jpeg)



