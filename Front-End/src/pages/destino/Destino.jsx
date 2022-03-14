import React from "react";
import { Component } from "react/cjs/react.development";
import "./Destino.css";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
class Destino extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div class="container-">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Digite a data de ida
            </span>
            <input
              type="date"
              class="form-control"
              aria-describedby="basic-addon1"
            />
          </div>
        
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              Email
            </span>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">
              Senha
            </span>
            <input
              type="password"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
        <div>
          <hr />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </>
    );
  }
}
export default Destino;
