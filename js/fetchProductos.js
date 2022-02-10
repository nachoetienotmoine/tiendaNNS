$(document).ready(() => {
    const jsonProductos = "./productos.json"
    let botonVerProductos = $('.product-view')    
    
    botonVerProductos.click(() => {     
        $.getJSON(jsonProductos, function(informacion, estado) {
            if (estado === "success") {
                let informacionExitosa = informacion;

                for (const producto of informacionExitosa) {
                    $('.mostrar-card')
                    .addClass("product-view-card")
                    .append(                       
                        `
                        <div>
                            <h3>${producto.nombreProducto}</h3>
                            <p>Este es el precio: ${producto.precio}</p>     
                        </div>              
                        `
                    )
                }
            }
        })
    })
});