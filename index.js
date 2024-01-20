$(document).ready(function () {
    var expression = '';

    $('.clear').click(function () {
        $('.input').text('');
        expression = '';
        result = '';
        $('h2').text("Resultado = " + result);
    });

    $('.equal').click(function () {
        expression = $('.input').text();
        try {
            var result = eval(expression);
            $('.input').text(" = " + result);
        } catch (error) {
            alert('Expressão inválida');
        }
    });

    $('.multiply, .divide, .minus, .plus').click(function () {
        expression += $(this).text();
        $('.input').text(expression);
    });

    $('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .decimal').click(function () {
        expression += $(this).text();
        $('.input').text(expression);
    });

    $('.zero').click(function(){
        if (expression === '0') {
            return;
        } else {
            expression += $(this).text();
            $('.input').text(expression);
        }
    })
});