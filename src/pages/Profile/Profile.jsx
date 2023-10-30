import React, { useState, useEffect } from "react";
import Navegationbar from "../../components/NavigationBar/Navegationbar";
import "./Profile.css";
import { usersData } from "../../../API/userData_API";
import HeaderProfile from "./components/HeaderProfile";
import { Link } from "react-router-dom";

function Profile() {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const allUsersDb = await usersData();
      setUsers(allUsersDb);
    } catch (error) {
      error("Error al obtener todas los usuarios.");
    }
  };

  useEffect(() => {
    getUsersData();
    console.log(users);
  }, []);

  return (
    <div className="profileContainer">
      <HeaderProfile
        profileImg="/1.png"
        profileName="Mara Pérez 🦋"
        // {users.username}
        profileUsername="Mara Pérez 🦋"
      />
      <div className="dividerProfile">
        <label htmlFor="">Mis Playlist</label>
        <hr />
        <Link to="/newPlaylist">
          <button className="dividerNewPlaylistDivider">Crear Playlist</button>
        </Link>
      </div>
      <div className="playlistProfileContainer"></div>
      <Navegationbar
        icon1="/style=outline, state=inactive.svg"
        icon2="/style=outline, state=inactive (1).svg"
        icon3="/user.svg"
        icon4="/style=outline, state=inactive (2).svg"
      />
    </div>
  );
}

export default Profile;
