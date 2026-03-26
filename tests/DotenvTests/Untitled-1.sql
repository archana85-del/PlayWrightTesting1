


--- 1. DDL  CReate ,Update,Delete
--- 2. DML  
--- 3. DCL


--1.  Syntax
Create Database databasename

Create Database ETLTraining_Feb28

USE ETLTraining_Feb28

--Create schema schemaname---Syntax

Create schema RAW



Create Table RAW.Practice
(
ID INT,
Name VARCHAR(20),
Description VARCHAR(20)
)

Create Table RAW.Practice1
(
ID INT,
Name CHAR(20),
Description CHAR(20)
)

--DBO
SELECT * FROM RAW.Practice
SELECT * FROM RAW.Practice1

--INSERT INTO TABLENAME(column1,column2,column3) VALUES (1,'','') --Syntax

INSERT INTO RAW.Practice(Id,Name,Description) VALUES (1,'Aarthi','Lead')

INSERT INTO RAW.PRACTICE1(ID,NAME,DESCRIPTION) 
SELECT ID,NAME,Description FROM RAW.Practice

--Variant 1
INSERT INTO RAW.PRACTICE1(ID,NAME,DESCRIPTION) 
SELECT ID,Description,Name FROM RAW.Practice

--Variant2                          INT,VARCHAR,VARCHAR
INSERT INTO RAW.PRACTICE1(ID,NAME,DESCRIPTION) 
SELECT Description,ID,Name FROM RAW.Practice

--Variant 3
INSERT INTO RAW.PRACTICE(ID,NAME,DESCRIPTION) 
SELECT 5,Name,DESCRIPTION FROM RAW.Practice1 

---Variant 4
INSERT INTO RAW.PRACTICE(ID,NAME,DESCRIPTION) 
SELECT 5,Name,DESCRIPTION FROM RAW.Practice1 WHERE ID=5

SELECT * FROM RAW.Practice1 WHERE ID=5

SELECT * FROM RAW.Practice


INSERT INTO RAW.Practice(Id,Name,Description) VALUES (7,'Kranthikumar','Lead')

INSERT INTO RAW.Practice1(Id,Name,Description) VALUES (7,'Kranthikumar','Lead')


SELECT * FROM RAW.Practice
SELECT * FROM RAW.Practice1


--DELETE TABLE WHERE CONDITION
DELETE RAW.Practice1 WHERE ID=5

SELECT * FROM RAW.Practice1

DELETE RAW.Practice

TRUNCATE TABLE RAW.Practice1


DROP TABLE TABLENAME--SYNTAX
DROP TABLE RAW.Practice1