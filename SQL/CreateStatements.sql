USE `100sites`;

CREATE TABLE sites(
	siteID 				INT 			NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    siteName			VARCHAR(30)		NOT NULL,
    siteURL				VARCHAR(200)
);

CREATE TABLE paragraphs(
	paraID				INT				NOT NULL PRIMARY KEY AUTO_INCREMENT,
    paraText			VARCHAR(250)	NOT NULL,
    siteID				INT				NOT NULL,
    FOREIGN KEY (siteID) REFERENCES site(siteID)
);

CREATE TABLE links(
	linkID				INT				NOT NULL PRIMARY KEY AUTO_INCREMENT,
	linkDescription		VARCHAR(250),
    link

);
