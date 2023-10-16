import './input.css';
import { useState } from 'react';

function InputPassword(props) {
  const [value, setValue] = useState(''); 
  const [cssClass, setCssClass] = useState('active'); 

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length < 8) {
      setCssClass('error');
    } else {
      setCssClass('inactive');
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        className={cssClass}
        type="password"
      />
      <p className='hint'>{props.warning}</p>
    </div>
  );
}

export default InputPassword;
