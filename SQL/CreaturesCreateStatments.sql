USE creatures;

CREATE TABLE monsterClass(
    className			VARCHAR(30)		NOT NULL PRIMARY KEY AUTO_INCREMENT	,
	weakness 			VARCHAR(30),
    strength			VARCHAR(30),
    FOREIGN KEY (weakness) REFERENCES monsterClass(weakness)
);

CREATE TABLE monsterDefaultStats(
    typeName			VARCHAR(30)		NOT NULL PRIMARY KEY,
	power				INT,
    defence				INT,
    speed				INT,
    magic				INT,
    health				INT
);

CREATE TABLE monsterType(
    typeName			VARCHAR(30)		NOT NULL PRIMARY KEY AUTO_INCREMENT,
    monsterClass 		VARCHAR(30)		NOT NULL,
    monsterEffects 		INT,
    monsterDefaultStats INT				NOT NULL,
    FOREIGN KEY (monsterClass) 			REFERENCES monsterClass(className),
    FOREIGN KEY (monsterDefaultStats) 	REFERENCES monsterDefaultStats(typeName)
);

CREATE TABLE monsterStats(
    monsterID			VARCHAR(30)		NOT NULL PRIMARY KEY,
	power				INT,
    defence				INT,
    speed				INT,
    magic				INT,
    health				INT
);


CREATE TABLE monster(
	monsterID 			INT 			NOT NULL PRIMARY KEY AUTO_INCREMENT	,
    monsterName			VARCHAR(30)	,
    monsterType 		VARCHAR(30)		NOT NULL,
    monsterStats 		INT				NOT NULL,
    currentGame			INT,
    xPosition			INT,
    yPosition			INT
    FOREIGN KEY (

);