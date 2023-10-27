import React, { useState } from 'react';

function Cos() {
  const [inputValue, setInputValue] = useState(''); // Estado para almacenar el valor del campo de entrada

  const handleButtonClick = () => {
    const buttonText = 'Texto del botón'; // Reemplaza con el texto que desees
    setInputValue(buttonText);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Haz clic para obtener el valor</button>
      <input
        type="text"
        value={inputValue}
        placeholder="Valor del botón"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Cos;