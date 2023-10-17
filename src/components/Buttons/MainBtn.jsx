import React from "react";
import "./MainBtnStyle.css";

export const MainBtn = (props) => {
  return (
    <>
      <button className="btnMain">{props.text}</button>
    </>
  );
};

export default MainBtn;
