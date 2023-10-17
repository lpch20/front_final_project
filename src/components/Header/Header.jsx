import './header.css';

function Header(props) {
  return (
    <div>
      <div className='accountCreate'>
        <div>
          <img className='arrowImg' src="/icon/Vector.svg" alt="" />
        </div>
        <div className='accountCreateChildTwo'>
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
