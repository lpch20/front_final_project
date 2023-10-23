import "./header.css";


function Header(props) {
  return (
    <div>
      <div className="accountCreate"> 
        <img className="arrowImg" src="/icon/Vector.svg" alt="" />


        <div className="accountCreateChildTwo">
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
