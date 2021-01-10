import React, { Component } from "react";
import "./Cards.css";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardState: false,
    };
  }
  render() {
    return (
      <div>
        {!this.state.CardState && (
          <div>
            <div class="row">
              <div class="column">
                {this.state.CardState && (
                  <div class="card" id="1">
                    <img
                      src="https://i.pinimg.com/originals/b0/56/9a/b0569a6d9109de9d0e13a766078ba202.jpg"
                      alt="Avatar"
                      style={{ width: "100%" }}
                    />
                    <h4>
                      <b>Levis</b>
                    </h4>
                    <p>Briefs</p>
                    <p>400rs</p>
                    <p>S</p>
                  </div>
                )}
              </div>

              <div class="column">
                <div class="card" id="2">
                  <img
                    src="https://i.pinimg.com/originals/b0/56/9a/b0569a6d9109de9d0e13a766078ba202.jpg"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div class="container">
                    <h4>
                      <b>HRX</b>
                    </h4>
                    <p>Hoodie</p>
                    <p>L</p>
                  </div>
                </div>
              </div>

              <div class="column">
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
                    <p>Tshirt</p>
                    <p>L</p>
                  </div>
                </div>
              </div>

              <div class="column">
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
                    <p>Running Shoes</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column">
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
                    <p>Casual Shoes</p>
                    <p>M</p>
                  </div>
                </div>
              </div>

              <div class="column">
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
                    <p>Trunks</p>
                    <p>S</p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card" id="7">
                  <img
                    src="https://i.insider.com/5c476ac72bdd7f45cf6b1183?width=700"
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div class="container">
                    <h4>
                      <b>Levis</b>
                    </h4>
                    <p>Jeans</p>
                    <p>M</p>
                  </div>
                </div>
              </div>

              <div class="column">
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
                    <p>Gym Wear</p>
                    <p>L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cards;
