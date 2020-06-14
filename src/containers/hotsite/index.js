import React from "react";
import Helmet from "react-helmet";
import "./index.css";
import "./base.css";

import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <h1>
        {days}:{hours}:{minutes}:{seconds}
      </h1>
    );
  }
};

export default function Hotsite() {
  return (
    <main>
      <Helmet>
        <title>Convenção PoliXtreme 2020</title>
        <meta name="theme-color" content="#000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Helmet>
      <header id="header">
        <img
          src={require("../../assets/banner-hexagono.jpg")}
          alt="Convenção Poli Xtreme"
        />
      </header>

      <section id="first-section">
        <img
          id="first-button"
          src={require("../../assets/bg-x.png")}
          alt="Comprar meu convite agora"
        />
        <div className="ct-to-invite">
          <div className="container">
            <p>
              A mesma oportunidade
              <br />
              realizada de maneira diferente!
            </p>
            <Countdown
              date={new Date(2020, 6, 4, 12, 0, 0, 0)}
              renderer={renderer}
            />
            ,
            <iframe
              width="800"
              height="500"
              src="https://www.youtube.com/embed/AVm2Cs2oLzg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vídeo #PoliXtreme2020"
              className="embed-video"
            />
            <h1>
              Vem aí a 1ª convenção on-line do Brasil!
              <br />
              <strong className="uppercase">04 de julho de 2020</strong>
            </h1>
          </div>
          <a href="https://www.polishop.vc/convite?&utmi_p=_store_polishop&utmi_pc=BuscaFullText&utmi_cp=convite&utm_source=PolishopComVC&utm_campaign=23917&utm_medium=polishop">
            <img
              className="button"
              src={require("../../assets/btn-quero.png")}
              alt="Comprar meu convite agora"
            />
          </a>
        </div>
      </section>

      <section id="second-section">
        <div className="container">
          <div className="row">
            <div className="flash-box">
              <img
                className="flash-img"
                src={require("../../assets/flash.png")}
                alt="flash"
              />
              <div className="flash-content">
                <h3>
                  <strong>
                    A sua chance de aprender com
                    <br />
                    <span className="c-red uppercase">
                      treinamentos exclusivos
                    </span>
                    <br />
                    dos grandes líderes Polishop com.vc!
                  </strong>
                </h3>
              </div>
            </div>
          </div>
          <div className="row leaders octo-leaders">
            {/* <img
              className="bg-x"
              src={require("../../assets/avatar-3.png")}
              alt="Comprar meu convite agora"
            /> */}
            <img
              src={require("../../assets/avatar-3-redux.png")}
              alt="Comprar meu convite agora"
              className="avatar-desk"
            />
            <img
              src={require("../../assets/avatar-3-mobile.png")}
              alt="Comprar meu convite agora"
              className="avatar-mobile"
            />
          </div>
          {/* <div className="row leaders">
            <div className="col">
              <h5>
                <strong>Gilberto Guitti</strong>
              </h5>
              <p>Diretor Polishop com.vc</p>
            </div>
            <div id="appolinario" className="col">
              <h5>
                <strong>João Appolinário</strong>
              </h5>
              <p>Fundador e Presidente da POLISHOP</p>
            </div>
            <div className="col">
              <h5>
                <strong>Daniel Hoory</strong>
              </h5>
              <p>Triplo Diamante Crown</p>
            </div>
          </div> */}
        </div>
      </section>

      <section id="third-section">
        <div className="container">
          <div className="row launches-row">
            <div className="flash-box">
              <img
                className="flash-img"
                src={require("../../assets/flash.png")}
                alt="flash"
              />
              <div className="flash-content">
                <h4>
                  <strong>Lançamentos</strong>
                </h4>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="flash-box">
              <img
                className="flash-img"
                src={require("../../assets/flash.png")}
                alt="flash"
              />
              <div className="flash-content the-plan">
                <h4>
                  <strong>O plano mais
                    <br/> atrativo do mercado</strong>
                </h4>
              </div>
            </div>
          </div> */}
          <div className="row flex-center">
            <div>
              <img
                id="opportunity-img"
                src={require("../../assets/opportunity.png")}
                alt="flash"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="fourth-seciton">
        <h4>
          <strong>
            Grandes <br />
            Reconhecimentos
          </strong>
        </h4>
        <img
          className="bg-x"
          src={require("../../assets/bg-x.png")}
          alt="Comprar meu convite agora"
        />
        <a href="https://www.polishop.vc/convite?&utmi_p=_store_polishop&utmi_pc=BuscaFullText&utmi_cp=convite&utm_source=PolishopComVC&utm_campaign=23917&utm_medium=polishop">
          <img
            className="button"
            src={require("../../assets/btn-comprar.png")}
            alt="Comprar meu convite agora"
          />
        </a>
      </section>

      <section id="fifth-section">
        <div className="container">
          <h4>
            <strong>Participe também do</strong>
          </h4>
          <img
            src={require("../../assets/summit-2020.png")}
            alt="Poli Xtreme summit 2020"
          />
          <p>
            <strong>Um evento essencial</strong> para quem quer elevar <br />
            ao máximo o seu espírito empreendedor!
          </p>
        </div>
      </section>

      <section id="sixth-section">
        <div className="container">
          <div className="flash-box">
            <img
              className="flash-img"
              src={require("../../assets/flash.png")}
              alt="flash"
            />
            <div className="flash-content">
              <h4 className="uppercase c-red">
                <strong>mentorias exclusivas</strong>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src={require("../../assets/joao.jpg")}
                alt="João Appolinário"
              />
              <h5>
                <strong>João Appolinário</strong>
              </h5>
              <p>
                Fundador e Presidente da <span>Polishop</span>
              </p>
            </div>
            <div className="col">
              <img
                src={require("../../assets/gilberto.jpg")}
                alt="Gilberto Guitti"
              />
              <h5>
                <strong>Gilberto Guitti</strong>
              </h5>
              <p>Diretor Polishop com.vc</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src={require("../../assets/roberto.jpg")}
                alt="Roberto Shinyashiki"
              />
              <h5>
                <strong>Roberto Shinyashiki</strong>
              </h5>
              <p>Médico Psiquiatra e Escritor</p>
            </div>
            <div className="col">
              <img
                src={require("../../assets/daniel-two.png")}
                alt="Daniel Hoory"
              />
              <h5>
                <strong>Daniel Hoory</strong>
              </h5>
              <p>Top Líder de Multinivel</p>
            </div>
          </div>
        </div>
      </section>

      <section id="seventh-section">
        <a href="#">
          <img src="../../assets/second-button.png" alt="" />
        </a>
      </section>

      <section id="eighth-section">
        <div className="container">
          <img
            className="bg-final"
            src={require("../../assets/bg-final.jpg")}
            alt="Comprar meu convite agora"
          />
          <div className="content">
            <div className="sub-container">
              <div className="row first-row">
                <div className="flash-box">
                  <img
                    className="flash-img"
                    src={require("../../assets/flash.png")}
                    alt="flash"
                  />
                  <div className="flash-content">
                    <h3>
                      <strong>Como participar</strong>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row second-row">
                <div className="col">
                  <p className="c-red">
                    <strong>
                      <br />
                      VALORES
                      <br />
                      EXCLUSIVOS
                      <br />
                      ATÉ
                      <br />
                      20 DE JUNHO
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p>
                    <br />
                    <strong>R$ 50,00</strong> • PoliXtreme
                    <br />
                    <strong>R$ 100,00</strong> • PoliXtreme Summit
                    <br />
                    <strong>R$ 120,00</strong> • PoliXtreme + PoliXtreme Summit
                  </p>
                </div>
              </div>
              <div className="row third-row">
                <div className="flash-box">
                  <img
                    className="flash-img"
                    src={require("../../assets/flash.png")}
                    alt="flash"
                  />
                  <div className="flash-content">
                    <h3>
                      <strong>E mais...</strong>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row fourth-row">
                <p>
                  <br />
                  Participe grátis com o seu convite
                  <br />
                  <span className="c-red">
                    Transformando Vidas Campinas 2020*
                  </span>
                  <br />e <span className="c-red">ganhe R$ 300,00</span> em
                  créditos no seu My Office
                  <br />
                  para utilizar em pedidos durante o evento!
                </p>
              </div>
              <div className="row fifth-row">
                <div className="col">
                  <img
                    src={require("../../assets/convite-campinas.png")}
                    alt="flash"
                  />
                </div>
                <div className="col">
                  <div className="flash-box">
                    <img
                      className="flash-img"
                      src={require("../../assets/flash.png")}
                      alt="flash"
                    />
                    <div className="flash-content">
                      <p>
                        <br />
                        Com mais R$ 100,00
                        <br />
                        você faz o upgrade e
                        <br />
                        participa também do
                        <br />
                        <strong className="c-red">PoliXtreme Summit!</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row sixth-row">
                <div className="col">
                  <p>
                    <br />
                    Com o convite
                    <br />
                    <span className="c-red">Leadership Summit </span>
                    <br />
                    você participa dos eventos
                    <br />
                    <strong>PoliXtreme e PoliXtreme </strong>
                    <br />
                    <strong>Summit</strong> e ainda ganha
                    <br />
                    R$ 600,00 em créditos no
                    <br />
                    seu My Office para pedidos
                    <br />
                    durante o evento*
                  </p>
                  <p className="warning">*Um convite por ID!</p>
                </div>
                <div className="col">
                  <img
                    src={require("../../assets/convite-summit.png")}
                    alt="flash"
                  />
                </div>
              </div>
              <div className="row">
                {/* <a href="https://www.google.com/">
                  <img
                    className="flash-img"
                    src={require("../../assets/btn-final.png")}
                    alt="flash"
                  />
                </a> */}
                <p className="txt-final">
                  Para cadastrar seu convite Transformando Vidas ou Leadership
                  Summit, baixe o <b>APP POLIXTREME</b> na loja da App Store ou
                  Play Store e siga o passo a passo.
                </p>
              </div>
              <div className="row">
                <div className="btns-stores">
                  <a href="#">
                    <img
                      src={require("../../assets/button-app-store.png")}
                      alt="flash"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.polixtreme2020&hl=en">
                    <img
                      src={require("../../assets/button-google-play.png")}
                      alt="flash"
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <p className="txt-final txt-final-02">
                  Caso tenha dúvidas de como usar o aplicativo para cadastrar
                  seu convite, <a href="#">CLIQUE AQUI</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
