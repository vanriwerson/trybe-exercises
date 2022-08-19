DROP SCHEMA IF EXISTS hogwarts;
CREATE SCHEMA IF NOT EXISTS hogwarts;
USE hogwarts;

CREATE TABLE casa(
	`casa_id` INT PRIMARY KEY AUTO_INCREMENT,
    `casa` VARCHAR(20) NOT NULL
);

CREATE TABLE patrono(
	`patrono_id` INT PRIMARY KEY AUTO_INCREMENT,
    `patrono` VARCHAR(50) NOT NULL
);

CREATE TABLE estado_sanguineo(
	`estado_sanguineo_id` INT PRIMARY KEY AUTO_INCREMENT,
    `estado_sanguineo` VARCHAR(50) NOT NULL
);

CREATE TABLE personagem(
	`personagem_id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `nascimento` DATE,
    `casa_id` INT NOT NULL,
    `estado_sanguineo_id` INT NOT NULL,
    `patrono_id` INT,
    FOREIGN KEY (casa_id) REFERENCES casa(casa_id),
    FOREIGN KEY (estado_sanguineo_id) REFERENCES estado_sanguineo(estado_sanguineo_id),
    FOREIGN KEY (patrono_id) REFERENCES patrono(patrono_id)
);

INSERT INTO casa(`casa_id`, `casa`)
VALUES(1, 'Grifnória'),
(2, 'Sonserina'),
(3, 'Corvinal'),
(4, 'Lufa-lufa');

INSERT INTO patrono(`patrono_id`, `patrono`)
VALUES(1, 'Cervo'),
(2, 'Fênix'),
(3, 'Lontra'),
(4, 'Corça'),
(5, 'Lebre'),
(6, 'Cão'),
(7, 'Gato'),
(8, 'Jack Russel terrier'),
(9, 'Lobo');

INSERT INTO estado_sanguineo(`estado_sanguineo_id`, `estado_sanguineo`)
VALUES(1, 'Nascido-trouxa'),
(2, 'Puro sangue'),
(3, 'Mestiço');

INSERT INTO personagem(`personagem_id`, `nome`, `nascimento`, `casa_id`, `estado_sanguineo_id`, `patrono_id`)
VALUES(1, 'Hermione Granger', '1979-09-19', 1, 1, 3);