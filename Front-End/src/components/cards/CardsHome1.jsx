import React, { Component } from "react";
import "./CardsHome1.css";
import { Link } from "react-router-dom";
import imageHome1 from "../../assets/imagens/cards de preço da home/israel/Israel 3.jpg";
import imageHome2 from "../../assets/imagens/cards de preço da home/Englaterra/palace-gf12d11303_640.jpg";
import imageHome3 from "../../assets/imagens/cards de preço da home/italia/canal-g31aaf8247_640.jpg";
import imageHome4 from "../../assets/imagens/cards de preço da home/noruega/aurora-borealis-g3b9626256_640.jpg";
import imageHome5 from "../../assets/imagens/cards de preço da home/Primerios cards/airport-g05b6703fa_1280.jpg";
class CardsHome extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 ">
              <div className="card" id="CardsHome1">
                <img
                  className="card-img-top"
                  src={imageHome1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Israel</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="Destinos.html" className="btn btn-primary">
                    Veja mais
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card" id="CardsHome1">
                <img
                  className="card-img-top"
                  src={imageHome2}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Inglaterra</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="Destinos.html" className="btn btn-primary">
                    Veja Mais
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="card" id="CardsHome1">
                <img
                  className="card-img-top"
                  src={imageHome3}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Italia</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="Destinos.html" className="btn btn-primary">
                    Veja Mais
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="card" id="CardsHome1">
                <img
                  className="card-img-top"
                  src={imageHome4}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Noruega</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="Destinos.html" className="btn btn-primary">
                    Veja Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <br />
          <br />
          <br />
        </div>
        <div className="container-fluid">
          <div className="card mb-3">
            <img
              className="card-img-top"
              src={imageHome5}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Objetivo Da pectros</h5>
              <p className="card-text">
                Nós da agência de Viagens pectros temos como pauta principal o
                seu conforto e sua economia, aqui você vai encontrar as viagens
                com maior custo beneficio e conforto{" "}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <br />
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-dark">
                  <div className="card-body">
                    <i className="fa fa-search fa-5x float-right"></i>
                    <h3 className="card-title">Preços impediveis</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
                <div className="card-back bg-white">
                  <div className="card-body">
                    <h3 className="card-title">Veja Mais em Promoções</h3>
                    <p className="card-text">
                      Suprise this one has more more more more content on the
                      back!
                    </p>
                    <a
                      href="Promocoes.html"
                      className="btn btn-outline-secondary"
                    >
                      Cliqe aqui
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-info">
                  <div className="card-body">
                    <i className="fa fa-search-plus fa-5x float-right"></i>
                    <h3 className="card-title">Viaje dos seus sonhos</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body">
                    <h3 className="card-title">
                      Somente aqui na Agência/pectros
                    </h3>
                    <p className="card-text">
                      Suprise this one has content on the back!
                    </p>
                    <Link to="/Destino" className="btn btn-outline-secondary">
                      <a> Cliqe Aqui</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-primary">
                  <div className="card-body">
                    <i className="fa fa-arrow-circle-right fa-5x float-right"></i>
                    <h3 className="card-title">Entre em Contato</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content. This one is a little because it has
                      more text!
                    </p>
                  </div>
                </div>
                <div className="card-back bg-white">
                  <div className="card-body text-primary">
                    <h3 className="card-title">Acesseo a aba de Contatos</h3>
                    <p className="card-text">
                      Suprise this one has content on the back!
                    </p>

                    <Link to="/Contato" className="btn btn-outline-primary">
                      <a>Clique Aqui</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default CardsHome;
