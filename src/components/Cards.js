import React, { Component } from "react";
import "./Cards.css";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardStateM: false,
      CardStateF: false,
      CardstateSm: false,
      CardStateMe: false,
      CardStateLg: false,
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
          <input
            type="radio"
            id="s"
            name="gender"
            value="S"
            onClick={() =>
              this.setState({
                CardStateSm: true,
                CardStateMe: false,
                CardStateLg: false,
              })
            }
          />
          <label for="male">Small</label>
          <input
            type="radio"
            id="m"
            name="gender"
            value="M"
            onClick={() =>
              this.setState({
                CardStateSm: false,
                CardStateMe: true,
                CardStateLg: false,
              })
            }
          />
          <label for="female">Meduim</label>
          <input
            type="radio"
            id="l"
            name="gender"
            value="L"
            onClick={() =>
              this.setState({
                CardStateSm: false,
                CardStateMe: false,
                CardStateLg: true,
              })
            }
          />
          <label for="other">Large</label>
          <a target="_blank" href="https://swapnilsagar.netlify.app/">
            <h4>Made By Swapnil Sagar</h4>
          </a>
        </div>

        <div style={{ marginLeft: "300px" }}>
          <div class="row">
            <div class="column">
              {!this.state.CardStateM &&
                !this.state.CardStateMe &&
                !this.state.CardStateLg && (
                  <div class="card" id="1">
                    <img
                      src="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/980CEDB365AE4213B2319BD6F006B76A/203884747_9212_980CEDB365AE4213B2319BD6F006B76A.jpg"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <h4>
                      <b>Levis</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Jacket</p>
                      <p style={{ margin: "2px" }}>800rs</p>
                      <p style={{ margin: "2px" }}>Female</p>
                      <p style={{ margin: "2px" }}>S</p>
                    </div>
                  </div>
                )}
            </div>

            <div class="column">
              {!this.state.CardStateM &&
                !this.state.CardStateSm &&
                !this.state.CardStateLg && (
                  <div class="card" id="2">
                    <img
                      src="https://i.pinimg.com/originals/78/08/28/780828c93aefa010c0abd23cca5051e5.png"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <h4>
                      <b>HRX</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Tshirt</p>
                      <p style={{ margin: "2px" }}>300rs</p>
                      <p style={{ margin: "2px" }}>Female</p>
                      <p style={{ margin: "2px" }}>M</p>
                    </div>
                  </div>
                )}
            </div>

            <div class="column">
              {!this.state.CardStateF &&
                !this.state.CardStateSm &&
                !this.state.CardStateMe && (
                  <div class="card" id="3">
                    <img
                      src="https://hrxbrand.com/public/img/4NWzLUo.png"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <div class="container">
                      <h4>
                        <b>HRX</b>
                      </h4>
                      <div
                        style={{ justifyContent: "center", display: "flex" }}
                      >
                        <p style={{ margin: "2px" }}>Tshirt</p>
                        <p style={{ margin: "2px" }}>550rs</p>
                        <p style={{ margin: "2px" }}>Male</p>
                        <p style={{ margin: "2px" }}>L</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            <div class="column">
              {!this.state.CardStateF &&
                !this.state.CardStateSm &&
                !this.state.CardStateLg && (
                  <div class="card" id="4">
                    <img
                      src="https://wi-images.condecdn.net/image/dY9OKLRLpXZ/crop/2040/f/wired-nike.jpg"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <div class="container">
                      <h4>
                        <b>Nike</b>
                      </h4>
                      <div
                        style={{ justifyContent: "center", display: "flex" }}
                      >
                        <p style={{ margin: "2px" }}>Shoes</p>
                        <p style={{ margin: "2px" }}>2400rs</p>
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
              {!this.state.CardStateF &&
                !this.state.CardStateMe &&
                !this.state.CardStateLg && (
                  <div class="card" id="5">
                    <img
                      src="https://static.nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/2170a0e7-0185-468b-9a27-bba0cbea908e/nike-just-do-it.jpg"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <div class="container">
                      <h4>
                        <b>Nike</b>
                      </h4>
                      <div
                        style={{ justifyContent: "center", display: "flex" }}
                      >
                        <p style={{ margin: "2px" }}>Casual Shoes</p>
                        <p style={{ margin: "2px" }}>1900rs</p>
                        <p style={{ margin: "2px" }}>Male</p>
                        <p style={{ margin: "2px" }}>S</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            <div class="column">
              {!this.state.CardStateF &&
                !this.state.CardStateSm &&
                !this.state.CardStateMe && (
                  <div class="card" id="6">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/81R0vFcZR6L._UY550_.jpg"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <div class="container">
                      <h4>
                        <b>Adidas</b>
                      </h4>
                      <div
                        style={{ justifyContent: "center", display: "flex" }}
                      >
                        <p style={{ margin: "2px" }}>Pullover</p>
                        <p style={{ margin: "2px" }}>5400rs</p>
                        <p style={{ margin: "2px" }}>Male</p>
                        <p style={{ margin: "2px" }}>L</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            <div class="column">
              {!this.state.CardStateM &&
                !this.state.CardStateSm &&
                !this.state.CardStateLg && (
                  <div class="card" id="7">
                    <img
                      src="https://5.imimg.com/data5/QC/IW/EB/IOS-36216371/product-jpeg-500x500.png"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <h4>
                      <b>Levis</b>
                    </h4>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: "2px" }}>Jacket</p>
                      <p style={{ margin: "2px" }}>3400rs</p>
                      <p style={{ margin: "2px" }}>Female</p>
                      <p style={{ margin: "2px" }}>M</p>
                    </div>
                  </div>
                )}
            </div>

            <div class="column">
              {!this.state.CardStateF &&
                !this.state.CardStateSm &&
                !this.state.CardStateLg && (
                  <div class="card" id="8">
                    <img
                      src="https://m.media-amazon.com/images/I/81S0PqaM8tL._AC_UL1500_.jpg"
                      alt="Avatar"
                      style={{ width: "100%", height: "300px" }}
                    />
                    <div class="container">
                      <h4>
                        <b>Puma</b>
                      </h4>
                      <div
                        style={{ justifyContent: "center", display: "flex" }}
                      >
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
