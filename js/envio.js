$(document).ready(() => {

    // Caputuro elementos y valores
    $(".create-envio-form").hide()
    // let botonCalcularEnvio = $('#calculo-envio');
    // let botonSimularEnvio = $('.simular-envio');
    
    // let importe = parseInt($('#importe').val());
    let importe = document.getElementById("importe").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let impuestos = parseInt(document.getElementById("impuestos").value);



    $('#calculo-envio').click(function() {
        $(".create-envio-form").slideToggle()   
    })


    $('.simular-envio').click(function(e) {
        e.preventDefault();
        
        console.log(importe);
        console.log(typeof importe);
        console.log(cantidad);
        console.log(typeof cantidad);
        console.log(impuestos);
        console.log(typeof impuestos);
    })

    
    // REALIZAR FUNCION QUE RECIBIENDO IMPORTE, CANTIDAD e IMPUESTOS CALCULE EL COSTO TOTAL DE ENVIO

    function costoTotoalEnvio(p,c,env) {

    }

    
    
    







});