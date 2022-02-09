const name = function() {
    var name = prompt("Por favor ingresa tu nombre")
    alert(`Bienvenido ${name}, espero que estes teniendo un gran día!`);
}

const bienvenida = function(){

    let edad = parseInt(prompt("Ingresa tu edad (en números, por favor)"));
    
    while( typeof edad === 'number'){

    if (edad < 10) {
        alert("Esto no es una juguetería, te aburrirías..");
    }
    else if (edad > 90) {
        alert("Me estas cachando, estas muy viejit@");
    }
    else {
        alert("Perfecto, espero que nuestros productos sean de tu agrado! Adelante...");
    }
}


}

const satisfaccion = function(){

    var puntajeDelCliente = parseInt(prompt("¿ Como nos calificarías del 1 al 5?"))

    switch (puntajeDelCliente) {
        case 1: alert("Lamentamos mucho tu insatisfacción. Trabajaremos duro para mejorar.")    
        break;
        case 2: alert("Lamentamos tu mala experiencia. Estamos en aprendizaje continuo para sguir mejorando.")
            
        break;
        case 3: alert("Te agradecemos mucho tu devolución, tu valoración nos ayuda a crecer.")
            
        break;
        case 4: alert("Nos alegra que tu percepción sea buena, aceptamos toda sujerencia para ser mejores!")
            
        break;
        case 5: alert("Estamos muy felices de colmar tus expectativas! Gracias por puntuarnos!")
            
        break;
    
        default: alert("Por favor ingresa un número de 1 a 5.")
            break;
    }
}
name();
bienvenida();
satisfaccion();


// Info:
// Proyecto elegido: E-commerce 
// Nombre: Tienda NNS
// Función simple para determinar el precio final de un pedido de producto con envío, IVA e impustos
// (aún sin validaciones)

alert('Hasta que nuestro programador aprenda formularios, vamos a indagar para saber tu pedido e indicarte los precios y costos!');

alert('Te vamos a informar los precios de cada producto sin IVA, (el cual es el 21% sobre el precio del producto) mas el costo de envío, el cual a su vez es un 5%');

alert(`Igual vos tranquil@, por que solo nos vas a decir que cantidad querés de cada producto y nosotros te informamos cual sería el valor total de tu compra!`);


function compra(){
     
    let qDestapadores = parseInt(prompt("El precio sin Iva del destapador es de $1000. Por favor ingresa cantidad de Destapadores a comprar"));

    let qPad = parseInt(prompt("El precio sin Iva del PadGamer es de $1500. Por favor ingresa cantidad de Pad's a comprar"));

    let qLlaveros = parseInt(prompt('El precio sin Iva del Llavero es de $300. Por favor ingresa cantidad de Llaveros a compar'));

    let qHumidificadores = parseInt(prompt('El precio sin Iva del Humidificador es de $1800. Por favor ingresa cantidad de Humidificadores a compar'));

    let qSportbag = parseInt(prompt('El precio sin Iva del destapador es de $650. Por favor ingresa cantidad de Riñoneras a compar'));
    
    let total = ((qDestapadores*1000 + qPad*1500 + qLlaveros*300 + qHumidificadores*1000 + qSportbag*650)*1.21*1.05)
    
    alert(`El total de tu compra es de ${total}`)    
}

compra();

console.log(compra);

//Me propongo crear un Array de Objetos para la gestión de stock, compras, visualizaciones y carritos; que añada funcionalidad a la pagina y de cumplimiento a las distintas consignas de avance y entrega.

//alta de productos

class Product {

    constructor(id,nombre,color,precioSinIva,stockActual,alicuotaIva,costoEnvio){
        this.id=id;
        this.nombre=nombre;
        this.color=color;
        this.precioSinIva=precioSinIva;
        this.stockActual=stockActual;
        this.alicuotaIva=alicuotaIva;
        this.costoEnvio=costoEnvio;

    }
agregarAlCarrito(cantidad){

    this.stockActual-=cantidad;
    console.log(this.stockActual)
    alert("acabas de sumar : "+cantidad+" y aún puedes solicitar "+this.stockActual+" unidades mas si deseas.")
}

precioFinal(cantidad){
   let venta = this.precioSinIva*cantidad;
   let iva = venta*this.alicuotaIva;
   let costoEnvio = venta*this.costoEnvio;

   let precioFinal = venta+iva+costoEnvio;
    alert(`Vas a comprar ${cantidad} unidades. El IVA por esta conmpra es de $${iva}. El costo de envío para este pedido es de $${costoEnvio}. Precio final: $${precioFinal}`);
}

}

// Producto Hardcodeado.

const id=0001;
let nombre="destapador";
const color="plateado";
const precioSinIva=1000;
const stockActual=10;
const alicuotaIva=0.21;
const costoEnvio=0.05;

let cantidadSolicitada=parseInt(prompt("ingrese la cantidad que desea."))

const product1 = new Product(id,nombre,color,precioSinIva,stockActual,alicuotaIva,costoEnvio)

console.log(product1);

console.log("probando metodo agregar al carrito.")
console.log(product1.agregarAlCarrito(cantidadSolicitada))


console.log("probando metodo precio final.")
console.log(product1.precioFinal(cantidadSolicitada))


// Sección Array:
const arrayProductos=[];

const productCreate = new Product(0001,"Mate Argento","negro",500,10,0.21,0.05)
console.log(productCreate);

arrayProductos.push(productCreate);
console.log(arrayProductos);

// Harcodeo tres productos
const simulationProduct1 = new Product(0001,"Llavero","negro",500,10,0.21,0.05)
const simulationProduct2 = new Product(0001,"Pen Drive","rojo",600,10,0.21,0.05)
const simulationProduct3 = new Product(0001,"Lapicera","negro",700,10,0.21,0.05)

// Incorporo los productos al array (PUSH) y los mustro por consola
arrayProductos.push(simulationProduct1, simulationProduct2, simulationProduct3);
console.log(arrayProductos);

// Filtro los productos color negro (FILTER)
// Filtro Negro es un nuevo array
let filtroNegro = arrayProductos.filter(product => product.color == "negro");
console.log(`Estos son los productos de color negro ${filtroNegro}`);

for (let i = 0; i < filtroNegro.length; i++) {
    console.log(`${filtroNegro[i].nombre}`)
}

// Ordeno los productos por precio de menor a mayor (SORT)
let prices = arrayProductos.sort((a,b) => {
    return a - b;
});

console.log('DETALLE ORDENADO DE PRODUCTOS');
console.log('=============================');
for (let i = 0; i < prices.length; i++) {
    console.log(`Producto: ${prices[i].nombre} - Precio: $${prices[i].precioSinIva}`);
}