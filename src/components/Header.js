import {useState} from "react";
const Header = () => {
  let[Toggle,SetToggle]=useState(false);
  
   return <div className="navbar">
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://static.vecteezy.com/system/resources/previews/009/022/752/non_2x/sid-logo-sid-letter-sid-letter-logo-design-initials-sid-logo-linked-with-circle-and-uppercase-monogram-logo-sid-typography-for-technology-business-and-real-estate-brand-vector.jpg"
        ></img>{" "}
      </a>
      <div className="listitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
      {Toggle?(
      <button className="login"onClick={()=>SetToggle(false)}>LoggedIn</button>
      ):(
      <button className="logout"onClick={()=>SetToggle(true)}>LogOut</button>
      )}
    </div>
    
};
export default Header;  