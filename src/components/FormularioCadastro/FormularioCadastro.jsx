import React, { Component } from 'react';
import './FormularioCadastro.css'

class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = '';
        this.nota = '';
    }

    handlerMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    handleMudancaNota(evento){
        evento.stopPropagation();
        this.nota = evento.target.value;
    }

    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.nota);
    }

    render() {
        return (
            <form className='formulario-cadastro'
                onSubmit={this.criarNota.bind(this)}>
                <input 
                    type='text' 
                    placeholder='Titulo' 
                    className='formulario-cadastro_input'
                    onChange={this.handlerMudancaTitulo.bind(this)}
                />
                <textarea 
                    placeholder='Escreva sua nota...' 
                    className='formulario-cadastro_textarea'
                    onChange={this.handleMudancaNota.bind(this)}
                />
                <button className='formulario-cadastro_button'>
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;