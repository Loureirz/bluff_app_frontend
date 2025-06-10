import { Link } from "react-router-dom";
import logo from "../../images/bit-logo.png";
import Navigation from "../Navigation/Navigation";
 
 function Header() {
   return (
     <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Bluff Logo" />
        </Link>
       <Navigation />
       </div>
     </header>
   );
 }
 
 export default Header;