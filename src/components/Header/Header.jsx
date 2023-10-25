import { Link } from "react-router-dom";
import "./header.css";


function Header(props) {
  return (
    <div>

      <div className="accountCreate"> <Link to={-1}>
        <img className="arrowImg" src="/icon/Vector.svg" alt="" /></Link>

        <div className="accountCreateChildTwo">
         
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
