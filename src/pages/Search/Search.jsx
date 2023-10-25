import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Navegationbar from "../../components/NavigationBar/Navegationbar";
import "./Search.css";
import { topTwenty, allSongs } from "../../../API/songs_API";
import SearchHeader from "./components/SearchHeader";

function Search() {
  const [topSongs, setTopSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [recentSearch, setRecentSearch] = useState([]);
  const suggestions = searchResults.slice(0, 5);
  const showSearchResults = searchTerm && searchResults.length > 0;
  const headerTitle = !showSearch
    ? "Top 20s"
    : !searchTerm
    ? "Busquedas Recientes: "
    : "Resultados sugeridos";

  useEffect(() => {
    const storedSearch = JSON.parse(localStorage.getItem("recentSearch")); //recentSearch es identificador
    if (storedSearch) {
      setRecentSearch(storedSearch);
      console.log(storedSearch);
    }
  }, [showSearch]);

  const saveRecentSearchToLocalStorage = (searchData) => {
    localStorage.setItem("recentSearch", JSON.stringify(searchData));
    console.log(searchData);
  };

  const saveRecentSearch = (suggestion) => {
    console.log(suggestion);
    console.log(recentSearch);
    if (recentSearch.length <= 4) {
      setRecentSearch([...recentSearch, suggestion]);
    } else {
      setRecentSearch([...recentSearch.slice(1, 5), suggestion]); // que pasa si hay alguno repetido
    }
    saveRecentSearchToLocalStorage(recentSearch);
  };

  const getTopTwenty = async () => {
    try {
      const result = await topTwenty();
      setTopSongs(result);
    } catch (error) {
      error("Error al obtener el top20 mundial");
    }
  };
  const getAllSongs = async () => {
    try {
      const allSongsDb = await allSongs();
      setSongs(allSongsDb);
    } catch (error) {
      error("Error al obtener todas las canciones.");
    }
  };

  useEffect(() => {
    getTopTwenty();
    getAllSongs();
  }, []);

  useEffect(() => {
    const searchFilter = searchTerm.toLowerCase();
    if (!searchFilter || songs.length === 0) {
      return;
    }

    const results = songs.filter(
      (n) =>
        n.name.toLowerCase().includes(searchFilter) ||
        n.artist.toLowerCase().includes(searchFilter)
    );
    setSearchResults(results);
  }, [searchTerm, songs]);

  const searchSong = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  let content1;
  let content = () => (
    <div className="topTwentyRender">
      <div className="songsTopTwenty">
        {topSongs.map(({ artist_id, artist, name, song_id }) => (
          <div className="topTwentyRenderSong" key={song_id + "top20"}>
            <img src={`/${artist_id}.png`} className="topTwImg" />
            <p className="topTwName">{name}</p>
            <p className="topTwArtist">{artist}</p>
          </div>
        ))}
      </div>
      <Navegationbar
        icon1="/style=outline, state=inactive.svg"
        icon2="/vector copy.svg"
        icon3="/style=outline, state=inactive, add-friend=false.svg"
        icon4="/style=outline, state=inactive (2).svg"
      />
    </div>
  );
  if (showSearch) {
    content1 = () => (
      <div className="searchResultsContainer">
        {!searchTerm ? (
          <>
            {recentSearch?.map(({ artist_id, artist, name, song_id }) => (
              <div className="suggestionItem" key={song_id + "recent-search"}>
                <img src={`/${artist_id}.png`} className="topTwImg" />
                <div>
                  <p className="topTwName">{name}</p>
                  <p className="topTwArtist">{artist}</p>
                </div>
                <img src="/cross.svg" className="deleteSearchImg" />
              </div>
            ))}
          </>
        ) : (
          showSearchResults && (
            <div className="recentSearchList">
              {suggestions.map((suggestion) => (
                <button
                  className="recentSearchSuggestion"
                  key={suggestion.song_id + "suggestion"}
                  onClick={() => {
                    saveRecentSearch(suggestion);
                  }}
                >
                  <img
                    src={`/${suggestion.artist_id}.png`}
                    className="topTwImg"
                  />
                  <div>
                    <p className="topTwName">{suggestion.name}</p>
                    <p className="topTwArtist">{suggestion.artist}</p>
                  </div>
                </button>
              ))}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <>
      <div className="searchContainer">
        <SearchHeader
          onDiscardSearch={() => setShowSearch(false)}
          onSearchChange={(e) => searchSong(e)}
          onSearchFocus={() => setShowSearch(true)}
          showSearch={showSearch}
          searchTerm={searchTerm}
          title={headerTitle}
        />
        {showSearch && content1()}
        {!showSearch && content()}
      </div>
    </>
  );
}

export default Search;
