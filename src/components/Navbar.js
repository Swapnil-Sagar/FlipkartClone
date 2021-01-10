import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div class="topnav">
        <img
          className="Navicon"
          src="https://cdn.icon-icons.com/icons2/729/PNG/512/flipkart_icon-icons.com_62718.png"
        />
        <a href="#home">Cart</a>
        <a href="#news">More</a>
        <input className="NavSearch" />
        <a href="#about">User</a>
      </div>
    </div>
  );
}
