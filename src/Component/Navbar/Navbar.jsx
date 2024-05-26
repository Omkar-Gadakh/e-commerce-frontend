import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" className="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setmenu("Shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Kids");
          }}
          z
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
