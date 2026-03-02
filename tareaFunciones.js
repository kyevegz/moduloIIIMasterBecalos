const libros = ["La razón de estar contigo",
    "La razón de estar contigo: un nuevo viaje",
    "La razón de estar contigo: el regreso a casa",
    "Mujercitas", "El bosque de los Pigmeos",
    "El periquillo Sarniento", "Juárez el Republicano",
    "El diario de Ana Frank", "El Jardín de las Mariposas",
    "Las Crónicas de Narnia: El sobrino del mago",
    "Las Crónicas de Narnia: El león, el ropero y la bruja","Cien años de Soledad"
];
let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    console.log(librosLeidos) ;
}


for(let i = 0; i < libros.length; i++){
    agregarLibro(libros[i]);
}

mostrarLibrosLeidos()