var n1,op;    
            
        function getText(val){

             visor.value+=val;


            }

        function soma(){
            n1=document.getElementById("visor").value;
            limpar();
            return op="+"; 

        }

        function sub(){
            n1=document.getElementById("visor").value;
            limpar();
            //visor.value+="-";
            return op="-";

        }

        function mult(){
            n1=document.getElementById("visor").value;
            limpar();
            return op="*";
            //visor.value+="*";
            

        }

        function div(){
            n1=document.getElementById("visor").value;
            limpar();
            return op="/";
            //visor.value+="/";
            

        }

        function limpar(){
            document.getElementById("visor").value="";
            
        }

        function resultado (){

            //visor.value=n1;

            switch(op){

                case "+":
                    var result=Number(n1)+Number(document.getElementById("visor").value);
                    break;
                case "-":
                var result=Number(n1)-Number(document.getElementById("visor").value);
                    break; 

                case "*":
                var result=Number(n1)*Number(document.getElementById("visor").value);
                    break;
                case "/":
                var result=Number(n1)/Number(document.getElementById("visor").value);
                    break;
                        
            
            }
            
            visor.value=result;
            

            

        }