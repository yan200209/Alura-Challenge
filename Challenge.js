/*---------------Elementos-----------------  */
const btnEncriptar=document.querySelector(".boton_encriptar");
const btnDesencriptar=document.querySelector(".boton_desencriptar");
const btnCopiar=document.querySelector(".btn_copiar");

const Advert=document.querySelector(".Advertencia");
const sig=document.querySelector(".Signo");
const txt=document.querySelector(".Textarea");

const ContSalida=document.querySelector(".desencritar");
const Salida=document.querySelector(".Mostar_Mensaje");

const signo=sig.outerHTML;
/*-----------------Encriptar Mensaje ingresado----------------
Reglas para Encriptar o Desencriptar:
    e<----->enter
    i<----->imes
    a<----->ai
    o<----->ober
    u<----->ufat
*/
function encriptar(){
    let texto=txt.value;
    /* Reemplazo de acentos,signos,etc. por espacios... Para verificación*/
    let Entrada=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if(texto==""){
        Advert.style.background = "#ff7673";
        Advert.style.color = "#495057";
        Advert.style.fontWeight = "400";
        Advert.innerHTML =signo+"El campo de texto no debe estar vacio";
        setTimeout(()=>{
            Advert.removeAttribute("style");
        },1000);
    }
    else if(texto !==Entrada){
        Advert.style.background = "#ff7673";
        Advert.style.color = "#495057";
        Advert.style.fontWeight = "400";
        setTimeout(()=>{
            Advert.removeAttribute("style");
        },1000);
    }
    else if(texto !== texto.toLowerCase()){
        /*Verifica que al usar toLowerCase no use letras Mayusculas*/
        Advert.style.background = "#ff7673";
        Advert.style.color = "#495057";
        Advert.style.fontWeight = "400";
        setTimeout(()=>{
            Advert.removeAttribute("style");
        },1000);
    }
    else{
        /*Encriptacion del mensaje*/
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        Salida.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        ContSalida.remove(); 
    }
}

function desencriptar(){
    let texto=txt.value;
    /* Reemplazo de acentos,signos,etc. por espacios... Para verificación*/
    let Entrada=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if(texto==""){
        Advert.style.background = "#FEFDCA";
        Advert.style.color = "#495057";
        Advert.style.fontWeight = "400";
        Advert.innerHTML =signo+"El campo de texto no debe estar vacio";
        setTimeout(()=>{
            Advert.removeAttribute("style");
        },1000);
    }
    else if(texto !==Entrada){
        Advert.style.background = "#FEFDCA";
        Advert.style.color = "#495057";
        Advert.style.fontWeight = "400";
        setTimeout(()=>{
            Advert.removeAttribute("style");
        },1000);
    }
    else if(texto !== texto.toLowerCase()){
        /*Verifica que al usar toLowerCase no use letras Mayusculas*/
        Advert.style.background = "#FEFDCA";
        Advert.style.color = "#495057";
        Advert.style.fontWeight = "400";
        setTimeout(()=>{
            Advert.removeAttribute("style");
        },1000);
    }
    else{
        /*Desencriptacion del mensaje*/
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        Salida.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        ContSalida.remove(); 
    }
}

function copiar(){
    /*Toma el valor de salida y selecciona el mismo*/
    let copiar = Salida;
    copiar.select();
    /*Se copia al Portapapeles*/
    navigator.clipboard.writeText(Salida.value); 
}