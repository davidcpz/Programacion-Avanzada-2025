/* promises */

/* resolve ejecuta el llamado al promise cuando el llamdo es correecto */
/* reject: cuando ha un error */

const aplicarDescuento= new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        let descuento = false/* true se modifica */
        if (descuento){
            resolve("descuento aplicado");
        } else {
            reject("no se pudo hacer el descuento")
        }

    }, 3000)
})


aplicarDescuento.then(resultado=>{
    console.log(resultado);
}).catch(error =>{
    console.log("hubo un error en la consulta " + error)
})


/* console.log(aplicardescuento); */