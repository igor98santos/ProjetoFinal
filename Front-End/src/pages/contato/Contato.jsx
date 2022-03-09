import React, { Component } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import './Contato.css'

class Contato extends Component{
    render(){
        return(
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
export default Contato;