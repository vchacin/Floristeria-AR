let imgPlanta = document.getElementById("contenedor-planta");
let hideElements = document.getElementsByClassName("hide");
let circulo = document.querySelector(".contenedor-amarillo");


imgPlanta.addEventListener("click", function() {
   
    for (i=0; i < hideElements.length; i++){
        hideElements[i].style.display="none";
    }
    
    setInterval(function(){ circulo.style.top="-50%"; transitionDelay = "2s"; }, 1000);

});

