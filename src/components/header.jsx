import Logo from "../assets/react_logo.svg";
import "../styles/header.css";
function Header(props) {
  return (
    <header>
      <img src={Logo} className="logo" alt="react logo" />
      <h1 className="header-text">{props.headerText}</h1>
    </header>
  );
}

export default Header;
