import React from "react";
import MainButton from "../../components/Buttons/MainBtn";
import { Link } from "react-router-dom";
import "./ContextualMusicStyles.css";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { allActivity, allGender, allMood, allWeather } from "../../../API/cntxMusic_API";
import { render } from "react-dom";
const ContextualMusic = () => {
  const [activity, setActivity] = useState([]);
  const [mood, setMood] = useState([]);
  const [weather, setWeather] = useState([]);
  const [gender, setGender] = useState([]);

  const getActivity = async () => {
    try {
      const result = await allActivity();
      setActivity(result);
    } catch (error) {
      error("Error al obtener las actividades");
    }
  };
  const getMood = async () => {
    try {
      const result = await allMood();
      setMood(result);
    } catch (error) {
      error("Error al obtener los estados de animo");
    }
  };
  const getWeather = async () => {
    try {
      const result = await allWeather();
      setWeather(result);
    } catch (error) {
      error("Error al obtener clima");
    }
  };
  const getGender = async () => {
    try {
      const result = await allGender();
      setGender(result);
    } catch (error) {
      error("Error al obtener los generos");
    }
  };

  useEffect(() => {
    getMood();
    getActivity();
    getWeather();
    getGender();
  }, []);
  console.log(getActivity);

  return (
    <>
      <main className="mainContainer">
        <div className="childContainer">
          <Header title="Musica Contextual"></Header>

          <form className="formLayout">
            <h1>¿Cúal es la ocasión?</h1>
            <select id="opciones" className="inputMain">
              <option value="" disabled selected hidden>
                Actividad
              </option>
              {activity.map((n) => (
                <option value="opcion1">{n.type}</option>
              ))}
            </select>

            <h1>¿Cómo te sientes?</h1>

            <select id="opciones" className="inputMain">
              <option value="" disabled selected hidden>
                Estado de Animo
              </option>
              {mood.map((n) => (
                <option value="opcion1">{n.type}</option>
              ))}
            </select>

            <h1>¿Cómo esta el dia?</h1>
            <select id="opciones" className="inputMain">
              <option value="" disabled selected hidden>
                Clima
              </option>
              {weather.map((n) => (
                <option value="opcion1">{n.type}</option>
              ))}
            </select>
          </form>

          <h1>Selecciona hasta 3 géneros:</h1>
          <div>{gender.map((n) => (
                <div className="genderBox" >{n.type}</div>
              ))}</div>
          <MainButton text="Crear Playlist"></MainButton>
        </div>
      </main>
    </>
  );
};

export default ContextualMusic;
