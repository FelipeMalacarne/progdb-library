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