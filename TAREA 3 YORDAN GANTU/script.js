
function capturarDatos() {
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const email = document.getElementById('email').value;

    console.log("--- DATOS DEL FORMULARIO CAPTURADOS ---");
    console.log("Nombre:", nombre);
    console.log("Número:", numero);
    console.log("Email:", email);
    console.log("---------------------------------------");

    document.getElementById('formulario-contacto').reset();
}

const botonEnviar = document.getElementById('boton-enviar');
botonEnviar.addEventListener('click', capturarDatos);


const chatButton = document.getElementById('chat-toggle-button');
const chatWidget = document.getElementById('chat-widget');

function toggleChat() {
    chatWidget.classList.toggle('open');
    
    if (chatWidget.classList.contains('open')) {
        chatButton.textContent = '✖';
    } else {
        chatButton.textContent = '💬';
    }
}

chatButton.addEventListener('click', toggleChat);

const chatInput = document.querySelector('.chat-input input');

function enviarMensaje(event) {
   
    if (event.key === 'Enter') { 
        const mensaje = chatInput.value;
        
        if (mensaje.trim() !== "") { 
            console.log("MENSAJE DE SOPORTE:", mensaje);
        
            chatInput.value = ''; 
        }
    }
}

chatInput.addEventListener('keyup', enviarMensaje);