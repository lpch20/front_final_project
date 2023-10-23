import Header from "../../components/Header/Header";
import InputUser from "../../components/Input/InputUser";
import InputPassword from "../../components/Input/InputPassword";
import "./accountCreate.css";
import MainBtn from "../../components/Buttons/MainBtn";
import { useState } from "react";
import { userData, usernameVerify } from "../../../API/userData_API";
import { useNavigate } from "react-router-dom";

function AccountCreate() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [userInvalid, setUserInvalid] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleUser = async (e) => {
    const value = e.target.value;

    setUser(value);
    if (value.trim().length === 0 || !isValidUser(value)) {
      setUserError(true);
    } else {
      setUserError(false);
    }
  };

  const verifyUser = async () => {
    const validUser = user;
    console.log("Verifying user");
    try {
      await usernameVerify(validUser);

      setUserInvalid(false);
      setUserMessage("Usuario disponible.");
    } catch (error) {
      setUserInvalid(true);
      setUserMessage("El usuario ya existe.");
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.trim().length === 0 || !isValidPassword(value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const isValidUser = (user) => {
    return /^.{8,}$/.test(user);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = sessionStorage.getItem("mail");
    const dataToSend = { username: user, password: password, email: email };

    if (
      userInvalid ||
      userError ||
      email.trim() === "" ||
      passwordError ||
      password.trim() === ""
    ) {
      alert("complete correctamente los campos");
    } else {
      try {
        await userData(dataToSend);
        navigate("/login");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <div className="accountCreateContainer">
      <main>
        <div>
          <Header title="Crear Cuenta"></Header>
        </div>
        <div className="mail">
          <h2>
            Ingresa un nombre de <br />
            usuario y contraseña.
          </h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="inputMailType">
            <div className="inputDivMail">
              <label>Nombre de Usuario</label>
              <div className="inputMail">
                {userInvalid === true ? 
                <InputUser
                style={ { border: "2px solid #ea0f0f"}}
                  value={user}
                  onChange={handleUser}
                  onBlur={verifyUser}
                  warning="Deberás poder confirmarlo luego."
                ></InputUser>
                  : <InputUser
                    value={user}
                    onChange={handleUser}
                    onBlur={verifyUser}
                    warning="Deberás poder confirmarlo luego."
                  ></InputUser> }
              </div>
              {userMessage && (
                <p style={{ color: userInvalid ? "red" : "green" }}>
                  {userMessage}
                </p>
              )}
  
            </div>
            <div>
              <label>Contraseña</label>
              <div className="inputMail">
                <InputPassword
                  value={password}
                  onChange={handlePassword}
                  warning="Deberá contener al menos 8 caracteres."
                ></InputPassword>
              </div>
            </div>
            <div className="termsAndConditions">
              <input className="inputCheck" type="checkbox" />
              <p htmlFor="">
                He leído y acepto los <a href="">Términos</a> y{" "}
                <a href="">Condiciones.</a>
              </p>
            </div>
          </div>

          <MainBtn className="" type="submit" text="Continuar" />

        </form>
      </main>
    </div>
  );
}

export default AccountCreate;
