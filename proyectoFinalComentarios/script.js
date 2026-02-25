let formulario = document.getElementById(('form-comments'));
let nombre = "", apellido = "", comentario = "", Tusuario = "", 
Tfecha = "", TComentario = "", Tdivisor = "", Timagen = "", TdivisorFlex = "",
TEliminar = "";
let fechaAct = "";
let contador = 0;
const section = document.getElementById('comment-list');
let spanContador = document.getElementById("contador");
spanContador.textContent = contador.toString();

formulario.addEventListener('submit', function(event){
    fechaAct = new Date().toString()
    //creación de los elementos en el DOM
    Tusuario = document.createElement('h3');
    Tusuario.id = 'tag-name'+contador.toString();

    Tfecha = document.createElement('h5');
    Tfecha.id = 'tag-date'+contador.toString();

    TComentario = document.createElement('p');
    TComentario.id = 'tag-comment'+contador.toString();

    Timagen = document.createElement('img');
    Timagen.src = "img/img1.png";
    Timagen.id = "imc"+contador.toString();

    TdivisorFlex = document.createElement('div');
    TdivisorFlex.id = "divF"+contador.toString();

    Tdivisor = document.createElement('div');
    Tdivisor.id = "comment"+contador.toString();
    Tdivisor.className = "comment";

    TEliminar = document.createElement('button');
    TEliminar.id = "delete"+contador.toString();
    TEliminar.className = "delete-comment";
    //Tdivisor.textContent = "caifanes";



    event.preventDefault();//evita que el form se recargue

    //obtención de valores ingresados por el form
    nombre = document.getElementById('input-name').value;
    apellido = document.getElementById('input-lastname').value;
    comentario = document.getElementById('input-comment').value;
    //alert(nombre + " " + apellido + " " + comentario);
    
    

    //asignación del contenido que llevarán las etiquetas ya creadas
    TComentario.textContent = comentario;
    Tfecha.textContent = fechaAct;
    Tusuario.textContent = nombre  + " " + apellido;
    TEliminar.textContent = "Eliminar";
    TEliminar.setAttribute('onclick', 'eliminar(this)');
    section.prepend(Tdivisor);

    Tdivisor.appendChild(Timagen);

    //console.log(TdivisorFlex);
    Tdivisor.appendChild(TdivisorFlex);
    TdivisorFlex.appendChild(Tusuario);
    Tusuario = document.getElementById('tag-name'+contador.toString());

    //luego del usuario añado la fecha
    TdivisorFlex.appendChild(Tfecha);
    Tfecha = document.getElementById('tag-date'+contador.toString());

    //finalmente, el comentario
    TdivisorFlex.appendChild(TComentario);
    TComentario = document.getElementById('tag-comment'+contador.toString());
    
    TdivisorFlex.appendChild(TEliminar);
    //limpiar la zona de comentarios
    document.getElementById('input-comment').value = "";
    document.getElementById('input-name').disabled = true;
    document.getElementById('input-lastname').disabled = true;

    spanContador.textContent = (contador + 1).toString();

    contador++;
});


function eliminar(btn){
    let id = btn;
    console.log(id.id);
    btn.parentElement.parentElement.remove();
    contador--;
    spanContador.textContent = contador.toString();
}