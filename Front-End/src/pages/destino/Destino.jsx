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
          <h1>Em criação aguarde a proxima entrega</h1>
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}
export default Destino;
