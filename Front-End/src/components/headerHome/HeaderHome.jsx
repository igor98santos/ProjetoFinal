import React, { Component } from "react";
import { Link } from "react-router-dom";
import './HeaderHome.css';
import imageHome1 from '../../assets/imagens/Home/homen.jpg';
import imageHome2 from '../../assets/imagens/Home/É essa que vai para home.jpg';
import imageHome3 from '../../assets/imagens/Home/É essa que vai para home.jpg';


class HeaderHome extends Component{
    render(){
        return(
            <main>
            <div
              id="myCarousel"
              classNameName="carousel slide"
              data-bs-ride="carousel"
            >
              <div classNameName="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={imageHome1} width="100%" alt="" /> 
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#777" />
                  </svg>
  
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Viaje com Conforto</h1>
                      <p>
                        Some representative placeholder content for the first
                        slide of the carousel.
                      </p>
                      <p>
                        <Link  to="/Destinos"  className="btn btn-lg btn-primary">
                        <a>
                          Veja Mais Em Destinos
                        </a>
                          </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imageHome2} width="100%" alt="" />
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#777" />
                  </svg>
  
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Veja Nossos Contatos</h1>
                      <p>
                        Some representative placeholder content for the second
                        slide of the carousel.
                      </p>
                      <p>
                        <Link to="/Contato" className="btn btn-lg btn-primary" >
                        <a >
                          Veja Mais Em Contatos
                        </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                 <img src={imageHome3} width="100%" alt="" />
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#777" />
                  </svg>
  
                  <div className="container">
                    <div className="carousel-caption text-end">
                      <h1>Olhe as Promoções</h1>
                      <p>
                        Some representative placeholder content for the third
                        slide of this carousel.
                      </p>
                      <p>
                        <Link  to="/Promocoes"  className="btn btn-lg btn-primary">
                        <a>Veja mais em Promoções</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </main>
        );
    }
}
export default HeaderHome;