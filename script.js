var cards = [];

cards.push({

    imagenCarousel: "./images/cliente1.jpg",
    client: "Lionel Messi",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dignissim quam. Aenean at ligula sed elit gravida auctor. Vivamus quis venenatis purus, vel blandit enim."

});

cards.push({

    imagenCarousel: "./images/cliente2.jpg",
    client: "LeBron James",
    review: "Lorem ipsum dolor sit amet, vel blandit enim. Sed id dignissim quam. Aenean at ligula sed elit gravida auctor. Vivamus quis venenatis purus, consectetur adipiscing elit."

});

cards.push({

    imagenCarousel: "./images/cliente3.jpg",
    client: "Serena Williams",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ligula sed elit gravida auctor. Vivamus quis venenatis purus, vel blandit enim. Sed id dignissim quam."

});

i = 0;

function nextCard(){

    i ++;
    if(i >= 3){
        i = 0;
    }

    img = document.getElementById("imagen-car");
    img.src = cards[i].imagenCarousel;
    img.parentNode.classList;
    client = document.querySelector(".client h4");
    client.innerHTML = cards[i].client;
    review = document.querySelector(".review p");
    review.innerHTML = cards[i].review;
    
}

function previousCard(){

    i--;

    if(i < 0){
        i = 2;
    }

    img = document.getElementById("imagen-car");
    img.src = cards[i].imagenCarousel;
    img.parentNode.classList;
    client = document.querySelector(".client h4");
    client.innerHTML = cards[i].client;
    review = document.querySelector(".review p");
    review.innerHTML = cards[i].review;

}

function changeCarousel(){

    setInterval(nextCard, 7000);

}

changeCarousel();


function validation(){

    const nombre = document.querySelector("#nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if(nombre.value.trim() == ""){
        mostrarError(nombre, 'Ingrese un nombre');
        return false;
    }

    if(apellido.value.trim() == ""){
        mostrarError(apellido, 'Ingrese un apellido');
        return false;
    }

    let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!er.test(email.value)){
        mostrarError(email, 'Ingrese un email válido');
        return false;
    }

    if(message.value.trim() == ""){
        mostrarError(message, 'Ingrese un mensaje');
        return false;
    }

    reset(nombre, apellido, email, message);
    return false;

}

function mostrarError(input, mensaje){

    let formValiStyle = input.parentElement;
    let mensajeError = formValiStyle.querySelector('small');

    mensajeError.innerText = mensaje;

    formValiStyle.className = 'formulario error';

    return false;

}

function reset(nombre, apellido, email, mensaje){

    let nameStyle = nombre.parentElement;
    nameStyle.className = "formulario";
    
    let apellidoStyle = apellido.parentElement;
    apellidoStyle.className = "formulario";

    let emailStyle = email.parentElement;
    emailStyle.className = "formulario";

    let mensajeStyle = mensaje.parentElement;
    mensajeStyle.className = "formulario";
    
    form.reset();
    
    return false;

}

