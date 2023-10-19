import Header from "../../components/Header/Header";
import InputPassword from "../../components/Input/InputPassword";
import InputUser from "../../components/Input/InputUser";
import MainBtn from "../../components/Buttons/MainBtn";

function Login() {
  const inputPasswordStyles = {
    position: "absolute",
    width: "24px",
    height: "24px",
    right: "10px",
    top: "25px",
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
            <div>
              <MainBtn></MainBtn>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
