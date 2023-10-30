import React from "react";
import MainButton from "../../components/Buttons/MainBtn";
import { Link } from "react-router-dom";
import "./ContextualMusicStyles.css";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import {
  allActivity,
  allGender,
  allMood,
  allWeather,
  contextualMusic,
} from "../../../API/cntxMusic_API";

const ContextualMusic = () => {
  const [activity, setActivity] = useState([]);
  const [mood, setMood] = useState([]);
  const [weather, setWeather] = useState([]);
  const [gender, setGender] = useState([]);
  const [idActivity, setIdActivity] = useState("");
  const [idMood, setIdMood] = useState("");
  const [idGender, setIdGender] = useState([]);
  const [idWeather, setIdWeather] = useState("");


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
      setGender(
        result.map((gender) => {
          return { ...gender, status: false };
        })
      );
    } catch (error) {
      error("Error al obtener los generos");
    }
  };

  const inputPasswordStyles = {
    backgroundColor: "black",
  };

  const toggleGender = (index) => {
  
    const newState = [...gender];
    console.log(newState);
    const currentSatus = gender[index].status;
    if (!currentSatus) {
      const activeCount = gender.filter((c) => c.status).length;
  
      if (activeCount < 3) {
        newState[index].status = !currentSatus;
        inputPasswordStyles;
      } else {
        alert("selecciones maximo 3");
      }
    } else {
      newState[index].status = !currentSatus;
    
    }
    const selectedGender = gender.filter((c)=> {
      return c.status == true
    }).map(({id_gender})=> id_gender)
    setIdGender(selectedGender)
    setGender(newState);
  };

  const token  = localStorage.getItem('token')

  const handleActivity = (e) => {
    setIdActivity(e.target.value);
  };

  const handleMood = (e) => {
    setIdMood(e.target.value);
  };

  const handleWeather = (e) => {
    setIdWeather(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataToSend = {
      mood: +idMood,
      weather: +idWeather,
      activity: +idActivity,
      gender: idGender,
    };

    console.log(dataToSend)

    try  {
      await contextualMusic(dataToSend, token)

    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    getMood();
    getActivity();
    getWeather();
    getGender();
  }, []);

  console.log(gender);

  return (
    <>
      <main className="mainContainer">
        <div className="childContainer">
          <Header title="Musica Contextual"></Header>

          <form onSubmit={handleSubmit} className="formLayout">
            <h1>¿Cúal es la ocasión?</h1>
            <select onChange={handleActivity} id="opciones" className="inputMain">
              <option value="" disabled selected hidden>
                Actividad
              </option>
              {activity.map((n) => (
                <option  key={n.id_activity} value={n.id_activity}>
                  {n.type}
                </option>
              ))}
              {console.log(activity.id_activity)}
            </select>

            <h1>¿Cómo te sientes?</h1>

            <select onChange={handleMood} id="opciones" className="inputMain">
              <option value="" disabled selected hidden>
                Estado de Animo
              </option>
              {mood.map((n) => (
                <option key={n.id_mood} value={n.id_mood}>
                  {n.type}
                </option>
                
              ))}
            </select>

            <h1>¿Cómo esta el dia?</h1>
            <select onChange={handleWeather} id="opciones" className="inputMain">
              <option value="" disabled selected hidden>
                Clima
              </option>
              {weather.map((n) => (
                <option key={n.id_weather} value={n.id_weather}>
                  {n.type}
                </option>
              ))}
            </select>
            <h1>Selecciona hasta 3 géneros:</h1>

            <div className="containGender">
              {gender.map((n, i) => (
                <div key={n.id_gender}>
                  <label className="genderBox">
                    <input
                      className="checkClass"
                      onChange={() => toggleGender(i)}
                      type="checkbox"
                      name={n.type}
                      id={n.id_gender}
                      checked={n.status}
                      value={n.id_gender}
                    />
                    <span>{n.type}</span>
                  </label>
                </div>
              ))}
            </div>
            <MainButton type="submit" text="Crear Playlist"></MainButton>
          </form>
        </div>
      </main>
    </>
  );
};

export default ContextualMusic;
