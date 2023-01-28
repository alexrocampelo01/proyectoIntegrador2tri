fetch(`http://localhost/proyectoIntegrador/ProyectoSegundoTri/codigo/API/?nombreUsu=${document.querySelector('#logUsu').textContent}`)
.then((response) => response.json())
.then((data) => {
    // console.log(`http://localhost/proyectoIntegrador/ProyectoSegundoTri/codigo/API/?nombreUsu=${document.querySelector('#logUsu').textContent}`);
    // console.log(data[0]);
    document.querySelector('#correo').placeholder = `${data[0]['correo']}`;
    document.querySelector('#pass').placeholder = `${data[0]['password']}`;
    document.querySelector('#altura').placeholder = `${data[0]['altura']}`;
    document.querySelector('#peso').placeholder = `${data[0]['peso']}`;
    document.querySelector('#fechNac').textContent = `${data[0]['fechNac']}`;
    
})
let inputCorre = document.querySelector('#correo');
