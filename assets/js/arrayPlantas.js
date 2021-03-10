let arrayPlanta = [{
    id: 1,
    img: "./assets/img/comida1.png",
    precio: 52.00,
    nombre: "Curry",
    descripcion: "Con arroz bastami",
    cantidad: 0,
    alt:  "curry"
},  
{
    id: 2,
    img: "./assets/img/comida2.png",
    precio: 23.00,
    nombre: "Ensalada de Pollo Vegana",
    descripcion: "Con salsa de queso",
    cantidad: 0,
    alt: "Ensalada de pollo"
},
{
    id: 3,
    img: "./assets/img/comida3.png",
    precio: 21.00,
    nombre: "Patatas Francesas",
    descripcion: "Con carne de tocino",
    cantidad: 0,
    alt: "Patatas"
},
{
    id: 4,
    img: "./assets/img/comida4.png",
    precio: 6.00,
    nombre: "Magdalena de Oreo",
    descripcion: "Con crema de cacao",
    cantidad: 0,
    alt: "Magdalena de oreo"
},
{
    id: 5,
    img: "./assets/img/comida5.png",
    precio: 1.50,
    nombre: "Flan de Vainilla",
    descripcion: "Con cubierta de caramelo",
    cantidad: 0,
    alt: "Flan de vainilla"
}
];

let contendorPlanta = "";

function imprimirPlanta () {
let menuDiv = "";
for (let i = 0; i < arrayMenu.length; i++) {
    menuDiv+= `<section class="menu ${arrayMenu[i].categoriaComida}">
                    <img src="${arrayMenu[i].imgComida}" alt="${arrayMenu[i].alt}">
                    <div class="descripcion-menu">
                        <h2>$ ${arrayMenu[i].precioComida.toFixed(2)}</h2>
                        <h3>${arrayMenu[i].nombreComida}</h3>
                        <p>${arrayMenu[i].descripcionComida}</p>
                        <div class="contador">
                            <button class="counter-resta" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','-')">-</button>
                            <p id="contador-${arrayMenu[i].id}" class="counter-display">0</p>
                            <button class="counter-suma" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','+')">+</button>
                        </div>
                    </div>
                </section>`; 
}

document.querySelector(".contenedor-planta").innerHTML = menuDiv;
}

imprimirPlanta ();