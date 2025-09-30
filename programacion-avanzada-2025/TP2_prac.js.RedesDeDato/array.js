/* ejercicio 1: crear un objeto literal para un dispositivo
de red, que represente un router con las siguientes propiedades
modelo, marca, puertos, velocidad, (en mbps), y soportawifi */


const router ={
    modelo: 'AX1800',
    marca:'TP-Link',
    puertos: 4,
    velocidad: 1800,
    soportaWifi: true
};

console.log(router)


/* ejercicio 2 array de dispositivos de red */
const dispositivosRed2 = [
  { tipo: "Router", marca: "Huawei", modelo: "AX3", precio: 250 },
  { tipo: "Switch", marca: "Netgear", modelo: "GS308", precio: 90 },
  { tipo: "Firewall", marca: "Fortinet", modelo: "FortiGate 40F", precio: 800 },
  { tipo: "Access Point", marca: "MikroTik", modelo: "hAP ac²", precio: 120 },
  { tipo: "Router", marca: "Linksys", modelo: "EA7500", precio: 200 }
];

console.log(dispositivosRed2)


/* Ejercicio 3: Filtrar dispositivos por marca
Dado un array de dispositivos de red, utiliza el método filter() 
para obtener solo los dispositivos de una marca específica.*/

const dispositivo=[
    {tipo: 'Router', marca: 'Cisco', modelo:'1941', precio:1200},
    {tipo: 'Swich', marca: 'TP-Link', modelo:'TL-SG108', precio:150},
    {tipo: 'Firewall', marca: 'Cisco', modelo:'ASA 5506-X', precio:2500},
    {tipo: 'Access Point', marca: 'Ubiquiti', modelo:'UniFi AC Pro', precio:320},
    {tipo: 'Router', marca: 'TP-Link', modelo:'Archer C7', precio:180}

];

/* console.log(dispositivo); */

/* const dispositivoCisco= dispositivo.filter(elemento => condicion); */

const dispositivoMarca= dispositivo.filter( dispositivo => dispositivo.marca ==='Ubiquiti');

console.log(dispositivoMarca);

/* const dispositivotipo= dispositivo.filter(dispositivo=>dispositivo.tipo==='Router')

console.log(dispositivotipo) */



/* Ejercicio 4: Mapear direcciones IP
Dado un array de servidores con direcciones IP, utiliza el método map() 
para crear un nuevo array que contenga solo las direcciones IP. */

