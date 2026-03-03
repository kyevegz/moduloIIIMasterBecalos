//el range sobre el cual se calcula la longitud de la contrasena
const range = document.getElementById('rngLongitud');
//span donde se muestra el valor del range
const spanValor = document.getElementById('longitud'), 
checkMayus = document.getElementById('chbMayus'),
checkMinus = document.getElementById('chbMinus'),
checkNumber = document.getElementById('chbNumbers'),
checkSymbol = document.getElementById('chbSymbol'),
formulario = document.getElementById('form-password'),
txtContra = document.getElementById('txtcopy'),
btnEnv = document.getElementById('copy'),
checkeados = {
    mayus: false,
    minus: false,
    numero: false,
    simbolo: false
};
let contador = 0, arrayPosibles = [];


btnEnv.addEventListener("click", function(){
    const txt = document.getElementById("txtcopy");
    txt.select();
    document.execCommand('copy');
})


document.addEventListener("DOMContentLoaded", function(){
    range.value = 8;
    spanValor.textContent = range.value;
});
range.addEventListener('input', (event)=>{
    spanValor.textContent = range.value;
    
});



formulario.addEventListener('submit', function(event){
    event.preventDefault();

        arrayPosibles = [];
        if(checkMayus.checked){
            checkeados.mayus = true;
        }else{
            checkeados.mayus = false;
        }
        
        if(checkMinus.checked){
            checkeados.minus = true;
        }else{
            checkeados.minus = false;
        }
 
        if(checkNumber.checked){
            checkeados.numero = true;
        }else{
            checkeados.numero = false;
        }
        
   
        if(checkSymbol.checked){
            checkeados.simbolo = true;
        }else{
            checkeados.simbolo = false;
        }
        
   


    contador = range.value;
    let indice = 0, randomOpciones = 0, swInd = 0, rdmLSpace = 0, 
    contraFinal = "";

    for(let i in checkeados){
        if(checkeados[i] == true){
            arrayPosibles.push(indice); 
        }
        // if(checkeados.hasOwnProperty(i)){
        //     console.log(i + " " + checkeados[i]);
        // }
        indice++;
        
    }

    
    //console.log(randomOpciones);
    

    while(contador != 0){  
        
        randomOpciones = Math.floor(Math.random() * arrayPosibles.length);
        
        // for(let j in arrayPosibles){
        //     if(arrayPosibles[j] == randomOpciones){
        //         swInd = randomOpciones;
        //     }
        // }
        //console.log(swInd);
        swInd = arrayPosibles[randomOpciones];
        switch(swInd){
            case 0:
                rdmLSpace = Math.floor(Math.random() * 26); 
                contraFinal += letras(rdmLSpace).toUpperCase();
                
                break;
            case 1:
                rdmLSpace = Math.floor(Math.random() * 26)
                contraFinal += letras(rdmLSpace);
                break;
            case 2:
                rdmLSpace = Math.floor(Math.random() * 9);
                contraFinal += rdmLSpace.toString();
                break;
            case 3:
                rdmLSpace = Math.floor(Math.random() * 16);
                contraFinal += simbolos(rdmLSpace);
                break;
        }
        contador--;
    }
    checkeados.mayus = false;
    checkeados.minus = false;
    checkeados.numero = false;
    checkeados.simbolo = false;
    btnEnv.disabled = false;
    txtContra.value = contraFinal;
});

function letras(rdm){
    const abecedario = "abcdefghijklmnopqrstuvwxyz";
    return abecedario[rdm];
}

function simbolos(rad){
    const symbols = "*/_-+#$%&=)([]}{";
    return symbols[rad];
}