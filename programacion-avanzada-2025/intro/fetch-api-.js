const API_KEY= '8eYFlCPEl0SL2IUjlFGkZNCVqLcVrzy9'

const peticion= fetch (`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)


/* peticion.then(resp=> {
    console.log(resp);
}) */



/* peticion.then(resp=> resp.json() )
    .then(data => {
        console.log(data)
    })
    .catch(console.warn) */
    //esto se conoce como promesas en cadena. pa' mapear la data


/* desentructurando */

/* peticion.then(resp=> resp.json() )
    .then(({data}) => {
        console.log(data.images.original.url);
    })
    .catch(console.warn) */

peticion.then(resp=> resp.json() )
    .then(({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)


