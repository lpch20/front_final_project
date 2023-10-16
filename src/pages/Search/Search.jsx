import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Navegationbar from "../../components/Navegationbar";
import "./Search.css";
import { topTwenty } from "../../../API/topTwenty";

function Search() {
  const [songs, setSongs] = useState([]);

  const getTopTwenty = async () => {
    try {
      const result = await topTwenty();
      setSongs(result);
    } catch (error) {
      error("Las credenciales no son correctas");
    }
  };

  useEffect(() => {
    getTopTwenty();
  }, []);

  return (
    <>
      <div className="searchContainer">
        <div className="topGradient"></div>
        <div className="searchTitle">
          <h1>Buscador</h1>
        </div>
        <div className="searchBarInput">
          <img
            className="imgInputSearchbar"
            src="/style=outline, state=inactive (1).svg"
          />
          <input
            type="text"
            placeholder="Que deseas escuchar?"
            //   onChange={(e) => {
            //     props.filterText(e.target.value);
            //   }}
          />
        </div>
        <div className="divider">
          <p>
            <span>Top 20s</span>
            <hr />
          </p>
        </div>
        {songs.length > 0 ? (
          <div className="topTwentyRender">
            {songs.map((x) => (
              <div key={x.id}>
                <img src="" className="topTwImg" />
                <p className="topTwName">{x.name}</p>
                <p className="topTwArtist">{x.artist}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="homeNavigationbar">
          <Navegationbar
            icon1="/style=outline, state=inactive.svg"
            icon2="/vector copy.svg"
            icon3="/style=outline, state=inactive, add-friend=false.svg"
            icon4="/style=outline, state=inactive (2).svg"
          />
        </div>
      </div>
    </>
  );
}

export default Search;
