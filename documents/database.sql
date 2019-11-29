mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| innodb             |
| mysql              |
| performance_schema |
| sys                |
+--------------------+

mysql> CREATE DATABASE mytodolist;

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| innodb             |
| mysql              |
| mytodolist         |
| performance_schema |
| sys                |
+--------------------+
mysql> USE mytodolist;
Database changed

 mysql> SHOW TABLES;

mysql> CREATE TABLE user(userId BIGINT(20) NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY(userId));

mysql> SHOW TABLES;
+----------------------+
| Tables_in_mytodolist |
+----------------------+
| user                 |
+----------------------+

mysql> INSERT INTO user (name) VALUES ("Shahla");

mysql> INSERT INTO user (name) VALUES ("Atiq");

mysql> SELECT * FROM user;
+--------+--------+
| userId | name   |
+--------+--------+
|      1 | Shahla |
|      2 | Atiq   |
+--------+--------+
mysql> USE task;
ERROR 1049 (42000): Unknown database 'task'
mysql> CREATE TABLE task (taskId VARCHAR(20) NOT NULL, taskDescription VARCHAR(100), completed VARCHAR(20), dateCreated DATE, userId BIGINT(20), PRIMARY KEY(taskId));

mysql> ALTER TABLE task ADD FOREIGN KEY (userId) REFERENCES user(userId);

mysql> USE task;
ERROR 1049 (42000): Unknown database 'task'
mysql> INSERT INTO task (taskId, taskDescription, completed, dateCreated, userId)VALUES("0001", "Distribution of catalogue", "true", "2019-11-25","1");

mysql> SELECT * FROM task;
+--------+---------------------------+-----------+-------------+--------+
| taskId | taskDescription           | completed | dateCreated | userId |
+--------+---------------------------+-----------+-------------+--------+
| 0001   | Distribution of catalogue | true      | 2019-11-25  |      1 |
+--------+---------------------------+-----------+-------------+--------+

mysql> INSERT INTO task (taskId, taskDescription, completed, dateCreated, userId)VALUES("0002", "Collection of catalogue", "true", "2019-11-23","1");

mysql> INSERT INTO task (taskId, taskDescription, completed, dateCreated, userId)VALUES("0003", "Update and submit order", "true", "2019-11-20","2");

mysql> INSERT INTO task (taskId, taskDescription, completed, dateCreated, userId)VALUES("0004", "prepare individual order", "false", "2019-11-10","1");

mysql> INSERT INTO task (taskId, taskDescription, completed, dateCreated, userId)VALUES("0005", "Pay the invoice", "false", "2019-11-08","2");

mysql> INSERT INTO task (taskId, taskDescription, completed, dateCreated, userId)VALUES("0006", "Check calender dates", "false", "2019-11-05","1");

mysql> SELECT * FROM task;
+--------+---------------------------+-----------+-------------+--------+
| taskId | taskDescription           | completed | dateCreated | userId |
+--------+---------------------------+-----------+-------------+--------+
| 0001   | Distribution of catalogue | true      | 2019-11-25  |      1 |
| 0002   | Collection of catalogue   | true      | 2019-11-23  |      1 |
| 0003   | Update and submit order   | true      | 2019-11-20  |      2 |
| 0004   | prepare individual order  | false     | 2019-11-10  |      1 |
| 0005   | Pay the invoice           | false     | 2019-11-08  |      2 |
| 0006   | Check calender dates      | false     | 2019-11-05  |      1 |
+--------+---------------------------+-----------+-------------+--------+
