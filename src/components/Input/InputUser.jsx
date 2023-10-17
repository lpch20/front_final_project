import "./input.css";
import { useState } from "react";

function InputUser(props) {
  const [value, setValue] = useState("");
  const [cssClass, setCssClass] = useState("active");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    //LOGICA CON LA BASE DE DATOS, SI EL USUARIO NO ESTA EN LA BASE DE DATOS, ERROR, SI ESTA EN BASE DE DATOS, GREEN.
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        className={cssClass}
        type="text"
      />
    </div>
  );
}

export default InputUser;
