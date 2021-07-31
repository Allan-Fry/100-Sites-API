use books;

drop table if exists authorBooks;
drop table if exists books;
drop table if exists authors;

create table authors(
	authorID			int				not null auto_increment primary key,
    authorFirstName		varchar(60)		not null,
    authorLastName		varchar(60)		not null
);

create table books(
	bookID				int 			not null auto_increment primary key,
	title 				varchar(100) 	not null,
    backText 			varchar(250) 	not null,
    sales				int				not null,
    avgPrice			decimal(15, 2)	not null
);

create table authorBooks(
	authorID			int				not null,
    bookID				int				not null,
    primary key (authorID, bookID),
    foreign key (authorID) 	references authors(authorID),
    foreign key (bookID)	references books(bookID)
);

insert into authors(authorFirstName, authorLastName)
values
	('John', 'Shims'),
    ('Fin', 'Stabber'),
    ('Malery', 'Queens'),
    ('Sasha', 'Null'),
    ('Malvin', 'Whitestone'),
    ('Mic', 'Vic Von Swirl'),
    ('Tasty', 'Outider'),
    ('Low', 'Barticla'),
    ('Allan', 'Fry'),
    ('Funi', 'Jork')
;
insert into books(title, backText, sales, avgPrice)
values
		('Book of bad things', 'A book of bad things that you can do.', 7, 17.20),
        ('How to fuck up your life', 'A list of all of the mistakes I have ever made', 100, 6.67),
        ('Why clowns suck', 'I teach you why the clown hoard needs to be stopped', 1, 45.00),
        ('Bosses', 'Fin takes you thought the world of higher management to find if in fact his boss is spying on him', 79, 21.18)
        ;
        
insert into authorBooks(authorID, bookID)
values
		(1,1),
        (1,2),
        (2,3),
        (2,4),
        (1,4)
;
select 
		authorID,
        authorFirstName,
        authorLastName
		from
			authors;
        
select
		bookID,
        title,
        backText,
        sales,
        avgPrice
        from
			books;

select
	ar.authorFirstName,
    ar.authorLastName,
    bk.title
    from
			authors ar
						inner join authorBooks 	ab on ab.authorID	= ar.authorID
                        inner join books 		bk on bk.bookID		= ab.bookID;


