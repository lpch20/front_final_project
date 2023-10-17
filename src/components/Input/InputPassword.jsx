import "./input.css";
import { useState } from "react";

function InputPassword(props) {
  const [value, setValue] = useState("");
  const [cssClass, setCssClass] = useState("active");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length < 8) {
      setCssClass("error");
    } else {
      setCssClass("inactive");
    }
  };

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          className={cssClass}
          type="password"
        />
        <img className="eyeImage" style={props.style} src="/icon/eye.svg" alt="" />
      </div>
      <p className="hint">{props.warning}</p>
    </div>
  );
}

export default InputPassword;
