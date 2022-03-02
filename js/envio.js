$(document).ready(() => {
    $(".create-envio-form").hide()
    let botonCalcularEnvio = $('#calculo-envio');
    let botonSimularEnvio = $('.simular-envio');
    
    $('#calculo-envio').click(function() {
        $(".create-envio-form").slideToggle()   
    })

    $('.simular-envio').click(function(e) {
        e.preventDefault();

        let importe = parseInt($('#importe').val());
        let cantidad = parseInt($('#cantidad').val());
        let impuestos = 0.21 * importe

        let divSimuladorEnvio = $('.create-card');

        divSimuladorEnvio
        .fadeIn(25000, function() {
          $(".contenido-simulador")
            .addClass("create-card")
            .append("<h3>¡Costo total de tu envío!</h3>")
            .append(`El costo total de tu compra, incluido el envío es de $${costoTotal(importe,cantidad)}. Contacta a tu asesor de ventas para avanzar con tu compra.`)
            .css("color","#310b0a")
            .fadeToggle(10000, function() {
              location.reload();
            });
        })
    })

    function costoTotal(impo,canti) {
        let productosImpuesto = 0.21 * impo
        let costo = impo * canti + productosImpuesto
        return costo;
    }
});