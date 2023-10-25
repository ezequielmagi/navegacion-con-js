//obtengo las paginas
const pageOne = document.getElementById('paginaUno')
const pageTwo = document.getElementById('paginaDos')
const emergenteUno = document.getElementById('emergenteUno')

//obtengo los botones
const goToPageOne = document.getElementById('irAPaginaUno')
const goToPageOneB = document.getElementById('irAPaginaUno')
const goToPageTwo = document.getElementById('irAPaginaDos')

//defino la funciones
function volverApaginaUno() { 
    pageTwo.classList.add('hidden')
    pageOne.classList.remove('hidden')
 }

function verEmergente (){
    emergenteUno.classList.remove('hidden')
}

function cerrarEmergente(){
    emergenteUno.classList.add('hidden')
}


//agrego los escuchadores de eventos
goToPageTwo.addEventListener( 'click', ()=>{
    pageOne.classList.add('hidden')
    pageTwo.classList.remove('hidden')
} )




console.log(goToPageOne)
console.log(goToPageTwo)