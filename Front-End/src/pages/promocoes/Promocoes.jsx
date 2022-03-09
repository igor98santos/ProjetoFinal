import React, { Component } from "react";
/*se caso não redenrizar olhe o style e coloque id */
import "./Promocoes.css";
import NavBar from "../navbar/NavBar";
import Footer from '../footer/Footer'
import img1 from "../../assets/imagens/Viagem dos sonhos/israel.jpg";
import img2 from "../../assets/imagens/Viagem dos sonhos/Rio de janeiro.jpg";
import img3 from "../../assets/imagens/Viagem dos sonhos/italia.jpg";
import img4 from "../../assets/imagens/Viagem dos sonhos/israel.jpg";
import img5 from "../../assets/imagens/cards de preço da home/Englaterra/englaterra 3.jpg";
import img6 from "../../assets/imagens/cards de preço da home/noruega/aurora-borealis-g3b9626256_640.jpg";
import img7 from "../../assets/imagens/Viajem em familia/Disney.jpg";
import img8 from "../../assets/imagens/antes de viagem em familia/cabuiriu.jpg";

class Promocoes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid marketing ">
          <div className="row featurette">
            <div className="col-md-12">
              <h2 className="featurette-heading">
                Viaje dos seus sonhos{" "}
                <span className="text-muted">Somente Aqui</span>
              </h2>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                saepe sint quo in! Molestiae quod quo nam{" "}
              </p>
            </div>
            <div className="col-md-3 ">
              <div className="card" id="Promocoes">
                <img className="card-img-top" src={img1} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Viaje a israel</h5>
                  <p className="card-text">Passagens aereas </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    de R$8.500,00 por R$5.958,00
                  </li>
                  <li className="list-group-item">
                    até 12x no cartão sem juros
                  </li>
                  <li className="list-group-item">Aproveite a oferta</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Comprar
                  </a>
                  <a href="tel:(11)979697722" tel className="card-link">
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 ">
              <div className="card" id="Promocoes">
                <img className="card-img-top" src={img2} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Viaje ao Rio de Janeiro</h5>
                  <p className="card-text">Passagens aereas </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    de R$3.500,00 por R$2.758,00
                  </li>
                  <li className="list-group-item">
                    até 6x no cartão sem juros
                  </li>
                  <li className="list-group-item">Aproveite a oferta</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Comprar
                  </a>
                  <a href="tel:(11)979697722" tel className="card-link">
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="card" id="Promocoes">
                <img className="card-img-top" src={img3} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Viaje a Italia</h5>
                  <p className="card-text">Passagens aereas </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    de R$10.500,00 por R$8.098,00
                  </li>
                  <li className="list-group-item">
                    até 12x no cartão sem juros
                  </li>
                  <li className="list-group-item">Aproveite a oferta</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Comprar
                  </a>
                  <a href="tel:(11)979697722" tel className="card-link">
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" id="Promocoes">
                <img className="card-img-top" src={img4} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Viaje a israel</h5>
                  <p className="card-text">Passagens aereas </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    de R$8.500,00 por R$5.958,00
                  </li>
                  <li className="list-group-item">
                    até 12x no cartão sem juros
                  </li>
                  <li className="list-group-item">Aproveite a oferta</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Comprar
                  </a>
                  <a href="tel:(11)979697722" tel className="card-link">
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Conheça o balneário camboriú
              </h2>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                exercitationem asperiores doloremque aperiam sequi expedita
                repudiandae quam aut, tenetur debitis hic ex ipsa ullam et sed
                nobis quas tempore voluptate?
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src={img8}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              ></img>
              <div className="card-body">
                <h3>De 2.500 por 1.308,00</h3>
                <a href="#" className="card-link">
                  Comprar
                </a>
                <a href="tel:(11)979697722" tel className="card-link">
                  Entrar em Contato
                </a>
              </div>
            </div>
          </div>

          <hr />

          <div className="row featurette">
            <div className="col-md-12">
              <h2 className="featurette-heading">
                Em breve <span className="text-muted">Novas atualizações </span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>

            <div className="container d-flex align-items-center justify-content-center flex-wrap">
              <div className="box">
                <div className="body">
                  <div className="imgContainer">
                    {" "}
                    <img src={img5} alt="" />{" "}
                  </div>
                  <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <h3 className="text-white fs-5">Conheça a Inglaterra</h3>
                      <p className="fs-6 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          de R$8.500,00 por R$5.958,00
                        </li>
                        <li className="list-group-item">
                          até 12x no cartão sem juros
                        </li>
                        <li className="list-group-item">Aproveite a oferta</li>
                      </ul>
                      <div className="card-body">
                        <a href="#" className="card-link">
                          Comprar
                        </a>
                        <a href="tel:(11)979697722" tel className="card-link">
                          Entrar em Contato
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="body">
                  <div className="imgContainer">
                    {" "}
                    <img src={img6} alt="" />{" "}
                  </div>
                  <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <h3 className="text-white fs-5">Noruega</h3>
                      <p className="fs-6 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                      </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          de R$8.500,00 por R$5.958,00
                        </li>
                        <li className="list-group-item">
                          até 12x no cartão sem juros
                        </li>
                        <li className="list-group-item">Aproveite a oferta</li>
                      </ul>
                      <div className="card-body">
                        <a href="#" className="card-link">
                          Comprar
                        </a>
                        <a href="tel:(11)979697722" tel className="card-link">
                          Entrar em Contato
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="body">
                  <div className="imgContainer">
                    {" "}
                    <img src={img7} alt="" />{" "}
                  </div>
                  <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <h3 className="text-white fs-5">Disney</h3>
                      <p className="fs-6 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          de R$8.500,00 por R$5.958,00
                        </li>
                        <li className="list-group-item">
                          até 12x no cartão sem juros
                        </li>
                        <li className="list-group-item">Aproveite a oferta</li>
                      </ul>
                      <div className="card-body">
                        <a href="#" className="card-link">
                          Comprar
                        </a>
                        <a href="tel:(11)979697722" tel className="card-link">
                          Entrar em Contato
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
      <div>
        <Footer/>
      </div>
      </div>

    );
  }
}
export default Promocoes;
