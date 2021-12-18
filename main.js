const miFormulario = document.forms['formulario'];


const validarFormulario = (e)=>{

    e.preventDefault();
    
    if (miFormulario.fName.value===''){
        miFormulario.fName.classList.add('error');        
        document.getElementById('fname').classList.remove('hide');        
    }else{
        document.getElementById('fname').classList.add('hide');
        miFormulario.fName.classList.remove('error');
    }
    if (miFormulario.lName.value===''){
        miFormulario.lName.classList.add('error');
        const span = document.getElementById('lname').classList.remove('hide');        
    }else{
        const span = document.getElementById('lname').classList.add('hide');
        miFormulario.lName.classList.remove('error');
    }
    if (miFormulario.password.value===''){
        miFormulario.password.classList.add('error');
        const span = document.getElementById('password').classList.remove('hide');        
    }else{
        const span = document.getElementById('password').classList.add('hide');
        miFormulario.password.classList.remove('error');
    }
    if ((miFormulario.email.value==='') || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(miFormulario.email.value))){
        miFormulario.email.classList.add('error');
        const span = document.getElementById('email').classList.remove('hide');        
    }else if ((miFormulario.email.value!=='') && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(miFormulario.email.value))){
        const span = document.getElementById('email').classList.add('hide');
        miFormulario.email.classList.remove('error');
        console.log(miFormulario.email.valid);
    }

}