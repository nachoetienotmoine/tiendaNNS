$(document).ready(function() {
    // Usuario
    let user = prompt('Por favor ingresá tu nombre');
    localStorage.setItem("user", JSON.stringify(user));

    if (user == null) {
        alert('Por favor, luego de la recarga ingresá tu nombre correctamente');
        localStorage.clear();
        location.reload();
    }

    // Producto
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
    }

    let arrayProducts = [];

    // Set productos y Local Storage
    arrayProducts.push( new Product(1,"Key Finder","rojo",600,10,0.21,0.05))
    arrayProducts.push( new Product(2,"Pad Gamer","negro",1500,10,0.21,0.05))
    arrayProducts.push( new Product(3,"Sport Bag","negro",350,10,0.21,0.05))
    arrayProducts.push( new Product(4,"Destapadores","negro",2700,10,0.21,0.05))
    arrayProducts.push( new Product(5,"Humidificadores","negro",900,10,0.21,0.05))
    
    localStorage.setItem('products', JSON.stringify(arrayProducts));

    let workingUser = JSON.parse(localStorage.getItem("user"));

    $(".product-selection").click(function() {       
        let jsProducts = JSON.parse(localStorage.getItem('products'));

        if (jsProducts != null) {
            let seleccion = 'Elegir un producto de la lista \n'

            for (let i = 0; i < jsProducts.length; i++) {
                seleccion += `${jsProducts[i].nombre} -> ${jsProducts[i].id} \n`                
            }

            alert(seleccion)
            let optionSelected = parseInt(prompt(`Bienvenido ${workingUser}. ¿Qué producto elegiste?:`));

            if ((optionSelected >= 0) && (optionSelected < 5)) {
                let tarjeta = document.querySelector('.create-card');

                let h3 = document.createElement('h3');
                let p = document.createElement('p');

                let h3Contenido = document.createTextNode(`${jsProducts[optionSelected].nombre}`);
                let pContenido = document.createTextNode(`"Muy bien por el producto que elegiste"`);

                h3.appendChild(h3Contenido);
                p.appendChild(pContenido);
                tarjeta.appendChild(h3);
                tarjeta.appendChild(p);

                tarjeta.classList.add('create-card-styles');

            } else {
                alert('Ingresa una opción del listado');
            }
        }
    });
});