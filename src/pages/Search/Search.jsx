import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Navegationbar from "../../components/NavigationBar/Navegationbar";
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

  // let results = [];
  // results = pokeData.filter(
  //   (n) =>
  //     n.name.includes(searchFilter) ||
  //     n.number.toString().includes(searchFilter)
  // );

  return (
    <>
      <div className="searchContainer">
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
            // onChange={(e) => {
            //   props.filterText(e.target.value);
            // }}
          />
        </div>
        <div className="divider">
          <p>
            Top 20s
            <hr />
          </p>
        </div>
        {songs.length > 0 ? (
          <div className="topTwentyRender">
            {songs.map((x) => (
              <div className="topTwentyRenderSong" key={x.id}>
                <img src="/download.jpeg" className="topTwImg" />
                <p className="topTwName">{x.name}</p>
                <p className="topTwArtist">{x.artist}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="searchNavigationbar">
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
