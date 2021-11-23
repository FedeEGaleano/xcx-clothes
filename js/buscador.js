const productos = [
    {
        id: 1,
        name: "Remera: Social Distance",
        price: 1200,
    },
    {
        id: 2,
        name: "Remera: Cute Baphomet",
        price: 1200,
    },
    {
        id: 3,
        name: "Remera: Reading Is Fun",
        price: 1200,
    },
    {
        id: 4,
        name: "Remera: Black MEOWGIC",
        price: 1200,
    },
    {
        id: 5,
        name: "Remera: Cats Are Great",
        price: 1500,
    },
    {
        id: 6,
        name: "Remera: Ying Yang",
        price: 1500,
    },
    {
        id: 7,
        name: "Remera: Osito Carñosito" ,
        price: 1500,
    },
    {
        id: 8,
        name: "Remera: Riding a cat",
        price: 1500,
    },
    {
        id: 9,
        name: "Remera: Purge the poison",
        price: 850,
    },
    {
        id: 10,
        name: "Remera: Gaga Monster",
        price: 900,
    },
    {
        id: 11,
        name: "Buzo: Cute Hail Satan",
        price: 2500,
    },
    {
        id: 12,
        name: "Buzo: Gatito Pentagrama",
        price: 2500,
    },
    {
        id: 13,
        name: "Buzo: Rayuela",
        price: 2500,
    },
    {
        id: 14,
        name: "Buzo: My Three Moods",
        price: 2500,
    },
    {
        id: 15,
        name: "Buzo: Cats Are Great",
        price: 3000,
    },
    {
        id: 16,
        name: "Buzo: Purple Satan",
        price: 3000,
    },
    {
        id: 17,
        name: "Buzo: Teletubbies",
        price: 3000,
    },
    {
        id: 18,
        name: "Buzo: Welcome To Chromatica",
        price: 3000,
    },
    {
        id: 19,
        name: "Buzo: San La Muerte",
        price: 1500,
    },
    {
        id: 20,
        name: "Buzo: Riding a cat",
        price: 1000,
    },
    {
        id: 21,
        name: "Piluso: Thunder",
        price: 800,
    },
    {
        id: 22,
        name: "Piluso: Rainbow",
        price: 800,
    },
    {
        id: 23,
        name: "SHORT DE BAÑO BB-ANAS",
        price: 1200,
    },
    {
        id: 24,
        name: "SHORT DE BAÑO SUSHI",
        price: 1300,
    },
];

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
    //console.log(formulario.value);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();

    for (let producto of productos){
        let name = producto.name.toLowerCase();
        if(name.indexOf(texto) !== -1){
            resultado.innerHTML +=`
            <li>${producto.name}-$${producto.price}</li>
            `
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML +=
        `<li>Producto no encontrado</li>`
    }
}

boton.addEventListener('click', filtrar);

formulario.addEventListener('keyup', filtrar)

