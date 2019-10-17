var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
// Add record here
  {
   artist:"Nome do Artista",
   title :"Titulo",
   release_year:2018,
   formats:["",""]
  
  }
  
];

function artistName(val){

var A =myMusic[val].artist;
console.log(A);
}

artistName(1);