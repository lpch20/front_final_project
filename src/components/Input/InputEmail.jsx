import "./input.css";


function InputEmail(props) {
 
  return (
    <div className="paragraphMail">
      <input
        type="email"
      />
      <p className="hint">{props.warning}</p>
    </div>
  );
}

export default InputEmail;
