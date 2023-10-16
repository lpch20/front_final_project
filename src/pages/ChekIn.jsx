
import React from "react";

import './ChekIn.css';
import MainButton from '../components/MainBtn'
export const ChekIn = () => {
  return (
    <> 
    <main className="container" >
      <div className="logo">
        <h1 className="lettersLogo">audn
          </h1>
          <br />
          
      </div>
      <div  className="mid">
      <h2 className="lettersMid">Música a medida.</h2></div>
      <br />
      <div  className="containter2" >
        <MainButton>Registrarse gratis</MainButton>
        <MainButton>Continuar Con Google</MainButton>
        <MainButton>Continuar Con Apple</MainButton>
       

      </div>
      <button className="logIn">

      </button>
    </main>
    </>
  );
};
export default ChekIn;
