DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE DATABASE burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES              ("Lamb Burger", TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES              ("Denver Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES              ("Croque Burger", false);