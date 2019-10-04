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









