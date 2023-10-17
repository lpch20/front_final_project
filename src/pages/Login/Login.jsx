import Header from "../../components/Header/Header";
import InputPassword from "../../components/Input/InputPassword";
import InputUser from "../../components/Input/InputUser";

function Login() {
  const inputPasswordStyles = {
    position: "absolute",
    width: "24px",
    height: "24px",
    left: "310px",
    top: "273px",
  }
  
  return (
    <div className="registerBody">
      <main>
        <div>
          <Header title="Iniciar Sesion"></Header>
        </div>
        <form action="">
          <div className="inputMailType">
            <div className="inputDivMail">
              <label>Nombre de Usuario o E-mail</label>
              <div className="inputMail">
                <InputUser warning="Deberás poder confirmarlo luego."></InputUser>
              </div>
            </div>
            <div>
              <label>Contraseña:</label>
              <div className="inputMail">
                <InputPassword style={inputPasswordStyles}></InputPassword>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
