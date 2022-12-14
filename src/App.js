
import { useEffect, useState } from 'react';
import './App.css';
import Prato from './componentes/Prato';



function App() {

  const [pratos, setPratos] = useState([])

  useEffect(() => {
    fetch('https://alura-pizza-okiba.herokuapp.com/api/pratos')
      .then(resposta => resposta.json())
      .then(dados =>{
        setPratos(dados)
        //console.log(dados)
      })
  }, [])
  
  return (
    <div className="App">
      <div className="banner-container">
        <img src='/images/banner.png' alt='Banner'></img>
      </div>
      <div className="logo-container">
        <img src='/images/logo.png' alt='Banner'></img>
      </div>

      <section className='cardapio'>
        {pratos.map(prato => 
        (<Prato 
        key={prato.id}
        nome={prato.nome}
        descricao={prato.descricao}
        imagem={prato.imagem}
        preco={prato.preco}
        />))}
      </section>


    </div>
  );
}

export default App;
