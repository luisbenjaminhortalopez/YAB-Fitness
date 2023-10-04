function  handleFormularioRegistroSesionSubmit(event){
    event.preventDefault();
    var usuario = document.querySelector('#txtUsuario').value;
    var password = document.querySelector('#txtPassword').value;
    console.log(usuario, password);
}

document
    .querySelector('#formulario-registro-sesion')
    .addEventListener('submit', handleFormularioInicioSesionSubmit);