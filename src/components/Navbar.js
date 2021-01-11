import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div class="topnav">
        <img
          className="Navicon"
          src="https://static.wixstatic.com/media/c7de0c_4e9f90a28ec8474bbe21d0c8ad56f292~mv2.png/v1/fill/w_600%2Ch_226%2Cal_c%2Cq_90/file.jpg"
        />
        <a href="#home">Cart</a>
        <a href="#news">More</a>
        <input
          className="NavSearch"
          placeholder="Search for producsts, brands and more.."
        />
        <img
          className="searchicon"
          src="https://www.clipartmax.com/png/middle/15-150759_search-icon-search-icon-png-blue.png"
        />

        <a href="#about">User</a>

        {/* <button className="loginbtn">Login</button> */}
      </div>
    </div>
  );
}
