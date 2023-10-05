
CREATE VIEW IF NOT EXISTS available_books AS
SELECT b.id, b.title, a.name AS author, b.stock_qnt
FROM books b
INNER JOIN authors a ON a.id = b.author_id
WHERE b.status = 'available';

--SHOW ALL USERS LOANS
CREATE VIEW IF NOT EXISTS user_loans AS
SELECT l.id, l.lending_date, l.expected_date, l.return_date, b.title, b.edition, b.publication_date, b.publisher, a.name AS author, u.name AS user
FROM loans l
INNER JOIN books b ON b.id = l.book_id
INNER JOIN authors a ON a.id = b.author_id
INNER JOIN users u ON u.id = l.user_id;

--SHOW ALL USERS PENALTIES
CREATE VIEW IF NOT EXISTS user_penalties AS
SELECT p.id, p.value, p.paid, l.lending_date, l.expected_date, l.return_date, b.title, b.edition, b.publication_date, b.publisher, a.name AS author, u.name AS user
FROM penalties p
INNER JOIN loans l ON l.id = p.loan_id
INNER JOIN books b ON b.id = l.book_id
INNER JOIN authors a ON a.id = b.author_id
INNER JOIN users u ON u.id = l.user_id;

