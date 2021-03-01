import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import './assets/App.css'
import './assets/index.css'

const nomes = ['Thyéz', 'Jaciara', 'Jhean', 'Jenyfer', 'Julián', 'Jackson'];

class App extends Component {

  constructor(){
    super();
    this.state = { 
      notas:[]
     }
  }

  criarNota(titulo, nota){
    const novaNota = {titulo, nota};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
    console.log(this.state.notas);
  }

  render(){
    return (
      <section className='app'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
