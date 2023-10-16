import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Funcionaloption from "../components/Funcionaloption";
import Navegationbar from "../components/Navegationbar";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="topGradient"></div>
        <div className="homeTitle">
          <h1>Música ya</h1>
          <div>
            <img src="../../public/Vector.svg" />
            <img src="../../public/style=outline, state=active, notification=true.svg" />
          </div>
        </div>
        <div className="homeOptions">
          <Funcionaloption
            image="../../public/animation-step=6.svg"
            title="Cupito Musical"
            text="Tus artistas favoritos nunca van a dejarte con el corazón roto."
          />
          <Funcionaloption
            image="../../public/animation-step=5.svg"
            title="Música Contextual"
            text="Creamos la playlist perfecta para cualquier situación"
          />
        </div>
        <div className="homeNavigationbar">
          <Navegationbar
            icon1="../../public/style=fill, state=active.svg"
            icon2="../../public/style=outline, state=inactive (1).svg"
            icon3="../../public/style=outline, state=inactive, add-friend=false.svg"
            icon4="../../public/style=outline, state=inactive (2).svg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;