import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./Navegationbar.css";

function Navegationbar(props) {
  return (
    <>
      <div className="navegationContainer">
        <Link to="/home">
          <button className="homeBtn">
            <img src={props.icon1} />
            Inicio
          </button>
        </Link>
        <Link to="/top20">
          <button className="searchBtn">
            <img src={props.icon2} />
            Buscador
          </button>
        </Link>
        <button className="profileBtn">
          <img src={props.icon3} />
          Perfil
        </button>
        <button className="friendsBtn">
          <img src={props.icon4} />
          Amigos
        </button>
      </div>
    </>
  );
}

export default Navegationbar;
