import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import InputEmail from "../../components/Input/InputEmail";
import MainBtn from "../../components/Buttons/MainBtn";
import "./register.css";
import { useState } from "react";
import { emailValidator } from "../../../API/emailValidator";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const handleChangeMail = (e) => {
    setEmail(e.target.value);
    if (event.target.value.length === 0) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleSubmit = async (e) => {
    e.prevent.default();
    const emailValue = { email: email };

    try {
      const result = await emailValidator(emailValue);
      console.log(result);
      navigate("/account-create", { replace: true });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="registerBody">
      <header>
        <div>
          <Header title="Crear Cuenta"></Header>
        </div>
      </header>
      <main>
        <div className="mail">
          <h2>
            ¿Cuál es tu correo <br />
            electronico?
          </h2>
        </div>

        <div className="inputMailType">
          <label>Correo electrónico</label>
          <div className="inputMail">
            <form onSubmit={handleSubmit}>
              <InputEmail
                onChange={handleChangeMail}
                warning="Deberás poder confirmarlo luego."
              ></InputEmail>

              {errorEmail && (
                <p style={{ color: "red" }}>Este campo es obligatorio</p>
              )}
              <MainBtn></MainBtn>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
