import Header from "../../components/Header/Header";
import InputEmail from "../../components/Input/InputEmail";
import "./register.css";

function Register() {
  return (
    <div className="registerBody">
      <main>
        <div className="header">
          <Header title="Crear Cuenta"></Header>
        </div>
        <div className="mail">
          <h2>
            ¿Cuál es tu correo <br />
            electronico?
          </h2>
        </div>

        <div className="inputMailType">
          <label>Correo electrónico</label>
          <div className="inputMail">
            <form action="">
              <InputEmail warning="Deberás poder confirmarlo luego."></InputEmail>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
