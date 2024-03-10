const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.comida1');
const btnEnsaladas = document.querySelector('.comida2');
const btnPastas = document.querySelector('.comida3');
const btnPizza = document.querySelector('.comida4');
const contenedorPlatillos = document.querySelector('.platillos')
const boton = document.getElementById('boton');
const cerrar = document.getElementById('cerrar');
const emergente= document.getElementById('emergente');
const overlay=document.getElementById('overlay')
const circulares=document.querySelector('.circular');



document.addEventListener('DOMContentLoaded', () => {
    eventos();
    platillos();
});



const eventos = () => {
    menu.addEventListener('click', abrirMenu);
}


const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => {
    const bntCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    bntCerrar.textContent = 'X';
    bntCerrar.classList.add('btn-cerrar');


    //   while (navegacion.children[5]) {
    //        navegacion.removeChild(navegacion.children[5]);
    //    } es para la X de cerrar el menu


    navegacion.appendChild(bntCerrar);
    cerrarMenu(bntCerrar, overlay);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            observer.unobserve(imagen);
        }
    })
});

//cambiar variables statics por reemplazables en imagenes.
imagenes.forEach(imagen => {
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    /*primer metodo de realizar un metodo para el overlay*/
    overlay.onclick = function () {
        navegacion.classList.add('ocultar')
        overlay.remove();
        boton.remove();
    }
}

// Agregar event listener al botón de cerrar
cerrar.addEventListener('click', function() {
    emergente.style.display = 'none'; // Ocultar el fondo opaco
    cerrar.style.display = "none"
    overlay.style.display = "none";
});


boton.addEventListener("click", function() {
    emergente.style.display = "block";
    cerrar.style.display = "block"
    overlay.style.display = "block";
});

function cambiarImagen(rutaImagen) {
    document.getElementById('imagen').src = rutaImagen;
}

/*PLATILLOS
 */

const platillos = () => {
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);

    const ensaladas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'ensalada');
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');

    mostrarPlatillos(ensaladas, pastas, pizzas, platillosArreglo);
}

const mostrarPlatillos = (ensaladas, pastas, pizzas, todos) => {
    btnEnsaladas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada => contenedorPlatillos.appendChild(ensalada));
    });
    btnPastas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta => contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));
    });
    btnTodos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo => contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

/*const iniciarApp = () => {
    console.log('iniciando.....');
    sumar2();
}
*/
/*sumar();
//funcion declaracion
function sumar() {
    console.log('function declaration', 2 + 2);
}//arriba
*/

//arrow function o function expresion
/*
const sumar2 = () => {
    console.log('funcion de flecha', 3 + 3);
}
*/
//abajo

//hoisting=> contexto de evaluacion de javascript, la manera que se escanea el docmuento y como se crea