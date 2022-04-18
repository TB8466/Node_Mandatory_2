import db from "./createMySQLConnection.js"

//Run this to create required mySQL tables
db.query(`
    DROP TABLE IF EXISTS users;
`)
db.query(`
    CREATE TABLE users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50),
        password VARCHAR(50)
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