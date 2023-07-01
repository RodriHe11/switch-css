const btnStart=document.getElementById("start"),
      pantalla1=document.querySelector(".pantallaDesactive"),
      pantalla2=document.querySelector(".pantallaLogo"),
      pantalla3=document.querySelector(".pantallaLogo2"),
      btnAccion=document.querySelector(".btnMenos");
      btnAc=document.querySelector(".accion"),
      switchDrch=document.querySelector(".switchDrch"),
      tituloSwitch=document.querySelector(".tituloSwitch");


document.addEventListener("click",e=>{
    if(e.target===btnAc){
        let temporizador;
        if(btnAc.matches(".active")){
            apagar()
        }else{
            if(pantalla1.matches(".desocultar")){
                pantalla1.classList.remove("desocultar")
            }
            encender();
        }
    }
});

/* async function encender(){
    btnAc.classList.add("active");
    btnAccion.style.cssText="justify-content:flex-end";
    btnAc.style.cssText="background-color:var(--activo)";
    pantalla1.classList.toggle("ocultar");
        temporizador=setTimeout(e=>{
            pantalla2.classList.toggle("mostrar");
            temporizador=setTimeout(e=>{
                pantalla2.classList.toggle("ocultar");
                temporizador=setTimeout(e=>{
                    pantalla3.classList.toggle("mostrar");
                    setTimeout(e=>{
                        switchDrch.classList.add("traslateIzq");
                        setTimeout(e=>{
                            tituloSwitch.classList.remove("none");
                        },500);
                    },500);
                    temporizador=setTimeout(e=>{
                        pantalla3.classList.toggle("ocultar");
                    },3500);
                },3500);
            },3500);
        },3500);
} */
async function encender(){
    btnAc.classList.add("active");
    btnAccion.style.cssText="justify-content:flex-end";
    btnAc.style.cssText="background-color:var(--activo)";
    pantalla1.classList.toggle("ocultar");

    await esperar(3500);
    pantalla2.classList.toggle("mostrar");
    console.log("tiempo finalizado");

    await esperar(3500);
    pantalla2.classList.toggle("ocultar");
    console.log("tiempo finalizado");

    await esperar(500);
    pantalla3.classList.toggle("mostrar");
    console.log("tiempo finalizado");

    await esperar(500);
    switchDrch.classList.add("traslateIzq");
    console.log("tiempo finalizado");

    await esperar(500);
    tituloSwitch.classList.remove("none");
    console.log("tiempo finalizado");

    await esperar(3000);
    pantalla3.classList.toggle("ocultar");
    console.log("tiempo finalizado");
}

function esperar(tiempo){
    return new Promise(resolve => temporizador=setTimeout(resolve,tiempo));
}
function apagar(){
    btnAc.classList.remove("active");
    btnAccion.style.cssText="justify-content:flex-start";
    btnAc.style.cssText="background-color:var(--desactivo)";
    clearTimeout(temporizador);
    pantalla1.classList.remove("ocultar");
    pantalla1.classList.add("desocultar");
}