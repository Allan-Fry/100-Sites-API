USE idea;

-- CREATE TABLE journal(
-- 	journalID		INT			NOT NULL PRIMARY KEY AUTO_INCREMENT	,
--     journalTitle	VARCHAR(30) NOT NULL
-- );


CREATE TABLE journalEntry(
	entryID			INT			NOT NULL PRIMARY KEY AUTO_INCREMENT,
    entryHeading	VARCHAR(30),
    position		INT 		NOT NULL
);

CREATE TABLE numericEntry(
	numericID		INT 		NOT NULL PRIMARY KEY AUTO_INCREMENT,
    defaultValue	INT,
    maxNumber		INT,
    currentVal		INT
);

CREATE TABLE textEntry(
	textID		INT 		NOT NULL PRIMARY KEY AUTO_INCREMENT,
    header		VARCHAR(30),
    body		VARCHAR(250)
);

CREATE TABLE entry(
	entryID			INT			NOT NULL,
    numericID		INT,
    textID			INT,
    PRIMARY KEY(entryID, numericID, textID),
    FOREIGN KEY(entryID) 	REFERENCES journalEntry(entryID),
    FOREIGN KEY(numericID)	REFERENCES numericEntry(numericID),
    FOREIGN KEY(textID)		REFERENCES textEntry(textID)

);