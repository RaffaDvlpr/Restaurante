$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nNome: {
                required: true
            },
            nTelefone: {
                required: false
            },
            nEmail: {
                required: true,
                email: true
            },
            nMensagem: {
                required: true
            }
        },
        messages: {
            nNome: 'Por favor, insira seu nome',
            nEmail: 'Por favor, insira um email válido',
            nMensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos)
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    })
})