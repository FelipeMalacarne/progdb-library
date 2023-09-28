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
    publisher VARCHAR(255) NULL,
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

-- INSERT authors
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
INSERT INTO books (title, edition, author_id, publication_date, publisher, status)
VALUES 
    ('Lord of the Rings I', 2, 1, '1940-09-02', 'Bookly', 'available'),
    ('Lord of the Rings II', 1, 1, '1954-11-11', 'Bookly', 'unavailable' ),
    ('Lord of the Rings III', 1, 1, '1955-10-20', 'Bookly','unavailable'),
    ('Harry Potter I', 2, 2, '1997-06-26', 'Scholastic', 'available'),
    ('Harry Potter II', 2, 2, '1998-07-02', 'Scholastic','unavailable'),
    ('Harry Potter III', 2, 2, '1999-07-08', 'Scholastic', 'available'),
    ('Harry Potter IV', 2, 2, '2000-07-08', 'Scholastic', 'available'),
    ('Harry Potter V', 2, 2, '2003-06-21', 'Scholastic', 'available'),
    ('Harry Potter VI', 2, 2, '2005-07-16', 'Scholastic', 'available'),
    ('Harry Potter VII', 2, 2, '2007-07-21', 'Scholastic', 'available'),
    ('A Game of Thrones', 3, 3, '1996-08-01', 'Bantam Spectra','unavailable'),
    ('A Clash of Kings', 3, 3, '1998-11-16', 'Bantam Spectra', 'available'),
    ('A Storm of Swords', 3, 3, '2000-08-08', 'Bantam Spectra', 'available'),
    ('A Feast for Crows', 3, 3, '2005-11-08', 'Bantam Spectra', 'available'),
    ('The Green Mile', 1, 4, '1955-10-20', 'Burning Pages', 'available'),
    ('The Catcher in the Rye', 1, 5, '2000-07-08', 'Burning Pages', 'available'),
    ('To Kill a Mockingbird', 1, 6, '1955-10-20', 'Burning Pages', 'available'),
    ('The Book Thief', 1, 7, '2000-07-08', 'Paperworks', 'available'),
    ('The Fault in Our Stars', 1, 8, '1955-10-20', 'Paperworks', 'available'),
    ('The Da Vinci Code', 1, 9, '2000-07-08', 'Burning Pages', 'available'),
    ('The Alchemist', 1, 10, '2003-06-21', 'Paperworks','unavailable'),
    ('And Then There Were None', 1, 11, '1955-10-20', 'Bantam Spectra', 'available'),
    ('The Hound of the Baskervilles', 1, 12, '1955-10-20', 'Burning Pages', 'available'),
    ('Hamlet', 13, 1, '1955-10-20', 'Paperworks', 'available'),
    ('Romeo and Juliet', 1, 13, '1997-06-26', 'Burning Pages', 'available'),
    ('Macbeth', 1, 13, '2000-07-08', 'Paperworks', 'available'),
    ('Othello', 1, 13, '2003-06-21','Bookly', 'available'),
    ('The Taming of the Shrew', 1, 13, '1997-06-26', 'Burning Pages', 'available'),
    ('King Lear', 1, 13, '2000-07-08', 'Paperworks', 'available'),
    ('The Merchant of Venice', 1, 13, '1955-10-20', 'Paperworks', 'available'),
    ('A Midsummer Night''s Dream', 1, 13, '1997-06-26', 'Paperworks', 'available'),
    ('Much Ado About Nothing', 1, 13, '1955-10-20', 'Burning Pages', 'available'),
    ('The Tempest', 1, 13, '2000-07-08', 'Paperworks', 'available'),
    ('Julius Caesar', 1, 13, '1955-10-20', 'Burning Pages', 'available'),
    ('As You Like It', 1, 13, '2000-07-08', 'Paperworks', 'available'),
    ('Twelfth Night', 1, 13, '1955-10-20', 'Burning Pages', 'available'),
    ('The Comedy of Errors', 1, 13, '1955-10-20', 'Paperworks', 'available');




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




