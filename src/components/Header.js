import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  let [Toggle, SetToggle] = useState(false);
  const { user } = useContext(UserContext);
  const CartItems = useSelector((Store) => Store.cart.items);
  console.log(CartItems);
  return (
    <div className="flex justify-between shadow-2xl items-center w-[92%] mx-auto">
      <a href="/">
        <img
          className="size-24 p-2 rounded-full "
          alt="logo"
          src="https://static.vecteezy.com/system/resources/previews/009/022/752/non_2x/sid-logo-sid-letter-sid-letter-logo-design-initials-sid-logo-linked-with-circle-and-uppercase-monogram-logo-sid-typography-for-technology-business-and-real-estate-brand-vector.jpg"
        ></img>{" "}
      </a>
      <div className="">
        <ul className="flex gap-5 py-8 text-white">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/instamart" className="">
              Instamart
            </Link>
          </li>
          <li>
            <Link to="/cart">Cart- {CartItems.length}</Link>
          </li>
        </ul>
      </div>
      {user.name}
      {Toggle ? (
        <button className="pr-5 text-white" onClick={() => SetToggle(false)}>
          LoggedIn
        </button>
      ) : (
        <button className="pr-5 text-white " onClick={() => SetToggle(true)}>
          LogOut
        </button>
      )}
    </div>
  );
};
export default Header;
