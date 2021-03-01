import React, { Component } from 'react';
import CardNota from '../CardNota';
import './ListaDeNotas.css'

class ListaDeNotas extends Component{

    render() {
        return (
            <ul className='lista-notas'>
                {this.props.notas.map((nota, index) => {
                    return (
                        <li 
                        key={index} 
                        className='lista-notas_item'
                        >
                            <CardNota 
                            titulo={nota.titulo}
                            nota={nota.nota}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;