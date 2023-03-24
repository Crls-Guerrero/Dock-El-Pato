// obtiene la imagen por su ID
var imagen = document.getElementById("cuak");
var imagen2 = document.getElementById("cuak2");


if (imagen.addEventListener("click", function(){
  var audio = new Audio('../music/Cuak.mp3');
  audio.play();
 
})){ 
}else if (imagen2.addEventListener("click", function(){
  var audio = new Audio('../music/Cuak.mp3');
  audio.play();
  
}));

/* 
imagen2.addEventListener("click", function() {
 
  var audio = new Audio('../music/Cuak.mp3');

  audio.play();
});
 */