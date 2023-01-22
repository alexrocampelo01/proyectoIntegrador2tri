/*nos encargamos me este js de recoger los datos del formulario*/
/*el funcionamien to de pulsar el boton*/
let butRegistro = document.querySelector('#registro');
butRegistro.addEventListener('click',recoger);
function recoger(){
    let inputnom = document.querySelector('#nom');
    let nom = inputnom.value;
    console.log(nom);
    let inputApel = document.querySelector('#apel');
    let apel = inputApel.value;
    console.log(apel);
    let inputnomUsu = document.querySelector('#nomUsu');
    let nomUsu = inputnomUsu.value;
    console.log(nomUsu);
    let inputCorreo = document.querySelector('#correo');
    let correo = inputCorreo.value;
    console.log(correo);
    let inputPass = document.querySelector('#pass');
    let pass = inputPass.value;
    console.log(pass);
    let inputPassRe = document.querySelector('#passRepe');
    let passRe = inputPassRe.value;
    console.log(passRe);
    let inputAltura = document.querySelector('#altura');
    let altura = inputAltura.value;
    console.log(altura);
    let inputPeso = document.querySelector('#peso');
    let peso = inputPeso.value;
    console.log(peso);
    let inputFechNac= document.querySelector('#altura');
    let fechNac = inputFechNac.value;
    console.log(fechNac);
}
/*nombre */
