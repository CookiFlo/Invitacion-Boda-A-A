function mostrarHoja(n){
document.querySelectorAll("section").forEach(s=>{
s.classList.add("hidden")
})

const el=document.getElementById("hoja"+n)
if(el) el.classList.remove("hidden")

window.scrollTo(0,0)
}

function abrirSobre(){
document.getElementById("intro").style.display="none"
mostrarHoja(1)
}

/* CONTADOR */
const fechaBoda=new Date("2027-01-15T00:00:00")

function actualizarContador(){
const ahora=new Date()
const d=fechaBoda-ahora

document.getElementById("dias").innerText=Math.floor(d/86400000)
document.getElementById("horas").innerText=Math.floor(d/3600000%24)
document.getElementById("minutos").innerText=Math.floor(d/60000%60)
document.getElementById("segundos").innerText=Math.floor(d/1000%60)
}

setInterval(actualizarContador,1000)
actualizarContador()

/* MÚSICA */
function toggleMusica(){
const a=document.getElementById("musica")
a.paused ? a.play().catch(()=>{}) : a.pause()
}
