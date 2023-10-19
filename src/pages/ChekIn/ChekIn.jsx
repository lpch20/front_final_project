import "./ChekIn.css";
import MainButton from "../../components/Buttons/MainBtn";  
import CustomBtn from "../../components/Buttons/CustomBtn";
import { Link } from 'react-router-dom';

export const ChekIn = () => {
  return (
    <>
      <main className="container" >
        <div className="flexContainer">
       
        
          <img  src="/logo-large.svg" alt="" className="logoImage" />
          
        
        
          <h2 className="lettersMid">Música a medida.</h2>
        </div> 
        
 <section className="logInSection">
          <Link to={'/register'}>
          <MainButton  text= 'Registrarse Gratis'> </MainButton></Link>
          <CustomBtn logo ="google-logo.svg" text='Continuar con google'></CustomBtn>
          <CustomBtn logo ="apple-logo.svg" text='Continuar con Apple'></CustomBtn>
          
          

         <Link to={"/account-create"}>
        <button className="logIn">Iniciar Sesion</button></Link> 
        </section>  
        
     </main>
    </>
  );
};
export default ChekIn;
