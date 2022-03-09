import React, { Component } from "react";
import "./Home.css";
import NavBar from "../navbar/NavBar.jsx";
import Footer from '../../pages/footer/Footer'
import HeaderHome from '../../components/headerHome/HeaderHome'
import CardsHome from "../../components/cards/CardsHome1";

class Home extends Component {
  render() {
    return (
   <>
        <NavBar />
        <HeaderHome/>
        <CardsHome/>
        <Footer/>
   </>
     
    );
  }
}
export default Home;
