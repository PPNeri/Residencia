var cont=0;
        function add(){                            
            var nome = $("#nome").val();
            console.log("teste"+nome);
            cont++;
            var linha = "<tr id='linha"+cont+"' >"
                            +"<td id='nome"+cont+"' >"+nome+"</td>"
                            +"<td><button class='btn btn-warning' onclick='editar("+cont+")'>Editar</button></td>"
                            +"<td>"
                            +"<button onclick='remover("+cont+")' class='btn btn-danger'>Remover</button>"
                            +"</td>"
                        +"</tr>";
            $("#itens").append(linha);                       
        }
        function remover(num){
            $("#linha"+num).remove();

        }

        function editar (num){
            var nome=prompt("Entre com o novo nome :");
            $("#nome"+num).text(nome);

        }    




        