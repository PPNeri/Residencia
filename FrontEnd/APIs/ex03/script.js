
let listadecervejas=new Array();

$.getJSON('https://api.punkapi.com/v2/beers?page=2&per_page=80',function(data){
    $.each(data,function(key,value){
      
      let name=value.name;
      let image=value.image_url
      let tagline=value.tagline
      let id=value.id
      
      $('.card-columns').append(
          
        '<div class="card" style="max-width:auto;">'+
        '<div class="card-block text-center">'+
        '<h6 class="card-title">'+name+'</h6>'+
        '<img src="'+image+'" style="width:10%;">'+
        '<p class="card-text">'+tagline+'</p>'+
        //-----------------------------------------MODAL  
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+id+'" style="margin:10px">Launch demo modal</button>'+
        '<div class="modal fade" id="exampleModal'+id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
        '</button>'+
        '</div>'+
        '<div class="modal-body">"'+name+'"</div>'+
                  '<div class="modal-footer">'+
                  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                  '<button type="button" class="btn btn-primary">Save changes</button>'+
                  '</div>'+
                  '</div>'+
                  '</div>'+
                  '</div>'+
                  '</div'
                  );
                  
                  
                    
                });
                
              });
              
