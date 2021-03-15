let imgPlanta = document.getElementById("contenedor-planta");
let hideElements = document.getElementsByClassName("hide");
let circulo = document.querySelector(".contenedor-amarillo");

imgPlanta.addEventListener("click", function()) {
   
    for (i=0; i < hideElements.length; i++){
        hideElements[i].style.display="none";
    }
});

