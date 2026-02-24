let frutas = ["🍇","🥥", "🍉","🥝","🫐", "🥥","🍒","🍓","🫐","🍎",
    "🍉", "🫐", "🥝", "🥝", "🍒", "🍒", "🫐", "🍎", "🥥", 
    "🥝", "🍇", "🫐", "🫐", "🥥"
];
let clasificacion = [["h", 3]], j = 0;

// clasificacion.push("1", 2);
// console.log(clasificacion[1]);
for(let i = 0; i < frutas.length; i++){
 
    do{
        
        if(frutas[i] == clasificacion[j][1]){
            clasificacion[j][0] = frutas[i];
            clasificacion[j][1] += 1; 
            
        }else{
            clasificacion.push(frutas[i], 1);
        }
        j++;
    }while(j < clasificacion.length)
   
    // for(let j = 0; j < clasificacion.length; j++){
    //     if(frutas[i] == clasificacion[j][0]){
    //         clasificacion[j][0] = frutas[i];
    //         clasificacion[j][1] += 1; 
    //     }else{
    //         clasificacion.push(frutas[i], 0);
    //     }
    // }
    
}

console.log(clasificacion);

