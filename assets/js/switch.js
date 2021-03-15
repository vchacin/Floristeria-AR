let imgPlanta = document.getElementById("contenedor-planta");
let hideElements = document.getElementsByClassName("hide");
let circulo = document.querySelector(".contenedor-amarillo");
let infoContenedor = document.querySelector(".info-planta-contenedor")
let divTitulo = document.querySelector(".info-planta-titulo")
let plantaSubtitulo = document.querySelector(".subtitulo-planta");
let plantaTitulo = document.querySelector (".titulo-planta");
let paragrafo = document.querySelector (".paragrafo-planta");
let camaraIcono = document.querySelector (".camara-icon");
let corazonIcono = document.querySelector (".corazon-icon");


imgPlanta.addEventListener("click", function() {
   
    for (i=0; i < hideElements.length; i++){
        hideElements[i].style.display="none";
    }
    
    imgPlanta.style.width="65%";
    
    infoContenedor.style.flexDirection="row"; 
    infoContenedor.style.justifyContent="space-between";
    
    divTitulo.style.alignItems="flex-start";
    
    plantaSubtitulo.style.fontSize="4.5vw";
    plantaSubtitulo.style.color="#385C0A";
    
    plantaTitulo.style.fontSize="5vw";
    plantaTitulo.style.fontWeight="700";

    paragrafo.style.textAlign="left";
    paragrafo.style.paddingRight="30%";

    camaraIcono.style.top="-16%";
    camaraIcono.style.right="25%";

    corazonIcono.style.top="-16%";
    corazonIcono.style.left="28%";

    


    setInterval(function(){ circulo.style.top="-64.5%"}, 200);

});


    