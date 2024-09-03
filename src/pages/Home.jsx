import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';
import img from '../pages/admin.png'

function Home() {


  return (
    <div className="home-container">
      <div className="esq">
      </div>
        
      <div className="dir">
        <div className="conteudo-dir">
          <h1 id="title-home"> ADM</h1>
          <p id="subtitulo">Aqui você controla e cria seus EBOOK'S!</p>
          <img className="imgg" src={img} alt=""  />
          <br />
          <Link to="/criar">
            <button id="button">ENCONTRAR!</button>
          </Link>
          
        </div>
        
      </div>
    </div>
  );
}

export default Home;
