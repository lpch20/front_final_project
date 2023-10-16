import Header from "../../components/Header/Header"
import InputPassword from "../../components/Input/InputPassword"
import InputUser from "../../components/Input/InputUser"


function Login() {
 


  return (
    <div>
        <Header title="Crear Cuenta"></Header>
        <main>
        <div className="mail">
          <h2>Ingresa un nomre de <br />usuario y contraseña.</h2>
        </div>

        <div>
            <label htmlFor="">Nombre de Usuario</label>
            <form action="">
                <InputUser></InputUser>
            </form>
            <label htmlFor="">Contraseña</label>
            <form action="">
                <InputPassword warning="Deberá contener al menos 8 caracteres."></InputPassword>
            </form>
        </div>
      </main>
    </div>
  )
}

export default Login