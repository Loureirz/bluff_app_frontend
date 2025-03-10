import logo from "../../images/bit-logo.png";
 
 function Header() {
   return (
     <header className="header">
       <img className="header__logo" src={logo} alt="Bluff Logo" />
     </header>
   );
 }
 
 export default Header;