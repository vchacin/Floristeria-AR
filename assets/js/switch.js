let imgPlanta = document.getElementById("contenedor-planta"); //MODIFY
let hideElements = document.getElementsByClassName("hide"); 
let circulo = document.querySelector(".contenedor-amarillo"); //MODIFY
let infoContenedor = document.querySelector(".info-planta-contenedor") //MODIFY
let divTitulo = document.querySelector(".info-planta-titulo") //MODIFY
let plantaSubtitulo = document.querySelector(".subtitulo-planta"); //MODIFY
let plantaTitulo = document.querySelector (".titulo-planta"); //MODIFY
let paragrafo = document.querySelector (".paragrafo-planta"); //MODIFY
let camaraIcono = document.querySelector (".camara-icon"); //MODIFY
let corazonIcono = document.querySelector (".corazon-icon"); //MODIFY
let circuloBlanco = document.querySelector (".contenedor-img"); //MODIFY
let tamañoPlanta = document.querySelector (".planta"); //MODIFY
let fotoPequena = document.getElementsByClassName ("foto-pequena");
let volverAtrasIcono = document.querySelector (".icon-volveratras"); //MODIFY

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
    paragrafo.style.paddingRight="23%";

    camaraIcono.style.top="-16%";
    camaraIcono.style.right="25%";

    corazonIcono.style.top="-16%";
    corazonIcono.style.left="28%";

    circuloBlanco.style.backgroundColor="white";
    circuloBlanco.style.borderRadius= "100%";
    circuloBlanco.style.height="55vw";
    circuloBlanco.style.width="55vw";
    circuloBlanco.style.marginBottom="20px";

    tamañoPlanta.style.width="120%";
    tamañoPlanta.style.right="15%";

    volverAtrasIcono.style.display="block";
    circulo.style.top="-65.5%";

    for (i=0; i < fotoPequena.length; i++){
    fotoPequena[i].classList.remove("hidden-photo");
      
    }
   

});


volverAtrasIcono.addEventListener("click", function() {
   
    for (i=0; i < hideElements.length; i++){
        hideElements[i].style.display="";
    }
    

    plantaSubtitulo.style.color="";
    imgPlanta.style.width="";
    
    infoContenedor.style.flexDirection=""; 
    infoContenedor.style.justifyContent="";
    
    divTitulo.style.alignItems="";
    
    plantaSubtitulo.style.fontSize="";
    plantaSubtitulo.style.color="";
    
    plantaTitulo.style.fontSize="";
    plantaTitulo.style.fontWeight="";

    paragrafo.style.textAlign="";
    paragrafo.style.paddingRight="";

    camaraIcono.style.top="";
    camaraIcono.style.right="";

    corazonIcono.style.top="";
    corazonIcono.style.left="";

    circuloBlanco.style.backgroundColor="";
    circuloBlanco.style.borderRadius= "";
    circuloBlanco.style.height="";
    circuloBlanco.style.width="";
    circuloBlanco.style.marginBottom="";

    tamañoPlanta.style.width="";
    tamañoPlanta.style.right="";

    volverAtrasIcono.style.display="";
    circulo.style.top="35%";

    for (i=0; i < fotoPequena.length; i++){
        fotoPequena[i].classList.add("hidden-photo");
    }
})