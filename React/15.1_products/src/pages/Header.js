import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/products">
        Products
      </Link>
    </div>
  );
}

export default Header;
