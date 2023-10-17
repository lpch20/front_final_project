import React from 'react'
import "./CustomBtnStyle.css";

export const CustomBtn = (props) => {
  return (
    <>
    <button  className='customBtnStyle'   ><img className='logoS' src={props.logo} alt="logo image" /> {props.text}</button>
    
     </>
  )


}

export default CustomBtn
