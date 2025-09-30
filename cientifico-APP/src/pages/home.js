// src/pages/home.js
export default function createHome() {
  const wrapper = document.createElement('div');
  wrapper.className = 'page-bg';
  wrapper.innerHTML = `
    <main class="card-wrapper">
      <div class="card">
        <h1>¡Hola Server! 🚀</h1>
        <p>La aplicación está funcionando correctamente</p>
        <p class="small">Servidor ejecutándose en puerto 3000</p>
      </div>
    </main>
  `;
  return wrapper;
}

/* const Home = ()=> {
    const view = 
    <div class= "home-conteiner">
        <h1> hola server </h1>
        <p> la aplicacion esta funcionando correctamente </p> 
        <p>seridor ejecutandose en el puerto 3000</p>

    </div>
    ;
    return view;
};
export default Home; */