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
    const storedSearch = JSON.parse(localStorage.getItem("recentSearch"));
    if (storedSearch) {
      setRecentSearch(storedSearch);
      console.log(storedSearch);
    }
  }, [showSearch]);

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
        {showSearch ? (
          <div className="searchResultsContainer">
            {!searchTerm ? (
              <>
                {recentSearch?.map(({ artist_id, artist, name }) => (
                  <div
                    className="suggestionItem"
                    key={artist_id + "recent-search"}
                  >
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
                <div className="suggestionList">
                  {suggestions.map(({ artist_id, artist, name }) => (
                    <div
                      className="suggestionItem"
                      key={artist_id + "suggestion"}
                      onClick={() =>
                        handleSuggestionClick(name, artist, artist_id)
                      }
                    >
                      <img src={`/${artist_id}.png`} className="topTwImg" />
                      <div>
                        <p className="topTwName">{name}</p>
                        <p className="topTwArtist">{artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        ) : (
          <div className="topTwentyRender">
            <div className="songsTopTwenty">
              {topSongs.map(({ artist_id, artist, name }) => (
                <div className="topTwentyRenderSong" key={artist_id + "top20"}>
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
        )}
      </div>
    </>
  );
}

export default Search;
