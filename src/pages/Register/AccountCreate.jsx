import Header from "../../components/Header/Header";
import InputUser from "../../components/Input/InputUser";
import InputPassword from "../../components/Input/InputPassword";
import './accountCreate.css'

function AccountCreate() {
  return (
    <div className="registerBody">
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
        <form action="">
          <div className="inputMailType">
            <div className="inputDivMail">
              <label>Correo electrónico</label>
              <div className="inputMail">
                <InputUser warning="Deberás poder confirmarlo luego."></InputUser>
              </div>
            </div>
            <div>
              <label>Contraseña</label>
              <div className="inputMail">
                <InputPassword warning="Deberá contener al menos 8 caracteres."></InputPassword>
              </div>
            </div>
            <div className="termsAndConditions">
              <input className="inputCheck" type="checkbox" />
              <p htmlFor="">He leído y acepto los <a href="">Términos</a> y <a href="">Condiciones.</a></p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AccountCreate;
