/*Projeto de Banco de Dados
Maria Luiza Mondeli
Due Oct 26, 11:59 PM
Avaliação 2
60 points

Maria Luiza Mondelli
8:00 AM (Edited 12:03 PM)
1 - Faça o download ou copie o conteúdo do arquivo modeloAvaliacao.sql 
Ele contém todas as perguntas que devem ser respondidas APENAS com as instruções SQL.
Substitua as linhas --<insira o sql aqui> com o SQL de sua resposta.

2 - NÃO apague as perguntas!
Do contrário não vou saber o que você está respondendo com o SQL.
SQLs perdidos no documento NÃO serão avaliados! 

3 - Uma vez que os itens tenham sido preenchidos nos espaços indicados, acesse o formulário anexado nesta atividade para preenchimento dos dados do grupo e upload do arquivo preenchido com as respostas.

4 - O modelo do banco de dados a ser criado segue em anexo nesta atividade e também no formulário.

ATENÇÃO: Certifique-se de que os comandos SQL estão de fato funcionando, pois vou executá-los!

Avaliação 2 - Projeto final
Google Forms

modeloBD.png
Image

modeloAvaliacao.sql
SQL
Class comments
Your work
Assigned
Private comments
*/
-----------------------------------
-- Criação ------------------------
-----------------------------------

-- 1. Informe o SQL para criação da tabela aluno (4 pontos):

create table aluno(
matricula serial primary key not null,
nome varchar,
email varchar,
turma integer
);

-- 2. Informe o SQL para criação da tabela disciplina (4 pontos):

create table disciplina(
	id_disciplina serial primary key not null,
	nome varchar,
	carga_horaria integer
);

-- 3. Informe o SQL para criação da tabela pauta (4 pontos):

create table pauta(
	id_pauta serial  primary key  not null,
	nota_1 decimal,
	nota_2 decimal,
	nota_3 decimal,
	matricula integer,
	id_disciplina integer,
	foreign key(matricula) references aluno(matricula),
	foreign key (id_disciplina) references disciplina(id_disciplina)
);

-- 4. Com o comando ALTER TABLE mude o nome das colunas nota_1, nota_2 e nota_3 para avaliacao_1, avaliacao_2 e avaliacao_3 (2 pontos):

ALTER TABLE pauta 
RENAME COLUMN nota_1 TO avaliacao_1;
ALTER TABLE pauta
RENAME COLUMN nota_2 TO avaliacao_2;
ALTER TABLE pauta
RENAME COLUMN nota_3 TO avaliacao_3;


-----------------------------------
-- Inserção dos dados -------------
-----------------------------------
-- Planilha com os dados a serem inseridos: https://tinyurl.com/y3ngdd5s

-- 1. Informe o SQL para inserção na tabela alunos (3 pontos):

insert into aluno (nome,email,turma) values
('Ana Paula Silva','aps@residencia.com.br',1),
('João Souza','js@residencia.com.br',1),
('Maria Moreira','mm@residencia.com.br',1),
('Daiane Costa','dc@residencia.com.br',	2),
('Guilherme Silva','gs@residencia.com.br',1),
('Júlia Almeida','ja@residencia.com.br',2),
('Diogo Andrade','da@residencia.com.br',2),
('Manuela Botelho','mb@gmail.com',1),
('Thiago Tavares','tt@residencia.com',2),
('João Pedro Carvalho','jpc@residencia.com.br',1);


-- 2. Informe o SQL para inserção na tabela disciplina (3 pontos):

insert into disciplina values
(default,'Banco de dados',24),
(default,'Lógica de programação',40),
(default,'Programação backend',	44);

-- 3. Informe o SQL para inserção dos dados na tabela pauta
-- (note que devem ser inseridos os respectivos identificadores de
-- alunos e disciplinas, não os nomes) (3 pontos):

