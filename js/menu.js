//CAROUSEL
const arrayImagenes = ["carouselbanner.jpg" , "carouselremeras.jpg", "caruselbuzos.jpg", "carouselsale.jpg"]
let imagenActual = 0;

let temporizador;
temporizador = setInterval(cambiarImagen, 3500)

document.getElementById('imagen').addEventListener('mouseover', pararTemporizador)
document.getElementById('imagen').addEventListener('mouseout', iniciarTemporizador)

function cambiarImagen() {
    let boton = this.id;
    if(boton!=undefined) {
        clearInterval(temporizador);
        temporizador=setInterval(cambiarImagen, 3500)
    }
    if(boton == 'anterior') {
        imagenActual --;
        if(imagenActual < 0) {
            imagenActual = arrayImagenes.length -1; 
        } 
    } else {
        imagenActual ++;
        if(imagenActual == arrayImagenes.length) {
            imagenActual = 0;
        } 
    }
    let imagenAMostrar = arrayImagenes [imagenActual];
    document.getElementById('imagen').src = 'images/' + imagenAMostrar;
}

function pararTemporizador() {
    clearInterval(temporizador);
}

function iniciarTemporizador () {
    temporizador=setInterval(cambiarImagen, 3500)

}

//NAV
$(document).ready(main);

var contador = 1;

function main(){
    $('.menu_bar').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        }   else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
};

//PRODUCTOS
const remeras = [
    {
        id: 1,
        name: "Social Distance",
        price: 800,
        stock: 15,
        img: "https://xcx-clothes.000webhostapp.com/imagenes/remera1.png",
    },
    {
        id: 2,
        name: "Cute Baphomet",
        price: 950,
        stock: 23,
        img: "https://xcx-clothes.000webhostapp.com/imagenes/remera2.png",
    },
    {
        id: 3,
        name: "Reading Is Fun",
        price: 1020,
        stock: 8,
        img: "https://xcx-clothes.000webhostapp.com/imagenes/remera3.png",
    },
    {
        id: 4,
        name: "Black MEOWGIC",
        price: 700,
        stock: 12,
        img: "https://xcx-clothes.000webhostapp.com/imagenes/remera4.png",
    },
    {
        id: 5,
        name: "Cats Are Great",
        price: 1127,
        stock: 16,
        img: "https://xcx-clothes.000webhostapp.com/imagenes/remera5.png",
    },
    {
        id: 6,
        name: "Ying Yang",
        price: 1000,
        stock: 4,
        img: "https://xcx-clothes.000webhostapp.com/imagenes/remera6.png",
    },
];

//SUSCRIBIRSE
$(document).ready(function(){
    $(`.suscribirse`).click(function(){
        swal.fire({
            icon: `success`,
            iconColor:`#9530b4`,
            title: `Ya estas suscripto!`,
            text: `Ahora recibiras todas nuestras ofertas, descuentos exclusivos, y un 15% de descuento en tu primera compra!!`,
            confirmButtonText: `Genial!`,
            width: `35%`,
            padding: `1rem`,
            background: `rgba(140, 135, 140)`,
            backdrop: `true`,
            allowOutsideClick: `false`,
            allowEnterKey:`true`,
            showConfirmButton: `true`,
            confirmButtonColor: `#eaee1f`,
            customClass: {
                title: 'titleClass',
                confirmButton: 'buttonClass'
            }
        })
    })
})






