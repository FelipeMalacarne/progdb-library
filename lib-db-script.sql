CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    deathdate DATE NULL
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    stock_qnt INT NOT NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lending_date DATE NOT NULL,
    return_date DATE NULL,
    book_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE penalties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value DECIMAL(10,2) NOT NULL,
    paid BOOLEAN NOT NULL,
    user_id INT NOT NULL,
    loan_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (loan_id) REFERENCES loans(id)
);


-- base inserts

-- insert authors 
INSERT INTO authors (name, birthdate, deathdate)
VALUES
    ('J. R. R. Tolkien', '1892-01-03', '1973-09-02'),
    ('J. K. Rowling', '1965-07-31', NULL),
    ('George R. R. Martin', '1948-09-20', NULL),
    ('Stephen King', '1947-09-21', NULL),
    ('J. D. Salinger', '1919-01-01', '2010-01-27'),
    ('Harper Lee', '1926-04-28', '2016-02-19'),
    ('Markus Zusak', '1975-06-23', NULL),
    ('John Green', '1977-08-24', NULL),
    ('Dan Brown', '1964-06-22', NULL),
    ('Paulo Coelho', '1947-08-24', NULL),
    ('Agatha Christie', '1890-09-15', '1976-01-12'),
    ('Arthur Conan Doyle', '1859-05-22', '1930-07-07'),
    ('William Shakespeare', '1564-04-26', '1616-04-23'),
    ('Machado de Assis', '1839-06-21', '1908-09-29'),
    ('Clarice Lispector', '1920-12-10', '1977-12-09'),
    ('Carlos Drummond de Andrade', '1902-10-31', '1987-08-17'),
    ('Fernando Pessoa', '1888-06-13', '1935-11-30'),
    ('Mário de Andrade', '1893-10-09', '1945-02-25'),
    ('Cecília Meireles', '1901-11-07', '1964-11-09'),
    ('Vinicius de Moraes', '1913-10-19', '1980-07-09'),
    ('José de Alencar', '1829-05-01', '1877-12-12'),
    ('Machado de Assis', '1839-06-21', '1908-09-29'),
    ('Monteiro Lobato', '1882-04-18', '1948-07-04');


-- INSERT books
INSERT INTO books (title, author_id, stock_qnt)
VALUES 
    ('Lord of the Rings I', 1, 12), 
    ('Lord of the Rings II', 1, 15),
    ('Lord of the Rings III', 1, 15),
    ('Harry Potter I', 2, 10),
    ('Harry Potter II', 2, 10),
    ('Harry Potter III', 2, 10),
    ('Harry Potter IV', 2, 10),
    ('Harry Potter V', 2, 10),
    ('Harry Potter VI', 2, 10),
    ('Harry Potter VII', 2, 10),
    ('A Game of Thrones', 3, 10),
    ('A Clash of Kings', 3, 10),
    ('A Storm of Swords', 3, 10),
    ('A Feast for Crows', 3, 10),
    ('A Dance with Dragons', 3, 10),
    ('The Shining', 4, 10),
    ('The Stand', 4, 10),
    ('It', 4, 10),
    ('The Green Mile', 4, 10),
    ('The Catcher in the Rye', 5, 10),
    ('To Kill a Mockingbird', 6, 10),
    ('The Book Thief', 7, 10),
    ('The Fault in Our Stars', 8, 10),
    ('The Da Vinci Code', 9, 10),
    ('The Alchemist', 10, 10),
    ('And Then There Were None', 11, 10),
    ('The Hound of the Baskervilles', 12, 10),
    ('Hamlet', 13, 10),
    ('Romeo and Juliet', 13, 10),
    ('Macbeth', 13, 10),
    ('Othello', 13, 10),
    ('King Lear', 13, 10),
    ('The Taming of the Shrew', 13, 10),
    ('The Merchant of Venice', 13, 10),
    ('A Midsummer Night''s Dream', 13, 10),
    ('Much Ado About Nothing', 13, 10),
    ('The Tempest', 13, 10),
    ('Julius Caesar', 13, 10),
    ('As You Like It', 13, 10),
    ('Twelfth Night', 13, 10),
    ('The Comedy of Errors', 13, 10);


-- INSERT users
INSERT INTO users (name, email, password)
VALUES
    ('John Doe', 'johndoe@email.com', '123123'),
    ('Jane Doe', 'janedoe@email.com', '123123');


-- INSERT loans
INSERT INTO loans (book_id, user_id, lending_date, return_date)
VALUES
    (1, 1, '2021-08-30', '2021-09-06'),
    (2, 1, '2021-08-30', '2021-09-06'),
    (3, 1, '2021-08-30', '2021-09-06'),
    (4, 1, '2021-08-30', '2021-09-06'),
    (5, 1, '2021-08-30', '2021-09-06'),
    (6, 1, '2021-08-30', '2021-09-06'),
    (7, 1, '2021-08-30', '2021-09-06'),
    (8, 1, '2021-08-30', '2021-09-06'),
    (9, 1, '2021-08-30', '2021-09-06'),
    (10, 1, '2021-08-30', '2021-09-06'),
    (11, 1, '2021-08-30', '2021-09-06'),
    (12, 1, '2021-08-30', '2021-09-06'),
    (13, 1, '2021-08-30', '2021-09-06'),
    (14, 1, '2021-08-30', '2021-09-06'),
    (15, 1, '2021-08-30', '2021-09-06'),
    (16, 1, '2021-08-30', '2021-09-06'),
    (17, 1, '2021-08-30', '2021-09-06'),
    (18, 1, '2021-08-30', '2021-09-06'),
    (19, 1, '2021-08-30', '2021-09-06'),
    (20, 1, '2021-08-30', '2021-09-06'),
    (21, 1, '2021-08-30', '2021-09-06');

-- Criação de uma VIEW
CREATE VIEW available_books AS
SELECT b.id, b.title, a.name AS author, b.stock_qnt
FROM books b
INNER JOIN authors a ON a.id = b.author_id
WHERE b.stock_qnt > 0;

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




