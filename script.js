const btnStart=document.getElementById("start"),
      pantalla1=document.querySelector(".pantallaDesactive"),
      pantalla2=document.querySelector(".pantallaLogo"),
      pantalla3=document.querySelector(".pantallaLogo2"),
      pantalla4=document.querySelector(".pantallaLogo3"),
      btnAccion=document.querySelector(".btnMenos"),
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
    await esperar(1000);
    pantalla1.classList.toggle("ocultar");

    await esperar(1500);
    pantalla2.classList.toggle("mostrar");
    
    await esperar(1000);
    pantalla2.classList.toggle("ocultar");

    await esperar(1500);
    pantalla2.classList.toggle("mostrar");
    pantalla3.classList.toggle("mostrar");

    await esperar(1000);
    pantalla3.classList.toggle("ocultar");

    await esperar(1500);
    pantalla3.classList.toggle("mostrar");
    pantalla4.classList.toggle("mostrar");

    await esperar(500);
    switchDrch.classList.add("traslateIzq");

    await esperar(250);
    tituloSwitch.classList.remove("none");

    await esperar(1000);
    pantalla4.classList.toggle("ocultar");

    await esperar(1500);
    switchDrch.classList.remove("traslateIzq");
    tituloSwitch.classList.add("none");
    pantalla4.classList.toggle("mostrar");
}

function esperar(tiempo){
    return new Promise(resolve => temporizador=setTimeout(resolve,tiempo));
}
async function apagar(){
    clearTimeout(temporizador);
    btnAc.classList.remove("active");
    btnAccion.style.cssText="justify-content:flex-start";
    btnAc.style.cssText="background-color:var(--desactivo)";

    let arr=[pantalla1,pantalla2,pantalla3,pantalla4];
    arr.forEach(e=>{
        e.classList.remove("ocultar");
        e.classList.remove("mostrar");
    });
    switchDrch.classList.remove("traslateIzq");
    tituloSwitch.classList.add("none");
    pantalla1.classList.add("desocultar");
    await esperar(1200);
    pantalla1.classList.remove("desocultar");
}