-- Auth Procedures
CREATE PROCEDURE register_user(IN email VARCHAR(255), IN password VARCHAR(255), IN name VARCHAR(255), OUT created_user JSON)
BEGIN
    DECLARE hashed_password VARCHAR(255);
    SET hashed_password = SHA2(CONCAT(password), 256);
    INSERT INTO users (email, password, name) VALUES (email, hashed_password, name);
    SELECT JSON_OBJECT('id', LAST_INSERT_ID(), 'email', email, 'name', name) INTO created_user;
END;


CREATE PROCEDURE authenticate_user(IN auth_email VARCHAR(255), IN auth_pass VARCHAR(255), OUT user_obj JSON)
BEGIN
    DECLARE hashed_password VARCHAR(255);
    SET hashed_password = SHA2(CONCAT(auth_pass), 256);
    IF EXISTS (SELECT * FROM users WHERE email = auth_email AND password = hashed_password) THEN
        SELECT JSON_OBJECT('id', id, 'email', email, 'name', name) INTO user_obj FROM users WHERE email = auth_email AND password = hashed_password;
    ELSE
        SELECT JSON_OBJECT('error', 'Invalid credentials') INTO user_obj;
    END IF; 
END;

-- use the procedures
CALL register_user('felipe@teste.com', '123456', 'felipe', @created_user);
SELECT @created_user;

CALL authenticate_user('felipe@teste.com', '123456', @user_obj);
SELECT @user_obj;
