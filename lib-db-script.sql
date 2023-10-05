-- mysql setup script

DROP TABLE IF EXISTS penalties;
DROP TABLE IF EXISTS returns;
DROP TABLE IF EXISTS loans;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

 CREATE TABLE IF NOT EXISTS authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    deathdate DATE NULL
);

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    edition INT NOT NULL DEFAULT 1,
    status ENUM('available', 'unavailable') NOT NULL DEFAULT 'available',
    publication_date DATE NOT NULL,
    publisher VARCHAR(255) NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer', 'employee') NOT NULL DEFAULT 'customer',
    UNIQUE KEY (email)
);

CREATE TABLE IF NOT EXISTS loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lending_date DATE NOT NULL,
    expected_date DATE NULL,
    book_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS returns(
    id INT AUTO_INCREMENT PRIMARY KEY,
    return_date DATE NOT NULL,
    loan_id INT NOT NULL,
    FOREIGN KEY (loan_id) REFERENCES loans(id)
);

CREATE TABLE IF NOT EXISTS penalties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value DECIMAL(10,2) NOT NULL,
    paid BOOLEAN NOT NULL,
    loan_id INT NOT NULL,
    FOREIGN KEY (loan_id) REFERENCES loans(id)
);

DELIMITER //
CREATE FUNCTION CalcularMulta(dias_atraso INT) RETURNS DECIMAL(10, 2)
BEGIN
    RETURN dias_atraso * 2.5;
END;
//


DELIMITER //
CREATE TRIGGER VerificarDevolucao
BEFORE UPDATE ON Emprestimos
FOR EACH ROW
BEGIN
    IF NEW.data_devolucao < NEW.data_emprestimo THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de devolução não pode ser anterior à data de empréstimo.';
    END IF;
END;
//

