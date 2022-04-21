DROP DATABASE IF EXISTS flowershop;
CREATE DATABASE flowershop;

USE flowershop;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(75),
        username VARCHAR(50),
        password VARCHAR(300)
);

DROP TABLE IF EXISTS flowers;
CREATE TABLE flowers(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50),
        amount INT
    );

INSERT INTO flowers (name, amount) VALUES ("Rose",100);
INSERT INTO flowers (name, amount) VALUES ("Tulip",100);
INSERT INTO flowers (name, amount) VALUES ("Daffodils",100);