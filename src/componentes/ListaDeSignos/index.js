import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListaDeSignos() {
  return (
    <div className="home-page">
      <Titulo />

      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-3">
            <ItemLista
            signo="Aquário" dataInicio="21/01"
            dataFim="19/02" imagem="assets/x.jpeg"/>
          </div>
        
          <div className="col-md-3">
            <ItemLista
              signo="Peixes" dataInicio="20/02"
              dataFim="20/03" imagem="assets/x.jpeg" />
          </div>

          <div className="col-md-3">
            <ItemLista
              signo="Áries" dataInicio="21/03"
              dataFim="20/04" imagem="assets/x.jpeg" />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-md-3">
            <ItemLista
              signo="Touro" dataInicio="21/04"
              dataFim="21/05" imagem="assets/x.jpeg" />
          </div>

          <div className="col-md-3">
            <ItemLista
              signo="Gêmeos" dataInicio=" 22/05"
              dataFim="21/06" imagem="assets/x.jpeg" />
          </div>

          <div className="col-md-3">
            <ItemLista
              signo="Câncer" dataInicio="21/06"
              dataFim="23/07" imagem="assets/x.jpeg" />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-md-3">
            <ItemLista
              signo="Leão" dataInicio="24/07"
              dataFim="23/08" imagem="assets/x.jpeg" />
          </div>

          <div className="col-md-3">
            <ItemLista
              signo="Virgem" dataInicio="24/08"
              dataFim="23/09" imagem="assets/x.jpeg" />
          </div>

          <div className="col-md-3">
            <ItemLista
              signo="Libra" dataInicio="24/09"
              dataFim="23/10" imagem="assets/x.jpeg" />
          </div>
        </div>

        <div className="row d-flex justify-content-around"></div>
          <div className="col-md-3">
            <ItemLista
              signo="Escorpião" dataInicio="24/10"
              dataFim="22/11" imagem="assets/x.jpeg" />
          </div>

          <div className="col-md-3">
            <ItemLista
              signo="Sagitário" dataInicio="23/11"
              dataFim="21/12" imagem="assets/x.jpeg" />
          </div>

          <div className="col-md-3">
            <ItemLista
              signo="Capricórnio" dataInicio="22/12"
              dataFim="20/01" imagem="assets/x.jpeg" />
            </div>
          </div>  
    </div>
  )
}