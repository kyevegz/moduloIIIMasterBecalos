let formulario = document.getElementById(('form-comments'));//obtiene el formulario
let nombre = "", apellido = "", comentario = "", Tusuario = "", //variables para los datos del usuario y los elementos que se crearán en el DOM
Tfecha = "", TComentario = "", Tdivisor = "", Timagen = "", TdivisorFlex = "",
TEliminar = "";
let fechaAc = "";//variable que guardará la fecha
let contador = 0;//variable contadora de comentarios
const section = document.getElementById('comment-list');//constante que accede al div donde se enlistarán los comentarios
let spanContador = document.getElementById("contador");//variable que obtiene el span donde se muestra la cantidad de comentarios
spanContador.textContent = contador.toString();//lo inicializa con el valor de 0


//arreglos constantes para formato de fecha
const diasSp = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes",
    "Sábado" ], 
    meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

formulario.addEventListener('submit', function(event){

    
    //-----formato de fecha------- La fecha sale en inglés, así que para mayor estética la vamos a formatear
    fechaAc = new Date();
        let [mes, diaS, diaN, hora, minuto, segundo] = [//Se obtienen los datos obtenidos, así les damos formato a los que vienen en inglés
            fechaAc.getMonth(),
            fechaAc.getDay(),
            fechaAc.getDate(),
            fechaAc.getHours(),
            fechaAc.getMinutes(),
            fechaAc.getSeconds(),
        ];

    for(let i = 0; i < 7; i++){//recorre el array de días de semana hasta que el valor numérico coincida con el día en español
        if(i === diaS ){
            diaS = diasSp[i];
        }
    }

    for(let i = 0; i < 12; i++){//recorre el array de los 12 meses, aquí el mes sí empieza desde 0 
        if(i === mes){
            mes = meses[i];
        }
    }
    
    //----------------creación de los elementos en el DOM--------------

    //h3 del usuario
    Tusuario = document.createElement('h3');
    Tusuario.id = 'tag-name'+contador.toString();

    //h5 de la fecha
    Tfecha = document.createElement('h5');
    Tfecha.id = 'tag-date'+contador.toString();

    //p del comentario
    TComentario = document.createElement('p');
    TComentario.id = 'tag-comment'+contador.toString();

    //img de la foto
    Timagen = document.createElement('img');
    Timagen.src = "img/img1.png";
    Timagen.id = "imc"+contador.toString();

    //div que le da el flex y pone la imágen y el p y los h en fila
    TdivisorFlex = document.createElement('div');
    TdivisorFlex.id = "divF"+contador.toString();

    //button para eliminar
    TEliminar = document.createElement('button');
    TEliminar.id = "delete"+contador.toString();
    TEliminar.className = "delete-comment";

    //div que contiene todo lo anterior
    Tdivisor = document.createElement('div');
    Tdivisor.id = "comment"+contador.toString();
    Tdivisor.className = "comment";

    event.preventDefault();//evita que el form se recargue

    //-------------obtención de valores ingresados por el form---------------
    nombre = document.getElementById('input-name').value;
    apellido = document.getElementById('input-lastname').value;
    comentario = document.getElementById('input-comment').value;
    

    //-----------asignación del contenido que llevarán las etiquetas ya creadas----------
    TComentario.textContent = comentario;//el texto
    Tfecha.textContent = diaS + " " + diaN + " de " + mes + " a las " + hora +":" + minuto + ":" +segundo;//la fecha
    Tusuario.textContent = nombre  + " " + apellido;//nombre y apellido
    TEliminar.textContent = "Eliminar";//el botón de eliminar
    TEliminar.setAttribute('onclick', 'eliminar(this)');//se le añade el atributo onclick y la función de eliminar pasando el parámetro this, es decir, this elemento
    

    //---------inserción en el DOM------------
    //insertar el div del comentario en el div de lista
    section.prepend(Tdivisor);
    Tdivisor.appendChild(Timagen);//añadir dentro del div anterior la imágen
    Tdivisor.appendChild(TdivisorFlex);//añadir el div flex que contiene los datos escritos
    TdivisorFlex.appendChild(Tusuario);//en el div flex se mete lo del usuario
    TdivisorFlex.appendChild(Tfecha);//la fecha
    TdivisorFlex.appendChild(TComentario);//el comentario
    TdivisorFlex.appendChild(TEliminar);//el botón de eliminar

    //limpiar la zona de comentarios y deshabilitar los input de nombre y apellido
    document.getElementById('input-comment').value = "";
    document.getElementById('input-name').disabled = true;
    document.getElementById('input-lastname').disabled = true;

    spanContador.textContent = (contador + 1).toString();//actualizar el span de contador

    contador++;//incrementar contador
});


//--------FUNCIÓN PARA ELIMINAR COMENTARIOS----------
function eliminar(btn){//toma como parámetros el botón actual, es decir, al que le hayan dado click
    let btnA = btn;//lo guarda en una variable
    btnA.parentElement.parentElement.remove();//el doble parentElement se asegura de eliminar los otros dos divs, el div padre y el div abuelo, siendo el div abuelo el que tiene todo lo del comentario
    contador--;//decrementa el contador de los comentarios
    spanContador.textContent = contador.toString();//actualiza el texto del span
}