const servidores = [ 
    { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" }, 
    { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" }, 
    { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" }, 
    { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" }, 
    { nombre: "Servidor de Archivo", ip:"192.168.1.14", sistema: "Windows"}
]


const direccionesIP = servidores.map(servidor => servidor.ip);
console.log(direccionesIP);

const sistema = servidores.map(sistemas=> sistemas.sistema);
console.log(sistema);


/* Ejercicio 5: Filtrar y ordenar paquetes de datos
Dado un array de paquetes de datos, filtra aquellos que tengan un tamaño mayor
a 1000 bytes y ordénalos de mayor a menor según su prioridad. */

const paquetesDatos = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 }, 
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 }, 
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
 ];

/*  const tamaño= paquetesDatos.filter(paquetesDatos=>paquetesDatos.tamaño>1000)
 .sort((a,b)=>b.tamaño-a.tamaño)
 console.log(tamaño) */

const tamañoprioridad= paquetesDatos.filter(paquete=>paquete.tamaño>1000)
 .sort((a,b)=>b.prioridad-a.prioridad)
 console.log(tamañoprioridad)  




/* 
Ejercicio 6: Calcular estadísticas de red
Dado un objeto con estadísticas de tráfico de red por hora, calcula el
 total de datos transferidos y la hora con mayor tráfico. */ 
const traficoRed = { 
    "08:00": 1250, // MB transferidos 
    "09:00": 1870, 
    "10:00": 2100, 
    "11:00": 1950, 
    "12:00": 1600, 
    "13:00": 1300, 
    "14:00": 1700,
    "15:00": 2200, 
    "16:00": 1800, 
    "17:00": 1500
 }; 
 // Calcula el total de datos transferidos 
 // Encuentra la hora con mayor tráfico

const totalDatos = Object.values(traficoRed).reduce((acum, valor) => acum + valor, 0);

console.log("Total de datos transferidos:", totalDatos, "MB");


const horaMax = Object.entries(traficoRed).reduce((max, actual) => {
  return actual[1] > max[1] ? actual : max; 
});

console.log("Hora con mayor tráfico:", horaMax[0], "con", horaMax[1], "MB");







/* Ejercicio 7: Analizar conexiones de red
Dado un array de conexiones de red, agrupa las conexiones por 
protocolo y cuenta cuántas hay de cada tipo. */ 
const conexiones = [ 
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" }, 
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" }, 
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" }, 
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" }, 
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" }, 
    { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" }, 
    { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" }, 
    { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" } 
]; 
// Crea un objeto para contar las conexiones por protocolo // 
// Tu código aquí (recorre el array y cuenta las conexiones) //
console.log(conexiones);

// Agrupa: { HTTP: [obj, obj, obj], FTP: [obj, obj], ... }
const agrupadas = Object.groupBy(conexiones, c => c.protocolo);

// Pasa de grupos a conteos: { HTTP: 3, FTP: 2, ... }
const conteos = Object.fromEntries(
  Object.entries(agrupadas).map(([proto, arr]) => [proto, arr.length])
);

console.log("Conexiones por protocolo:", conteos);







/* Ejercicio 8: Filtrar y transformar alertas de seguridad
Dado un array de alertas de seguridad de red, filtra las que sean de nivel "alto" y
 transfórmalas en mensajes para el administrador. */
const dispositivos = [
    { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
    { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" }, 
    { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" }, 
    { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" } 
    ]; 
const conexionesActivas = [ 
    { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500, prioridad : "alta"  }, 
    { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000, prioridad : "baja"  }, 
    { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200, prioridad : "alta"  } 
    ]; 
    // Crea un informe que combine la información de dispositivos y conexiones// 
    const informeActividad = conexionesActivas.filter(conexion =>conexion.prioridad === "alta")
    .map(conexion => { 
    // Encuentra los dispositivos de origen y destino//
    // Tu código aquí // 
    const origen = dispositivos.find(d => d.ip === conexion.origen);
    const destino = dispositivos.find(d => d.ip === conexion.destino);
    // Retorna un objeto con la información combinada//
    return { 
           mensaje: `ALERTA: Conexión ${conexion.protocolo} de 
           ${origen?.nombre} (${origen?.ip}) hacia ${destino?.nombre} 
           (${destino?.ip}) con prioridad ${conexion.prioridad}`,
      bytes: conexion.bytes
    };
  });

console.log("Informe de alertas críticas:", informeActividad);
console.log(dispositivos);
console.log(conexionesActivas);








/* Ejercicio 9: Combinar datos de dispositivos y conexiones */
/* Combina información de dispositivos y conexiones para crear
 un informe detallado de la actividad de red. */ 
const topologiaRed = { 
    nodos: [ 
        { id: "A", tipo: "Router", ubicacion: "Planta 1" }, 
        { id: "B", tipo: "Switch", ubicacion: "Planta 1" }, 
        { id: "C", tipo: "Switch", ubicacion: "Planta 2" }, 
        { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
        { id: "E", tipo: "Router", ubicacion: "Planta 3" }
    ],
    conexiones: [ 
        { origen: "A", destino: "B", ancho_banda: 1000 }, 
        { origen: "A", destino: "C", ancho_banda: 1000 }, 
        { origen: "B", destino: "C", ancho_banda: 100 }, 
        { origen: "B", destino: "D", ancho_banda: 100 }, 
        { origen: "C", destino: "D", ancho_banda: 100 }, 
        { origen: "C", destino: "E", ancho_banda: 1000 }, 
        { origen: "D", destino: "E", ancho_banda: 1000 }
    ] 
};

// Cuenta el número de conexiones por nodo 
const conexionesPorNodo = {}; 
topologiaRed.nodos.forEach(nodo => {
     conexionesPorNodo[nodo.id] = 0; 
}); 
// Tu código aquí para contar las conexiones // 
topologiaRed.conexiones.forEach(con => {
  conexionesPorNodo[con.origen]++;
  conexionesPorNodo[con.destino]++;
});


// Encuentra los nodos con más conexiones 
const nodosOrdenados = Object.entries(conexionesPorNodo)
/* .sort(/* Tu código aquí para ordenar de mayor a menor );  */
.sort(/(a, b) => b[1] - a[1]/); 
// Sugiere optimizaciones
// (por ejemplo, los nodos con más de 2 conexiones podrían
//  necesitar más ancho de banda) 
const sugerencias =  nodosOrdenados
  .filter(([nodo, conexiones]) => conexiones > 2)
  .map(([nodo, conexiones]) => `Nodo ${nodo} tiene ${conexiones} conexiones. Podría necesitar más ancho de banda.`);

console.log("Conexiones por nodo:", conexionesPorNodo); 
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados); 
console.log("Sugerencias de optimización:", sugerencias);





/* Ejercicio 10: Analizar y optimizar topología de red
Dado un objeto que representa una topología de red, encuentra los
nodos con más conexiones y sugiere optimizaciones. */

const topologiaRed2 = { 
    nodos: [ 
        { id: "A", tipo: "Router", ubicacion: "Planta 1" }, 
        { id: "B", tipo: "Switch", ubicacion: "Planta 1" }, 
        { id: "C", tipo: "Switch", ubicacion: "Planta 2" }, 
        { id: "D", tipo: "Switch", ubicacion: "Planta 3" }, 
        { id: "E", tipo: "Router", ubicacion: "Planta 3" } 
    ], 
    conexiones: [
        { origen: "A", destino: "B", ancho_banda: 1000 }, 
        { origen: "A", destino: "C", ancho_banda: 1000 }, 
        { origen: "B", destino: "C", ancho_banda: 100 }, 
        { origen: "B", destino: "D", ancho_banda: 100 }, 
        { origen: "C", destino: "D", ancho_banda: 100 }, 
        { origen: "C", destino: "E", ancho_banda: 1000 }, 
        { origen: "D", destino: "E", ancho_banda: 1000 } 
    ] 
};



// Cuenta el número de conexiones por nodo 
const conexionesPorNodo2 = {}; 
topologiaRed.nodos.forEach(nodo => { 
    conexionesPorNodo2[nodo.id] = 0; 
}); 
// Tu código aquí para contar las conexiones 

topologiaRed2.conexiones.forEach(con => {
  conexionesPorNodo2[con.origen]++;
  conexionesPorNodo2[con.destino]++;
});


// Encuentra los nodos con más conexiones

const nodosOrdenados2 = Object.entries(conexionesPorNodo2)
.sort((a, b) => b[1] - a[1]);


/* sugerencias */

const sugerencias2 = nodosOrdenados2
  .filter(([nodo, conexiones]) => conexiones > 2)
  .map(([nodo, conexiones]) => `Nodo ${nodo} tiene ${conexiones} conexiones. Revisar ancho de banda.`);

console.log("Conexiones por nodo:", conexionesPorNodo2);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados2);
console.log("Sugerencias de optimización:", sugerencias2);



