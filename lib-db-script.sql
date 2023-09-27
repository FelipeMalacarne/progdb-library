-- mysql setup script

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
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer', 'employee') NOT NULL DEFAULT 'customer'
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
    user_id INT NOT NULL,
    loan_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (loan_id) REFERENCES loans(id)
);



-- Criação de uma VIEW
CREATE VIEW IF NOT EXISTS available_books AS
SELECT b.id, b.title, a.name AS author, b.stock_qnt
FROM books b
INNER JOIN authors a ON a.id = b.author_id
WHERE b.status = 'available';

-- CREATE stored PROCEDURE
DELIMITER //
CREATE PROCEDURE RegistrarEmprestimo(
    IN book_id INT,
    IN user_id INT,
)

BEGIN
    DECLARE qnt INT;
    DECLARE days_late INT;

    SELECT stock_qnt INTO qnt FROM books WHERE id = book_id;

    IF qnt > 0 THEN
        INSERT INTO loans (book_id, user_id, lending_date, return_date)
        VALUES (book_id, user_id, CURDATE(), CURDATE() + 7 );

        UPDATE books SET stock_qnt = qnt - 1 WHERE id = book_id;
    END IF;
END;

-- Exemplo de uso da STORED PROCEDURE
CALL RegistrarEmprestimo(1, 1);


-- Criação de uma FUNCTION
DELIMITER //
CREATE FUNCTION CalcularMulta(dias_atraso INT) RETURNS DECIMAL(10, 2)
BEGIN
    RETURN dias_atraso * 2.5;
END;
//

-- Criação de um TRIGGER
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

-- Exemplo de uso da STORED PROCEDURE
CALL RegistrarEmprestimo(1, 1, '2023-08-30', '2023-09-06');




