const persona=[
    {nombre: "juan", edad: 25, aprendiendo :"javascrip"},
    {nombre: "ana", edad: 28, aprendiendo :"python"},
    {nombre: "pedro", edad: 55, aprendiendo :"java"},
    {nombre: "Maria", edad: 30, aprendiendo :"c#"},
    {nombre: "matias", edad: 45, aprendiendo :"javascrip"}

]

console.log (persona); 

/* funcion para filtrar maores de 28 */
/* const mayores = persona.filter(persona=> persona.edad >=28);

console.log(mayores);
 */

const ana = persona.find(persona=>persona.nombre == "ana");
console.log(ana)


const persona2=[
    {nombre: "juan", edad: 56, aprendiendo :"javascrip"},
    {nombre: "lucas", edad: 20, aprendiendo :"python"},
    {nombre: "antonio", edad: 42, aprendiendo :"java"},
    {nombre: "nadia", edad: 36, aprendiendo :"c#"},
    {nombre: "celeste", edad: 45, aprendiendo :"javascrip"}

]

/* funcion para filtar mayores de 28 entre los objetos */
const mayores = [...persona, ...persona2].filter(persona=>persona.edad >28);