let arrayPlanta = [{
        id: 1,
        img: "./assets/img/plant1.png",
        valoracion: 5.0,
        subtitulo: "Plantas aromáticas",
        titulo: "Montsera Philodendron",
        precio: 35,
        cantidad: 0,
        parrafo:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        img1: "./assets/img/img-plant/desc1.png",
        img2: "./assets/img/img-plant/desc2.png",
        img3: "./assets/img/img-plant/desc3.png",
        img4: "./assets/img/img-plant/desc4.png"
    },  
    {
        id: 2,
        img: "./assets/img/plant2.png",
        valoracion: 3.0,
        subtitulo: "Plantas carnivoras",
        titulo: "Dionaea Muscipula",
        precio: 40,
        cantidad: 0,
        parrafo:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        img1: "./assets/img/img-plant/desc1.png",
        img2: "./assets/img/img-plant/desc2.png",
        img3: "./assets/img/img-plant/desc3.png",
        img4: "./assets/img/img-plant/desc4.png"
    },
    {
        id: 3,
        img: "./assets/img/plant3.png",
        valoracion: 4.2,
        subtitulo: "Plantas suculentas",
        titulo: "Crassula Ovata",
        precio: 20,
        cantidad: 0,
        parrafo:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        img1: "./assets/img/img-plant/desc1.png",
        img2: "./assets/img/img-plant/desc2.png",
        img3: "./assets/img/img-plant/desc3.png",
        img4: "./assets/img/img-plant/desc4.png"
    },
    {
        id: 4,
        img: "./assets/img/plant4.png",
        valoracion: 4.0,
        subtitulo: "Plantas ornamentales",
        titulo: "Lavandula Stoechas",
        precio: 28,
        cantidad: 0,
        parrafo:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        img1: "./assets/img/img-plant/desc1.png",
        img2: "./assets/img/img-plant/desc2.png",
        img3: "./assets/img/img-plant/desc3.png",
        img4: "./assets/img/img-plant/desc4.png"
    },
    {
        id: 5,
        img: "./assets/img/plant5.png",
        valoracion: 4.8,
        subtitulo: "Plantas aromáticas",
        titulo: "Ocimum Basilicum",
        precio: 20,
        cantidad: 0,
        parrafo:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        img1: "./assets/img/img-plant/desc1.png",
        img2: "./assets/img/img-plant/desc2.png",
        img3: "./assets/img/img-plant/desc3.png",
        img4: "./assets/img/img-plant/desc4.png"
    }
];

let contenedorPlanta = "";

function imprimirPlanta () {
    let contenedorPlanta = "";
    for (let i = 0; i < arrayPlanta.length; i++) {
        if (arrayPlanta[i].id === 1) {
            contenedorPlanta+= ` <div class="item">

                                <div class="contenedor-img">
                                    <div class="contenedor-img-planta" id="contenedor-planta${arrayPlanta[i].id}" >
                                        <img class="planta" src="${arrayPlanta[i].img}">
                                        <div class="resplandor hide"></div>
                                        <div class="elipse hide"></div>
                                    </div>
                                </div>

                                <div class="contenedor-planta">
                                    <button class="valoracion-planta">${arrayPlanta[i].valoracion.toFixed(1)}<div class="star"><i class="fas fa-star"></i></div></button>
                                    <div class="info-planta">
                                        <div class="info-planta-contenedor">
                                            <div class="info-planta-titulo">
                                                <h3 class="subtitulo-planta">${arrayPlanta[i].subtitulo}</h3>
                                                <h2 class="titulo-planta">${arrayPlanta[i].titulo}</h2>
                                            </div>
                                            <div class="precio-planta-titulo">
                                                <h2 class="precio-planta"><span>€</span>${arrayPlanta[i].precio}</h2>
                                                <hr>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="paragrafo-planta">${arrayPlanta[i].parrafo}</p>
                                            <img class="foto-pequena hidden-photo" src="${arrayPlanta[i].img1}" alt="">
                                            <img class="foto-pequena hidden-photo" src="${arrayPlanta[i].img2}" alt="">
                                            <img class="foto-pequena hidden-photo" src="${arrayPlanta[i].img3}" alt="">
                                            <img class="foto-pequena hidden-photo" src="${arrayPlanta[i].img4}" alt="">
                                        </div>      
                                    </div>
                                    <button class="icon camara-icon"><i class="fas fa-camera"></i>AR</button>
                                    <button class="icon corazon-icon"><i class="fas fa-heart"></i></button>
                                </div>

                            </div>`;
        } else {
            contenedorPlanta+= ` <div class="item">
                                    <div class="contenedor-img">
                                        <div class="contenedor-img-planta" id="contenedor-planta${arrayPlanta[i].id}" >
                                            <img class="planta" src="${arrayPlanta[i].img}">
                                            <div class="resplandor hide"></div>
                                            <div class="elipse hide"></div>
                                        </div>
                                    </div>
                                </div>`;
        }
         
}

document.querySelector(".product-list").innerHTML = contenedorPlanta;
}

imprimirPlanta ();