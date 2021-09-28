import React from 'react';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemLista(props) {
  return (
    <div className="card-container">
      <div className="card-text">
        {props.signo}
      </div>

      <img className="imagemSigno align-center" src={props.imagem} alt={props.signo}/>

      <div className="card-text">
        {props.dataInicio} - {props.dataFim}
      </div>
    </div>
  )
}