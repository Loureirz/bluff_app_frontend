import logo from "../../images/bit-logo.png";
import Navigation from "../Navigation/Navigation";
 
 function Header() {
   return (
     <header className="header">
       <img className="header__logo" src={logo} alt="Bluff Logo" />
       <Navigation />
     </header>
   );
 }
 
 export default Header;