DROP DATABASE IO_db
CREATE DATABASE IO_db
DROP TABLE IF EXISTS dbo.user_data
CREATE TABLE user_data (
ID INT PRIMARY KEY,
Imie VARCHAR(20),
Nazwisko VARCHAR(20),
Haslo VARCHAR(20),
Poziom VARCHAR(20)
);

INSERT INTO dbo.user_data
VALUES ('1', 'Mariusz', 'Nowak', 'marnow12', '0'),
('2', 'Krzysztof', 'Kowalski', 'krzykow89', '0'),
('3', 'Michał', 'Jurek', 'michjur44', '9'),
('4', 'Daniel', 'Nowak', 'marnow12', '4'),
('5', 'Kacper', 'Syc', 'kacsyc67', '0');