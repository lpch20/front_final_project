import React from "react";
import Header from "../../components/Header/Header";
import Navegationbar from "../../components/NavigationBar/Navegationbar";
import "./Playlist.css";

export const contextualPlaylist = () => {
  const getPlaylist = async () =>{
    try {
      
    } catch (error) {
      
    }
  }
  return (

    <>
      <div className="mainContainer">
        <h3 className="">Generada Del Cupido Musical</h3>
        <Header title="Playlist Generada" />
        <Navegationbar
          icon1="/style=fill, state=active.svg"
          icon2="/style=outline, state=inactive (1).svg"
          icon3="/style=outline, state=inactive, add-friend=false.svg"
          icon4="/style=outline, state=inactive (2).svg"
        />
        <div className="coverSection">
          <img className="coverStyles" src="/public/1.png" alt="" />
          <img className="coverStyles" src="/public/14.png" alt="" />
          <img className="coverRaw" src="/public/8.png" alt="" />
          <img className="coverStyles" src="/public/2.png" alt="" />
        </div>

        <div className="logoDiv">
          <img className="logoSmall" src="/public/logo-small.svg" alt="" />
          <img className="verifiedStyle" src="/public/verified.svg" alt="" />
          <img className="shareStyle" src="/public/share.svg" alt="" />

          <h2 className="time">1h 17m</h2>
          <img className="vectorStyle" src="/public/vector.svg" alt="" />
        </div>
        <div className="logoDiv">
          <img className="makeCopy" src="/public/copy.svg" alt="" />
          <h2  className="copyText">Crear Copia</h2>
          <img className="shuffle" src="/public/shuffle.svg" alt="" />
          <img className="playButton" src="/public/play-btn.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default contextualPlaylist;
