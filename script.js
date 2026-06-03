function abrirSobre(){

const intro = document.getElementById("intro")
intro.classList.add("ocultar")

setTimeout(()=>{

intro.style.display="none"

document.getElementById("hoja1").classList.remove("hidden")
document.getElementById("hoja2").classList.remove("hidden")
document.getElementById("hoja3").classList.remove("hidden")

for(let i=4;i<=10;i++){
document.getElementById("hoja"+i).classList.add("hidden")
}

document.body.style.overflow="auto"

window.scrollTo(0,0)

},300)
}

/* SCROLL */
function bajar(){document.getElementById("hoja2").scrollIntoView({behavior:"smooth"})}
function bajarA3(){document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})}

/* HOJAS */
function irHoja4(){document.getElementById("hoja4").classList.remove("hidden");hojaScroll("hoja4")}
function volverHoja3(){hojaScroll("hoja3")}
function irHoja5(){document.getElementById("hoja5").classList.remove("hidden");hojaScroll("hoja5")}
function volverHoja4(){hojaScroll("hoja4")}
function irHoja6(){document.getElementById("hoja6").classList.remove("hidden");hojaScroll("hoja6")}
function volverHoja5(){hojaScroll("hoja5")}
function irHoja7(){document.getElementById("hoja7").classList.remove("hidden");hojaScroll("hoja7")}
function volverHoja6(){hojaScroll("hoja6")}
function irHoja8(){document.getElementById("hoja8").classList.remove("hidden");hojaScroll("hoja8")}
function volverHoja7(){hojaScroll("hoja7")}
function irHoja9(){document.getElementById("hoja9").classList.remove("hidden");hojaScroll("hoja9")}
function volverHoja8(){hojaScroll("hoja8")}
function irHoja10(){document.getElementById("hoja10").classList.remove("hidden");hojaScroll("hoja10")}
function volverHoja9(){hojaScroll("hoja9")}

function hojaScroll(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"})
}

/* CONTADOR */
const fechaBoda = new Date("2027-01-15T00:00:00")

function actualizarContador(){
const ahora = new Date()
const d = fechaBoda - ahora

document.getElementById("dias").innerText=Math.floor(d/(1000*60*60*24))
document.getElementById("horas").innerText=Math.floor((d/(1000*60*60))%24)
document.getElementById("minutos").innerText=Math.floor((d/(1000*60))%60)
document.getElementById("segundos").innerText=Math.floor((d/1000)%60)
}

setInterval(actualizarContador,1000)
actualizarContador()

/* MÚSICA */
function toggleMusica(){
const audio=document.getElementById("musica")
audio.paused ? audio.play() : audio.pause()
}
