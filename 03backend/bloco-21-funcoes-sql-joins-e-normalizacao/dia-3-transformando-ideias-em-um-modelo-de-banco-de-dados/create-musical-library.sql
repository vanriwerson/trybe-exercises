DROP SCHEMA IF EXISTS musical_library; # Reset do banco de dados
CREATE DATABASE IF NOT EXISTS musical_library;
USE musical_library;

# Criar primeiro as tabelas-pai
CREATE TABLE artist(
	`artist_id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE genre(
	`genre_id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(30) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE album(
	`album_id` INT PRIMARY KEY AUTO_INCREMENT,
	`artist_id` INT NOT NULL,
	`title` VARCHAR(100) NOT NULL,
	`price` DECIMAL(5, 2) NOT NULL,
	`genre_id` INT NOT NULL,
	FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
) ENGINE=InnoDB;

CREATE TABLE song(
	`song_id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(45) NOT NULL,
	`album_id` INT NOT NULL,
	FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;

INSERT INTO artist(`artist_id`, `name`)
VALUES (1, 'Van Riwerson');

INSERT INTO genre(`genre_id`, `name`)
VALUES (1, 'pop-rock');

INSERT INTO album(`album_id`, `artist_id`, `title`, `price`, `genre_id`)
VALUES (1, 1, 'Solo', 1.99, 1);

INSERT INTO song(`song_id`, `name`, `album_id`)
VALUES (1, 'As luzes', 1);