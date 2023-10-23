import React from "react";
import "./MainBtnStyle.css";

export const MainBtn = (props) => {

  return (
    <>

      <button type={props.type} className={`btnMain ${props.className} `}>
        {props.text}
      </button>

    </>
  );
};

export default MainBtn;
