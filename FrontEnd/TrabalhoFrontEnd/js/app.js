var listFav = new Array();

//Função para add a favorita

function addFav(x, name) {  
  x.classList.toggle('fa-star');
  x.classList.toggle('fa-star-o');
  
  $.get("https://api.punkapi.com/v2/beers?beer_name="+name, function(data, status){                
                $.each( data, function( key, value ) {
                    
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                        console.log("REMOVE");
                        listFav.splice($.inArray(value, listFav),1);
                        isFav = true;
                      }
                    });
                    if(!isFav){
                      console.log("ADD");
                      listFav.push(value);                    
                    }                    
                });
            });
}

function listFavourite(){
  $("#home").empty();
  listFav.forEach((value)=>{
    $("#home").append(
                      '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                              '</div>'+
                              '<div class="card-body text-center">'+
                              '<h4 class="card-text">'+value.name+'</h4>'+
                              '<p class="card-text">'+value.tagline+'</p>'+
                              '<button onclick="modalCards()" class="btn btn-success" type="submit">Veja mais</button>'+
                            '</div> </div> </div>  ');
  });
}

function getBeers(){

            $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?page=2&per_page=80", function(data, status){                
                $.each( data, function( key, value ) {
                    var isFav = false;  
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div  class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                            '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                            '<div class="card-body text-center">'+
                            '<h4 class="card-text">' +value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            '</div> </div> </div>  ');
                             return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(   col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto" >'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap" >'+
                            '</div>'+
                            '<div class="card-body text-center" >'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<button onclick="modalCards()" class="btn btn-success" type="submit">Veja mais</button>'+
                            
                            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Open modal</button>'+
                            '<div class="modal" id="myModal">'+
                              '<div class="modal-dialog">'+
                                '<div class="modal-content">'+
                                  '<div class="modal-header">'+
                                    '<h4 class="modal-title">Modal Heading</h4>'+
                                    '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                                  '</div>'+
                                  '<div class="modal-body">'+
                                    'Modal body..'+
                                  '</div>'+
                                  '<div class="modal-footer">'+
                                    '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                                    '</div> </div> </div></div></div></div>'
                            );

                        




                    } 
                });                                        
            });

        }

        function modalCards(){






         window.alert()
        }        
        

        function searchBeer(){
          var name = $("#search").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?beer_name="+ name, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                           '<p class="card-text">'+value.tagline+'</p>'+
                            '</div> </div> </div>  ');
                            return;_
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                           '<p class="card-text">'+value.tagline+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }

        //Funções para pesquisa avançada-------------------------------------------------------
//--------------------------------------------------------------------------------------MaxABV
        function searchBeerByMaxAbv(){
          var maxAbv = $("#maxAbv").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?abv_gt="+ maxAbv, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }

        //--------------------------------------------------------------------------------------MinABV

        function searchBeerByMinAbv(){
          var minAbv = $("#minAbv").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?abv_lt="+ minAbv, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }

    //--------------------------------------------------------------------------------------MaxIbu   
       
          function searchBeerByMaxIbu(){
          var maxIbu = $("#maxIbu").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?ibu_gt="+ maxIbu, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }

        //--------------------------------------------------------------------------------------MinIbu
        function searchBeerByMinIbu(){
          var minIbu = $("#minIbu").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?ibu_lt="+ minIbu, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }

        //--------------------------------------------------------------------------------------MaxEBC

        function searchBeerByMaxEbc(){
          var maxEbc = $("#maxEbc").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?ebc_gt="+ maxEbc, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }
        function searchBeerByMinEbc(){
          var minEbc = $("#minEbc").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?ebc_lt="+ minEbc, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }
        function searchBeerByBrewedBefore(){
          var b_Before = $("#b_Before").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?brewed_before="+ b_Before, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                            //'<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }
        function searchBeerByBrewedAfter(){
          var b_After = $("#b_After").val();
          $("#home").empty();
            $.get("https://api.punkapi.com/v2/beers?brewed_after="+ b_After, function(data, status){                
                $.each( data, function( key, value ) {               
                    var isFav = false;
                    listFav.forEach((f)=>{
                      if(value.name == f.name ){
                          isFav = true;
                          $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                            return;
                        }
                    });
                    if(!isFav){
                      $("#home").append(
                          '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
                          '<div class="shadow card bg-white mb-4">'+
                            '<div class="text-right">'+
                              '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
                            '</div>'+
                          '<div class="card-body text-center">'+
                            '<h4 class="card-text">'+value.name+'</h4>'+
                            '<p class="card-text">'+value.tagline+'</p>'+
                           // '<p class="card-text">'+value.description+'</p>'+
                            '</div> </div> </div>  ');
                    } 
                
                });
            });
        }

        $(document).ready(function(){
                    
            getBeers();
        });