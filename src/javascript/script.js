document.querySelectorAll('.btnCardapio').forEach(botao => {
    botao.addEventListener('click', function () {

        window.open(
            'https://wa.me/558581421509?text=Olá!%20Vi%20o%20site%20do%20Cortile%20Ristorante%20e%20gostaria%20de%20mais%20informações.',
            '_blank'
        );

    });
});