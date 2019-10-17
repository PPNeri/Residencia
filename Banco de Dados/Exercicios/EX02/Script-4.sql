select nome from artista where nome like 'a%';
select * from artista;
select nome,id,seguidores from artista where nome like '%a';

select nome from musica where nome like 'a%' ;
--Criar views

create view pesquisa_dinamica as select nome from musica
where nome like 'a%';
--

update artista set nome='Larissa' where nome like '%Anitta%';
select nome,id from artista where id=231;
select nome from artista where nome like '%anitta%'; 
select nome from artista where nome like '%larissa%'; 

select * from artista where seguidores > 5000000
order by popularidade desc;


SELECT * from musica;
ORDER by nome;

create view popularidade as select m.nome,a.nome ,a.popularidade from musica m,artista a where a.id=m.id_artista
order by a.popularidade desc;

select  m.nome as musica ,
		a.nome as artista,
		a.seguidores as folowers
from    musica as m,artista as a where a.id=m.id_artista and a.nome like '%mack%';
--select 
select 	m.nome as musica,
		p.nome as pais,
		a.nome as artista,
		pm.streams
from 	musica m ,
		pais p,
		pais_musica pm,
		artista a
where 	m.id=pm.id_musica and p.id=pm.id_pais and a.id=m.id_artista and p.nome like '%brazil%' 
order by streams desc;


select m.nome,p.nome from musica m,pais p,pais_musica pm
where m.id=pm.id_musica
and p.id=pm.id_pais;

--inner join

select m.nome,p.nome,a.artista from musica m 
inner join pais_musica pm on m.id = pm.id_musica
inner join pais p on p.id=pm.id_pais
inner join artista a on a.id=m.id_artista;


--Selecionar musica e artista

select 	m.nome,a.nome 
from musica m
inner join artista a on m.id_artista=a.id;


--Selecionar musica ,artista genereo

select m.nome as musica,a.nome as artista,g.nome as genero 
from musica m
inner join artista a on a.id=m.id_artista
inner join artista_genero ag on ag.id_artista=a.id
inner join genero g on g.id=ag.id_genero;



select m.nome,a.nome,g.nome 
from musica m
inner join artista a on a.id=m.id_artista
inner join artista_genero ag on ag.id_artista=a.id
inner join genero g on g.id=ag.id_genero
where a.nome='Lil Uzi Vert' and g.nome ='rap' ORDER by m.nome;



--Left Join

SELECT a.nome,g.nome
FROM artista a 
LEFT JOIN artista_genero ag on ag.id_genero= g.id
LEFT JOIN genero g on g.id=ag.id_genero; 

--Selecionar artista com maior popularidade

select nome,MAX(popularidade) FROM artista;
------------------------------------------------
SELECT nome,popularidade
from artista
ORDER BY popularidade,nome desc;
------------------------------------------------
select nome,MIN(popularidade) FROM artista;


-------Agregaçao

--Count
SELECT count(*) as Registros_de_Musica  from musica;

SELECT a.nome,count(ag.id_genero) as quantidadeGenero
FROM artista a
INNER JOIN artista_genero ag ON ag.id_artista=a.id
GROUP BY a.nome
ORDER BY 2 DESC;

--Quantidade de musica para um artista

SELECT a.nome,count(m.id) as Total_de_Musicas
FROM musica m 
INNER JOIN artista a ON m.id_artista=a.id
GROUP BY 1--a.nome
ORDER BY 2 DESC;

--Quantidade de musicas para pais

SELECT p.nome,count(pm.id) as Total_Musicas
FROM pais p 
INNER JOIN pais_musica pm ON pm.id_pais=p.id
GROUP BY 1
ORDER BY 2 DESC;

--media Streans

SELECT p.nome,round(avg(pm.streams),2)as Media_Streams
FROM pais p
INNER JOIN pais_musica pm ON pm.id_pais=p.id
GROUP BY 1
ORDER BY 2 DESC;

--Somatorio Streans por pais

SELECT p.nome,sum(pm.streams)as Soma_Streams
FROM pais p
INNER JOIN pais_musica pm ON pm.id_pais=p.id
GROUP BY 1
ORDER BY 2 DESC;

--Have+funcoes de agregação

SELECT p.nome,sum(pm.streams)as Soma_Streams
FROM pais p
INNER JOIN pais_musica pm ON pm.id_pais=p.id
GROUP BY 1
HAVING sum(pm.streams)>20000000
OR p.nome LIKE '%brazil%'
ORDER BY 2 DESC;

--Between

SELECT p.nome,sum(pm.streams)as Soma_Streams
FROM pais p
INNER JOIN pais_musica pm ON pm.id_pais=p.id
GROUP BY 1
HAVING sum(pm.streams) BETWEEN 10000000 AND 20000000
OR p.nome LIKE '%brazil%'
ORDER BY 2 DESC;














