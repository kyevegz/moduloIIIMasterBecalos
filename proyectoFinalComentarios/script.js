let formulario = document.getElementById(('form-comments'));
let nombre = "", apellido = "", comentario = "", Tusuario = "", 
Tfecha = "", TComentario = "", Tdivisor = "";
let fechaAct = new Date().toString();
let contador = 0;
const section = document.getElementById('comments');

formulario.addEventListener('submit', function(event){
    
    Tusuario = document.createElement('h3');
    Tusuario.id = 'tag-name'+contador.toString();
    Tfecha = document.createElement('h5');
    Tfecha.id = 'tag-date'+contador.toString();
    TComentario = document.createElement('p');
    TComentario.id = 'tag-comment'+contador.toString();
    Tdivisor = document.createElement('div');
    Tdivisor.id = "comment"+contador.toString();
    Tdivisor.className = "comment";
    //Tdivisor.textContent = "caifanes";



    event.preventDefault();
    nombre = document.getElementById('input-name').value;
    apellido = document.getElementById('input-lastname').value;
    comentario = document.getElementById('input-comment').value;
    //alert(nombre + " " + apellido + " " + comentario);
    
    

    
    TComentario.textContent = comentario;
    Tfecha.textContent = fechaAct;
    Tusuario.textContent = nombre  + " " + apellido;
    section.appendChild(Tdivisor);
    Tdivisor = document.getElementById('comment'+contador.toString());

    //tras crear el divisor, añado el usuario
    Tdivisor.appendChild(Tusuario);
    Tusuario = document.getElementById('tag-name'+contador.toString());

    //luego del usuario añado la fecha
    Tdivisor.appendChild(Tfecha);
    Tfecha = document.getElementById('tag-date'+contador.toString());

    //finalmente, el comentario
    Tdivisor.appendChild(TComentario);
    TComentario = document.getElementById('tag-comment'+contador.toString());
    
    
    contador++;
});