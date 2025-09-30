/* como defino los array */

const carrito = ['Producto 1','Producto 2','Producto 3'];
/* console.log(carrito); */

carrito.map(producto=>{
    return`el producto es: ${producto}`
})

console.log(carrito);


/* apread operator */
let lenguajes= ['JavaScrip', 'Python', 'Java'];
let frameworks= ['React', 'Angular', 'Vue'];

/* unir los array en 1 solo array */

let tecnologias =[...lenguajes,...frameworks];

console.log(tecnologias); 


/* let tecnologias2=['C#','PHP','Ruby']; */