insert into pauta(avaliacao_1,avaliacao_2,avaliacao_3,matricula,id_disciplina) values
(10,9,10,1,1),
(9,8,7,1,2),
(7,7,9,1,3),
(9,6,7,2,1),
(10,10,10,2,2),
(9,8,9,2,3),
(10,7,7,3,1),
(8,6,9,4,2),
(6,6,8,4,3),
(8,6,9,5,3),
(8,8,10,7,1),
(5,7,7,8,2),
(5,5,4,9,3),
(7,7,6,9,2),
(5,5,2,10,1);



-----------------------------------
-- Atualização dos dados ----------
-----------------------------------

-- 1. Atualizar o e-mail da aluna Manuela Botelho para mb@residencia.com.br (3 pontos):

update aluno set email='mb@residencia.com.br' where nome like '%Manuela Botelho%';

-- 2. Atualizar a nota 3 do aluno João Pedro Carvalho em Banco de dados para 7 (3 pontos):

update pauta set avaliacao_3 = 7 where matricula=10;

-----------------------------------
-- Consultas ----------------------
-----------------------------------

-- 1. Selecionar o nome e a turma dos alunos (1 ponto):

select nome as aluno,turma as turma from aluno;

-- 2. Selecionar a quantidade total de alunos cadastrados (2 pontos):

select count(*) as Total_Alunos from aluno;

-- 3. Selecionar a quantidade total de alunos em cada disciplina (4 pontos):

select d.nome as Disciplina,count(p.matricula) as Total_Alunos
from disciplina d
inner join pauta p on p.id_disciplina=d.id_disciplina
group by d.nome
order by d.nome; 


-- 4. Selecionar o nome do aluno, disciplina e as três notas de cada aluno (usando INNER JOIN ou WHERE) (4 pontos):

select a.nome as Nome_Aluno,d.nome as nome_disciplina,p.avaliacao_1 as av1,p.avaliacao_2 as av2,p.avaliacao_3 as av3
from aluno a	
inner join pauta p on p.matricula=a.matricula
inner join disciplina d on p.id_disciplina=d.id_disciplina;


-- 5. Selecionar o nome dos alunos e a quantidade de disciplinas que cada um cursa (4 pontos):

select a.nome as nome_aluno,count(p.id_disciplina) as Total_Disciplinas
from aluno a
left join pauta p on p.matricula=a.matricula
group by a.nome
order by a.nome;

-- 6. Selecionar o nome, disciplina e a média das três notas de cada aluno (4 pontos):

select a.nome,d.nome,round(avg((p.avaliacao_1+p.avaliacao_2+p.avaliacao_3)/3),2)
from aluno a	
inner join pauta p on p.matricula=a.matricula
inner join disciplina d on p.id_disciplina=d.id_disciplina
group by a.nome,d.nome
order by a.nome;


-- 7. Selecionar o nome, disciplina e a média das três notas dos alunos que tenham média menor que 6 (4 pontos):

select a.nome,d.nome,round(avg((p.avaliacao_1+p.avaliacao_2+p.avaliacao_3)/3),2)
from aluno a	
inner join pauta p on p.matricula=a.matricula
inner join disciplina d on p.id_disciplina=d.id_disciplina
group by 1,2
HAVING avg((p.avaliacao_1+p.avaliacao_2+p.avaliacao_3)/3)<6
order by a.nome;


-- 8. Selecionar o nome da disciplina e as médias das 3 notas (separadamente) de todos os alunos para cada disciplina (4 pontos):

select d.nome as disciplina,round(avg(p.avaliacao_1),2) as media_av_1,round(avg(p.avaliacao_2),2) as media_av_2,round(avg(p.avaliacao_3),2) as media_av_3
from disciplina d
inner join pauta p on p.id_disciplina=d.id_disciplina
group by d.nome
order by d.nome;

-- 9. Selecione o aluno com maior nota na avaliação 1 de banco de dados, mostrando qual foi a nota (4 pontos):

select a.nome,MAX(p.avaliacao_1)
from aluno a,pauta p,disciplina d
where p.matricula=a.matricula
and p.id_disciplina=(select d.id_disciplina where d.nome='Banco de dados')
and p.avaliacao_1=(select max(p.avaliacao_1)from pauta p)
group by a.nome;

/*
modeloAvaliacao.sql
Displaying modeloAvaliacao.sql.
*/