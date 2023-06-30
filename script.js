const btnStart=document.getElementById("start"),
      pantalla1=document.querySelector(".pantallaDesactive"),
      pantalla2=document.querySelector(".pantallaLogo"),
      pantalla3=document.querySelector(".pantallaLogo2"),
      btnAccion=document.querySelector(".btnMenos");
      btnAc=document.querySelector(".accion");


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

function encender(){
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
                    temporizador=setTimeout(e=>{
                        pantalla3.classList.toggle("ocultar");
                    },3000);
                },3000);
            },3000);
        },3000);
}
function apagar(){
    btnAc.classList.remove("active");
    btnAccion.style.cssText="justify-content:flex-start";
    btnAc.style.cssText="background-color:var(--desactivo)";
    clearTimeout(temporizador);
    pantalla1.classList.remove("ocultar");
    pantalla1.classList.add("desocultar");
}