let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarJuego() {
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
sectionSeleccionarAtaque.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascotas")
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    let sectionReiniciar = document.getElementById("boton-reiniciar")
    sectionReiniciar.style.display = "none"
    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById ("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}



function seleccionarMascotaJugador() {
    let sectionSeleccionarmascota = document.getElementById("seleccionar-mascota")
sectionSeleccionarmascota.style.display = "none"

 let botonMascotaJugador = document.getElementById("boton-mascotas")
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)


    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputFire = document.getElementById(" fire")
    let inputWater = document.getElementById("water")
    let inputEarth = document.getElementById ("earth")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

        if(inputFire.checked){
            spanMascotaJugador.innerHTML = "Fire"
        }else if (inputWater.checked){
            spanMascotaJugador.innerHTML = "Water"
        }else if (inputEarth.checked){
            spanMascotaJugador.innerHTML = "Earth"
        }else {
          alert ("debes seleccionar una mascota")
        }


        seleccionarMascotaEnemigo ()
    }


function seleccionarMascotaEnemigo () {

    let mascotaAleatorio = aleatorio (1,3)

    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")


    if (mascotaAleatorio== 1){
        spanMascotaEnemigo.innerHTML = " fire"
    }else if (mascotaAleatorio== 2){
        spanMascotaEnemigo.innerHTML = " water"
    }else{
        spanMascotaEnemigo.innerHTML = " water"
    }
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
       ataqueEnemigo = "Fuego" 
    } else if ( ataqueAleatorio ==2){
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "tierra"
    }
    combate()
} 
function combate() {
    let spanVidasJugador =  document.getElementById ("vidas-jugador")
    let spanVidasEnemigo = document.getElementById ("vidas-enemigo")



    if(ataqueEnemigo== ataqueJugador){ 
        crearMensaje ("empate")
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo== "Tierra") {
        crearMensaje ("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Agua" && ataqueEnemigo== "Fuego"){
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo--
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo== "Agua"){
        crearMensaje ("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        crearMensaje("perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

       
    }

    revisarVidas()
}
function revisarVidas (){
    if (vidasJugador == 0){
crearMensajeFinal ("LO SIENTO, HAS PERDIDO")
    }else if (vidasEnemigo== 0){
        crearMensajeFinal("FELICIDADES, GANASTE")
    }
    
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement ("p")
parrafo.innerHTML ="tu mascota atacó con " + ataqueJugador + ", la mascota de tu enemigo atacó con " + ataqueEnemigo + "= " + resultado 

sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")
let parrafo = document.createElement ("p")
parrafo.innerHTML = resultadoFinal
sectionMensajes.appendChild(parrafo)

let botonFuego = document.getElementById ("boton-fuego")
botonFuego.disabled = true
let botonAgua = document.getElementById ("boton-agua")
botonAgua.disabled = true
let botonTierra = document.getElementById ("boton-tierra")
botonTierra.disabled = true

let sectionReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "block"

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){return Math.floor(Math.random()*(max-min+1)+min)}

window.addEventListener('load', iniciarJuego)