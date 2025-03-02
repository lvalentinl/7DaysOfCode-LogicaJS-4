let numeroAleatorio = Math.floor(Math.random()*10);
let intentos = 1;
let intentoTotal = 3;

function asignarTextoHTML(idEtiqueta, texto){
    let textoAsignado = document.getElementById(idEtiqueta);
    if (idEtiqueta.includes('btn')) {
        textoAsignado.value = texto;
    } else {
        textoAsignado.innerHTML = texto;
    }
    return;
}

function limpiarInput(idInput){
    return document.getElementById(idInput).value = '';
}

function condicionesIniciales(){
    asignarTextoHTML('id_h1_titulo',`Reto 4`);
    asignarTextoHTML('id_h2_titulo',`Adivina el número`);
    asignarTextoHTML('id_h3_pregunta',`¿Qué número tiene oculto la computadora?, si está entre 0 y 10`);

    limpiarInput('id_input_numero_ingresado');

    asignarTextoHTML('id_btn_adivinar',`Adivinar`);
    asignarTextoHTML('id_btn_reiniciar',`Reiniciar`);
    asignarTextoHTML('id_p_resultado',``);
    asignarTextoHTML('id_p_autor',`Creado por J. Valentin`);

    ocultarMostrarElementoHTML('id_btn_adivinar', false);
    ocultarMostrarElementoHTML('id_btn_reiniciar', true);
    intentoTotal = intentoTotal;
    intentos = intentos;
}

condicionesIniciales();

function ocultarMostrarElementoHTML(idElemento, opcion){
    return document.getElementById(idElemento).hidden = opcion;
}

function finalizar(){
    asignarTextoHTML('id_p_resultado', `Intentos terminados...el número era el ${numeroAleatorio}`);
    ocultarMostrarElementoHTML('id_btn_reiniciar', false);
    ocultarMostrarElementoHTML('id_btn_adivinar', true);   
    return;
}

function btnAdivinar(){
    let numeroIngresado = parseInt(document.getElementById('id_input_numero_ingresado').value);
    
    if (numeroIngresado<11 && numeroIngresado >=0) {
        
        if (intentos <= intentoTotal) {
            if (numeroAleatorio === numeroIngresado) {
                asignarTextoHTML('id_p_resultado', `Felicitaciones!... acertaste en el intento ${intentos}`);
                ocultarMostrarElementoHTML('id_btn_reiniciar', false);
                ocultarMostrarElementoHTML('id_btn_adivinar', true); 
            } else {
                if (intentos == intentoTotal) {
                    finalizar();
                } else {
                    asignarTextoHTML('id_p_resultado', `Uy!... te queda ${intentoTotal-intentos} ${intentoTotal-intentos == 1? 'intento' : 'intentos'}`); 
                }               
            }
            
        } else {
            finalizar();
        }
        setTimeout(() => {
            asignarTextoHTML('id_p_resultado', ``);
        }, 3000);
        intentos++;
    }else{
        alert(`Por favor ingrese un número entre 0 y 10`);
    }
    limpiarInput('id_input_numero_ingresado');    
}

function btnReiniciar(){
    condicionesIniciales();
}