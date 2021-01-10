import React, { Component } from "react";
import "./Cards.css";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardStateM: false,
      CardStateF: false,
    };
  }
  render() {
    return (
      <div>
        <div class="sidenav">
          <h1>Filters</h1>
          <h3>Select Gender</h3>

          <button
            onClick={() =>
              this.setState({ CardStateM: true, CardStateF: false })
            }
          >
            Men
          </button>
          <button
            onClick={() =>
              this.setState({ CardStateF: true, CardStateM: false })
            }
          >
            Women
          </button>
          <button
            onClick={() =>
              this.setState({ CardStateF: false, CardStateM: false })
            }
          >
            Show All
          </button>

          <h3>Select Size</h3>
          <input type="radio" id="s" name="gender" value="S" />
          <label for="male">Small</label>
          <input type="radio" id="m" name="gender" value="M" />
          <label for="female">Meduim</label>
          <input type="radio" id="l" name="gender" value="L" />
          <label for="other">Large</label>
        </div>

        <div className="container">
          <div class="row">
            <div class="column">
              {!this.state.CardStateM && (
                <div class="card" id="1">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/levis-1588360174.jpg?crop=0.503xw:1.00xh;0,0&resize=640:*"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <h4>
                    <b>Levis</b>
                  </h4>
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    <p style={{ margin: "2px" }}>Briefs</p>
                    <p style={{ margin: "2px" }}>400rs</p>
                    <p style={{ margin: "2px" }}>Female</p>
                    <p style={{ margin: "2px" }}>S</p>
                  </div>
                </div>
              )}
            </div>

            <div class="column">
              {!this.state.CardStateM && (
                <div class="card" id="2">
                  <img
                    src="https://i.pinimg.com/originals/b0/56/9a/b0569a6d9109de9d0e13a766078ba202.jpg"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <h4>
                    <b>HRX</b>
                  </h4>
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    <p style={{ margin: "2px" }}>Hoodie</p>
                    <p style={{ margin: "2px" }}>1400rs</p>
                    <p style={{ margin: "2px" }}>Female</p>
                    <p style={{ margin: "2px" }}>M</p>
                  </div>
                </div>
              )}
            </div>

            <div class="column">
              {!this.state.CardStateF && (
                <div class="card" id="3">
                  <img
                    src="https://i.pinimg.com/originals/b0/56/9a/b0569a6d9109de9d0e13a766078ba202.jpg"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div class="container">
                    <h4>
                      <b>HRX</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Hoodie</p>
                      <p style={{ margin: "2px" }}>1400rs</p>
                      <p style={{ margin: "2px" }}>Male</p>
                      <p style={{ margin: "2px" }}>M</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div class="column">
              {!this.state.CardStateF && (
                <div class="card" id="4">
                  <img
                    src="https://i.pinimg.com/originals/b0/56/9a/b0569a6d9109de9d0e13a766078ba202.jpg"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div class="container">
                    <h4>
                      <b>Nike</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Hoodie</p>
                      <p style={{ margin: "2px" }}>1400rs</p>
                      <p style={{ margin: "2px" }}>Male</p>
                      <p style={{ margin: "2px" }}>M</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="row">
            <div class="column">
              {!this.state.CardStateF && (
                <div class="card" id="5">
                  <img
                    src="https://i.insider.com/5c476ac72bdd7f45cf6b1183?width=700"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div class="container">
                    <h4>
                      <b>Nike</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Hoodie</p>
                      <p style={{ margin: "2px" }}>1400rs</p>
                      <p style={{ margin: "2px" }}>Male</p>
                      <p style={{ margin: "2px" }}>M</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div class="column">
              {!this.state.CardStateF && (
                <div class="card" id="6">
                  <img
                    src="https://i.insider.com/5c476ac72bdd7f45cf6b1183?width=700"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div class="container">
                    <h4>
                      <b>Adidas</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Hoodie</p>
                      <p style={{ margin: "2px" }}>1400rs</p>
                      <p style={{ margin: "2px" }}>Male</p>
                      <p style={{ margin: "2px" }}>M</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div class="column">
              {!this.state.CardStateM && (
                <div class="card" id="7">
                  <img
                    src="https://i.insider.com/5c476ac72bdd7f45cf6b1183?width=700"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <h4>
                    <b>Levis</b>
                  </h4>
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    <p style={{ margin: "2px" }}>Hoodie</p>
                    <p style={{ margin: "2px" }}>1400rs</p>
                    <p style={{ margin: "2px" }}>Female</p>
                    <p style={{ margin: "2px" }}>M</p>
                  </div>
                </div>
              )}
            </div>

            <div class="column">
              {!this.state.CardStateF && (
                <div class="card" id="8">
                  <img
                    src="https://i.insider.com/5c476ac72bdd7f45cf6b1183?width=700"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div class="container">
                    <h4>
                      <b>Puma</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Hoodie</p>
                      <p style={{ margin: "2px" }}>1400rs</p>
                      <p style={{ margin: "2px" }}>Male</p>
                      <p style={{ margin: "2px" }}>M</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
