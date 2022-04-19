import db from "./createMySQLConnection.js"

//Run this to create required mySQL tables
db.query(`
    DROP TABLE IF EXISTS users;
`)
db.query(`
    CREATE TABLE users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(75),
        username VARCHAR(50),
        password VARCHAR(300)
    )
`)
db.query(`
    DROP TABLE IF EXISTS flowers;
`)
db.query(`
    CREATE TABLE flowers(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50),
        amount INT
    )
`)

db.end();