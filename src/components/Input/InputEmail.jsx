import "./input.css";


function InputEmail(props) {
 
  return (
    <div>
      <input
        type="email"
      />
      <p className="hint">{props.warning}</p>
    </div>
  );
}

export default InputEmail;
