function  handleFormularioIMC(event){
    event.preventDefault();
    var peso = document.querySelector('#txtPeso').value;

    var estatura = document.querySelector('#txtEst').value;
    var peso2 = parseInt(peso);
    var estatura2=parseInt(estatura);
    var imcC=peso2*((estatura2/100)^2);
    if(peso==''||estatura==''){
        window.alert('Necesitas llenar los campos');
      
    }
    else{
        window.alert('tu IMC es de: ' , imcC);
        
        console.log("imc: ", imcC);
    }




document
    .querySelector('#btnSubmit2')
    .addEventListener('click', handleFormularioIMC);

}