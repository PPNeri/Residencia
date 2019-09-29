--Criar tabelas
CREATE TABLE artista(
	id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	nome text,
	popularidade integer,
	seguidores integer
);

CREATE TABLE genero(
	id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
	nome TEXT
);

CREATE table artista_genero (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
id_artista integer,
id_genero integer,
FOREIGN key (id_genero)REFERENCES genero(id),
foreign key (id_artista)references artista(id)
);

SELECT * FROM artista a, genero g , artista_genero ag WHERE
a.id=ag.id_artista and g.id=ag.id_genero;

select* from artista;
SELECT* from genero;

create table pais(



)













