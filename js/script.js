const textArea = document.getElementById("texto");
const mensajeEncriptado = document.getElementById("mensaje");


function botonEncriptar(){
    let textoEncriptado = encriptar(textArea.value);
    
    mensajeEncriptado.value = textoEncriptado;
    textArea.value = " ";

    const texto1 = document.querySelector(".texto-sugerencia")
    if(texto1){
        texto1.style.visibility = "hidden";
    }
    const texto2 = document.querySelector("h3")
    if(texto2){
        texto2.style.visibility = "hidden";
    }
    const imagen = document.getElementById('miImagen');
    if (imagen) {
        imagen.style.visibility = 'hidden';
    }

}

function encriptar(stringEncriptado){
    let letrasEncriptadas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < letrasEncriptadas.length; i++){

        if(stringEncriptado.includes(letrasEncriptadas[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(letrasEncriptadas[i][0], letrasEncriptadas[i][1])
        }
    }
    return stringEncriptado;
}

function botonDesencriptar(){
    let textoEncriptado = desencriptar(textArea.value);
    
    mensajeEncriptado.value = textoEncriptado;
    textArea.value = " ";
}

function desencriptar(stringDesencriptado){
    let letrasEncriptadas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < letrasEncriptadas.length; i++){

        if(stringDesencriptado.includes(letrasEncriptadas[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(letrasEncriptadas[i][1], letrasEncriptadas[i][0])
        }
    }
    return stringDesencriptado;
}
