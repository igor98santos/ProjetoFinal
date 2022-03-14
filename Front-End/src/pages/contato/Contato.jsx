import React, { Component } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import "./Contato.css";

class Contato extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Nome
          </span>
          <input
            type="text"
            class="form-control"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Sobrenome
          </span>
          <input
            type="text"
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
      </>
    );
  }
}
export default Contato;
