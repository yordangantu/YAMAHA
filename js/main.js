document.addEventListener('DOMContentLoaded', function() {

    const registroForm = document.getElementById('registro-form');

    if (registroForm) {
        registroForm.addEventListener('submit', function(evento) {
            
            evento.preventDefault();

            const nombreInput = registroForm.querySelector('input[type="text"]');
            const emailInput = registroForm.querySelector('input[type="email"]');

            if (nombreInput.value.trim() === '') {
                alert('Por favor, ingresa tu nombre.');
                nombreInput.focus();
                return;
            }

            if (emailInput.value.trim() === '') {
                alert('Por favor, ingresa tu correo electrónico.');
                emailInput.focus();
                return;
            }

            alert('¡Gracias por suscribirte, ' + nombreInput.value + '!');
            
            registroForm.reset();
        });
    }

});