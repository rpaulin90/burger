

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  date TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
);

