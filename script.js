var cards = [];

cards.push({

    imagenCarousel: "/images/cliente1.jpg",
    client: "Lionel Messi",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dignissim quam. Aenean at ligula sed elit gravida auctor. Vivamus quis venenatis purus, vel blandit enim."

});

cards.push({

    imagenCarousel: "/images/cliente2.jpg",
    client: "LeBron James",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dignissim quam. Aenean at ligula sed elit gravida auctor. Vivamus quis venenatis purus, vel blandit enim."

});

cards.push({

    imagenCarousel: "/images/cliente3.jpg",
    client: "Serena Williams",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dignissim quam. Aenean at ligula sed elit gravida auctor. Vivamus quis venenatis purus, vel blandit enim."

});

i = 0;

function nextCard(){

    console.log(cards[0]);
    console.log(cards[1]);
    console.log(cards[2]);

    i ++;
    if(i > 3){
        i = 0;
    }

    img = document.getElementById("imagen-car");
    img.src = cards[i].imagenCarousel;
    img.parentNode.classList;
    client = document.querySelector(".clent");
    client.innerHTML = cards[i].client;
    review = document.querySelector(".review");
    review.innerHTML = cards[i].review;
    
}


function validation(){

    let nombre = document.querySelector("#nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(nombre.value.trim() == ""){
        alert("Por favor, ingrese un nombre");
        //document.querySelector.appendChild(<p>test</p>)
        messages.push("test")
        return false;
    }

    if(apellido.value.trim() == ""){
        alert("Por favor, ingrese un apellido");
        return false;
    }

    let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!er.test(email.value)){
        alert("Por favor, ingrese un email válido")
        return false;
    }


    console.log(nombre.value);
    return false;

}


//add autofocus on error