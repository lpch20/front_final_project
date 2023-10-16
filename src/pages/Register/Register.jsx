import Header from "../../components/Header/Header";
import InputEmail from "../../components/Input/InputEmail";
import './register.css';

function Register() {
  return (
    <div>
      <Header title="Crear Cuenta"></Header>

      <main>
        <div className="mail">
          <h2>¿Cuál es tu correo <br />electronico?</h2>
        </div>

        <div>
            <h4>Correo electrónico</h4>
            <form action="">
                <InputEmail warning="Deberás poder confirmarlo luego."></InputEmail>
            </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
