const elemento_div = document.getElementById("elemento_div");
const boton = document.getElementById("btn");
boton.addEventListener('click',oculta_mostrar_div);
function oculta_mostrar_div(){ 
    if(elemento_div.style.getPropertyValue("display") === "none"){
        elemento_div.style.display = "block";
    }else{
        elemento_div.style.display = "none";
    };
};