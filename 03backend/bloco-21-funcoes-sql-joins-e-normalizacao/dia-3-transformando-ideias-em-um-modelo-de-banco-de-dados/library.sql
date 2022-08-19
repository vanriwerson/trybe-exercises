CREATE DATABASE IF NOT EXISTS library;
USE library;

CREATE TABLE authors(
	`author_id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL
);

CREATE TABLE categories(
	`category_id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL
);

CREATE TABLE books(
	`book_id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `release_date` DATE,
    `author_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(author_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE clients(
	`client_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE rentals( # Tabelas intermediárias possuem PK composta
	`rental_id` INT AUTO_INCREMENT, # Opcional
    `rental_date` DATE DEFAULT NOW(),
    `return_date` DATE,
    `book_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    CONSTRAINT PRIMARY KEY (rental_id, book_id, client_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);