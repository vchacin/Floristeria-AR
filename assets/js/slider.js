let htmlCollection = document.getElementsByClassName('item');

let itemsId = Array.from(htmlCollection);
//Añadir los elementos con la clase "item" en un array.


let sectionDeg = 360/itemsId.length;
//Dividir en fracciones iguales los elementos en un círculo invisible.

let radianSectionDeg = sectionDeg*Math.PI*2/360;
//Pasar el sistema de medida de grados a radianes.

let radiusLength = 350;
//Distancia entre los items.

for(let i=0; i<itemsId.length; i++){
  itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px';
  itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';
}
//Dar las posiciones TOP y LEFT de los elementos.

function makeATurn(){
for(let i=0; i<itemsId.length; i++){
  itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px';
  itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';
  }
}
//Función para establecer las nuevas posiciones.

function turnRight(){
  let holder = itemsId.pop();
  itemsId.unshift(holder);
  makeATurn();
}

function turnLeft(){
  let holder = itemsId.shift();
  itemsId.push(holder);
  makeATurn();
}
//Botones Back y Next.