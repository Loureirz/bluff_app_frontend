import logo from "../../images/bit-logo.png";
import Navigation from "../Navigation/Navigation";
 
 function Header() {
   return (
     <header className="header">
      <div className="header__container">
       <img className="header__logo" src={logo} alt="Bluff Logo" />
       <Navigation />
       </div>
     </header>
   );
 }
 
 export default Header;