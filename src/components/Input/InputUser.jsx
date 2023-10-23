import "./input.css";
import { useState } from "react";

function InputUser(props) {
  const [value, setValue] = useState("");
  const [cssClass, setCssClass] = useState("active");
  const [intoInput, setIntoInput] = useState("inactive");

  // const handleChange = (e) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);

  //   //LOGICA CON LA BASE DE DATOS, SI EL USUARIO NO ESTA EN LA BASE DE DATOS, ERROR, SI ESTA EN BASE DE DATOS, GREEN.
  // };

  const handleFocus = () => {
    setIntoInput(true); 
  };

  const handleBlur = (e) => {
    setIntoInput(false); 
    if (props.onBlur) {
      props.onBlur(e);
    }
  };



  return (
    <div>
      <input
        style={props.style}
        value={props.value}
        onChange={props.onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={`inputStyle ${intoInput ? "active" : "inactive"}`}
        type={props.type}
      />
    </div>
  );
}

export default InputUser;
