$(document).ready(function(){
    $('#carousel-img').slick({
        autoplay: true,
    })

    $('.menu-ham').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone:'Por favor, insira seu telefone',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposInvalidos = validador.numberOfInvalids();
            if(camposInvalidos) alert(`existe um total de ${camposInvalidos} campos não preenchidos`);
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})