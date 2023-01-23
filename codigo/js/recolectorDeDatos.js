/*nos encargamos me este js de recoger los datos del formulario*/
/*el funcionamien to de pulsar el boton*/
let butRegistro = document.querySelector('#registro');
butRegistro.addEventListener('click',recoger);
///* parde comprovacion de campos vacios */
// document.querySelector('#passRepe').addEventListener('blur',coincidentes);//ponemos el evento a las contraseñas
// /*localizamos la div de errores y la guardamos en el codigo*/
// let outputErrores = document.querySelector('#errores');
/*array con los datos del formulario*/
let datosUsu =[];
function recoger(){
     
    datosUsu['nombre'] = document.querySelector('#nom').value;
    datosUsu['apellidos'] =  document.querySelector('#apel').value;
    datosUsu['nombreUsu'] = document.querySelector('#nomUsu').value;
    datosUsu['correo'] = document.querySelector('#correo').value;
    datosUsu['pass'] = document.querySelector('#pass').value;
    datosUsu['passRe']  = document.querySelector('#passRepe').value;
    datosUsu['altura'] = document.querySelector('#altura').value;
    datosUsu['peso'] = document.querySelector('#peso').value;
    datosUsu['fechNac'] = document.querySelector('#fechNac').value;

    console.log(datosUsu);
}
function coincidentes(){
    console.log(document.querySelector('#pass').value);
    console.log(document.querySelector('#passRepe').value);
    outputErrores.innerHTML="bien";
    if(document.querySelector('#pass').value == "" && document.querySelector('#passRepe').value == "") {
        outputErrores.innerHTML="rellena la contraseñas";
    }else if(!document.querySelector('#pass').value) {
        outputErrores.innerHTML="contaseña vacio";
    }else if(!document.querySelector('#passRepe').value){
        outputErrores.innerHTML="contaseña repetir vacia";
    }
    else if(document.querySelector('#pass').value == document.querySelector('#passRepe').value){
        outputErrores.innerHTML="bien";
    }else{
        outputErrores.innerHTML="no he echo nada";
    }
/*nombre */
