//creamos el objeto de los usarios
let usuario ={};
//
let inicioBut = document.querySelector('#inicioBut');
inicioBut.addEventListener('click',sesion);

function sesion(){
    //recojemos los campos en el objeto
    usuario.nomUsu = document.querySelector('#nomUsu').value;
    usuario.pass = document.querySelector('#pass').value;
    // console.log(`http://localhost/proyectoIntegrador/ProyectoSegundoTri/codigo/API/?nombreUsu=${usuario.nomUsu}&pass=${usuario.pass}`);
    fetch(`http://localhost/proyectoIntegrador/ProyectoSegundoTri/codigo/API/?nombreUsu=${usuario.nomUsu}&pass=${usuario.pass}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if(data[0]){
           data.forEach(element => {    
                document.querySelector('#errores').innerHTML=`bien benido ${element.nombre}`;
                document.querySelector('#logUsu').innerHTML=`${element.nomUsu}`;
            }); 
        }else{
            document.querySelector('#errores').innerHTML=`Nose a encontrado un usario con esos datos`;
        }
        
        
    })
}