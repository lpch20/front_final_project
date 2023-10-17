import "./ChekIn.css";
import MainButton from "../../components/Buttons/MainBtn";  
import CustomBtn from "../../components/Buttons/CustomBtn";



export const ChekIn = () => {
  return (
    <>
      <main className="container" >
        <div className="flexContainer">
        
        
          <img  src="/logo-large.svg" alt="" className="logoImage" />
          
        
        
          <h2 className="lettersMid">Música a medida.</h2>
        </div> 
        
 <section className="logInSection">
          <MainButton text= 'Registrarse Gratis'> </MainButton>
          <CustomBtn logo ="google-logo.svg" text='Continuar con google'></CustomBtn>
          <CustomBtn logo ="apple-logo.svg" text='Continuar con Apple'></CustomBtn>
          
          
             
        <button className="logIn">Iniciar Sesion</button>
        </section>  
        
     </main>
    </>
  );
};
export default ChekIn;
