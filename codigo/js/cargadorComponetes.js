fetch('../html/cabecera.html')
    .then( (response)=> response.text())
    .then( (html) => {
        let cabecera =document.querySelector('#cabecera');
        cabecera.innerHTML = html;
        let logUsu = document.querySelector('#logUsu');
        logUsu.innerHTML=`invitado`;
    });
fetch('../html/pie.html')
    .then((response) => response.text())
    .then((html) => {
        //console.log(html);
        let pie = document.querySelector('#pie');
        pie.innerHTML= html;
    });
