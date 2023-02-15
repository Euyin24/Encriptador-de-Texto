
function encriptar(){

   var texto = document.getElementById ("ingresar-texto").value.toLowerCase(); //sirve para almacenar la informacion ingresada al input ingresar-texto en la variable texto
   
   var textoEncriptado = texto.replace (/e/img, "enter"); //sirve para remplazar las letras seleccionadas.
   var textoEncriptado = textoEncriptado.replace (/i/img,"imes");
   var textoEncriptado = textoEncriptado.replace (/a/img, "ai");
   var textoEncriptado = textoEncriptado.replace (/o/img, "ober");
   var textoEncriptado = textoEncriptado.replace (/u/img, "ufat");

   document.getElementById ("caja-texto").innerHTML=textoEncriptado; //sirve para mostrar la informacion almecada en la funcion textoEncriptado en la caja de texto

   document.getElementById("boton-copiar").style.display="inherit"; //sirve para mostrar el boton copiar
}


function desencriptar(){

    var texto = document.getElementById ("ingresar-texto").value.toLowerCase();

    var textoEncriptado = texto.replace (/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace (/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace (/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace (/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace (/ufat/img, "u");

    document.getElementById ("caja-texto").innerHTML=textoEncriptado;
    document.getElementById("boton-copiar").style.display="inherit";

 }

 function copiar(){
    
    var texto = document.querySelector("#caja-texto");
    texto.select();
    document.execCommand("copy");
 }

var buttonEncriptar = document.querySelector ("#boton-encriptar");
buttonEncriptar.onclick = encriptar;

var buttonDesencriptar = document.querySelector("#boton-desencriptar");
buttonDesencriptar.onclick = desencriptar;

var buttonCopiar = document.querySelector ("#boton-copiar");
buttonCopiar.onclick = copiar;