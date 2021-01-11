import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div class="sidenav">
        <p style={{ fontSize: "large" }}>Filters</p>
        <h3>Select Gender</h3>

        <button onClick={() => this.setState({ CardState: true })}>Men</button>
        <button>Women</button>

        <h3>Select Size</h3>
        <input type="radio" id="s" name="gender" value="S" />
        <label for="male">Small</label>
        <input type="radio" id="m" name="gender" value="M" />
        <label for="female">Meduim</label>
        <input type="radio" id="l" name="gender" value="L" />
        <label for="other">Large</label>
      </div>
    );
  }
}

export default Sidebar;
