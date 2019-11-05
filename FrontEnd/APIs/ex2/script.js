
/*$.getJSON("https://api.punkapi.com/v2/beers?page=2&per_page=80",function(data){
console.log(data);
$.each(data,function(key,value){
let name=value.name

let img=value.image_url

$('.card').attr('src',img);
$('.temp').append(img);
});
    
});
*/

$.getJSON("https://api.punkapi.com/v2/beers?page=2&per_page=80",function(data){
$.each(data,function(key,value){
let name=value.name;
let image=value.image_url;
//$('.output').append('<h3>'+name+'</h3> <div><img class="card"src="' + image+'"></div>');
$('.card').append(
'<div class="row">'+
  '<div class="column">'+
    '<div class="card">'+
      '<h3>Card 1</h3>'+
      '<p>Some text</p>'+
      '<p>Some text</p>'+
    '</div></div></div>')

})
})

