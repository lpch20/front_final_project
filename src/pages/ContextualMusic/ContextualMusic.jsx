import React from "react";
import MainButton from "../../components/Buttons/MainBtn";
import { Link } from "react-router-dom";
import "./ContextualMusicStyles.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
export const ContextualMusic = () => {
  const [selectedOption, setSelectedOption] = useState("Actividad"); // Establece el valor seleccionado inicial

  const handleChange = (e) => {
    setSelectedOption(e.target.value); // Actualiza el valor seleccionado cuando cambia la opción
  };
  return (
    <>
      <main className="mainContainer">
        <div className="childContainer">
          
         <Header title="Musica Contextual"></Header>
      

          <form className="formLayout">
            
          <h1>¿Cúal es la ocasión?</h1>
            <select id="opciones" className="inputMain">
            <option value="" disabled  selected hidden>Actividad</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>

            
              <h1>¿Cómo te sientes?</h1>
              
              <select id="opciones" className="inputMain">
              <option value="" disabled  selected hidden>Estado de Animo</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>

            
              <h1>¿Cómo esta el dia?</h1>
              <select id="opciones" className="inputMain">
              <option value="" disabled selected hidden>Clima</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
          </form>

          <h1>Selecciona hasta 3 géneros:</h1>
          <div></div>
          <MainButton text="Crear Playlist"></MainButton>
        </div>
      </main>
    </>
  );
};

export default ContextualMusic;
