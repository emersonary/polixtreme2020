import React from "react";
import Helmet from "react-helmet";
import "./index.css";
import "./base.css";

import Countdown from "react-countdown";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import ConsultaConvite from "./ConsultaConvite";

// Random component
const Completionist = () => <span>Chegou a hora.</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    //return <Completionist />;
    return <a href="../../streaming">
            <div align="center"><img
              className="button"
              src={require("../../assets/btn-assistir-live.png")}
              alt="Entrar para Assistir a Live."
            /></div>
            </a>
  } else {
    // Render a countdown
    return (
      <h1>
        Faltam {days} dias e {hours}hs{minutes}m{seconds}s
      </h1>
    );
  }
};

export default function Hotsite() {
  const faq = [
    {
      question: <p>Possuo credencial dos eventos TRANSFORMANDO VIDAS 2020 CAMPINAS e LEADERSHIP SUMMIT e não localizo o APP do evento na APP STORE.</p>,
      answer: <p>Em breve dispositivos com iOS estarão habilitados para receberem o APP PoliXtreme. Enquanto isso, para garantir garanta a sua participação enviando uma foto da sua credencial para o WhatsAPP do PoliXtreme com os dados para cadasto – ID (primeiro titular do ID), CPF e E-MAIL.</p>
    },
    {
      question: <p>Não consigo cadastrar a minha credencial.</p>,
      answer: <p>Verifique se o CPF utilizado foi o do 1º titular do contrato de Empreendedor. Caso persista o erro, entre em contato com a equipe de atendimento via WhatsApp informando qual o erro que consta na tela.</p>
    },
    {
      question: <p>Fiz o cadastro e optei pagar com BOLETO. Posso trocar por CARTÃO?</p>,
      answer: <p>Para solicitar a troca da forma de pagamento, orientamos que entre em contato com a Central de Atendimento.</p>
    },
    {
      question: <p>Em quanto tempo depois que tiver cadastrado meu convite pelo APP eu verei meus créditos no MyOffice?</p>,
      answer: <p>Imediato, logo que finalizar cadastro já receberá no seu email indicado, o Login e senha de acesso, assim como seus créditos, por isso, logo que finalizado, os CRÉDITOS E CONVITES SÃO INTRANSFERÍVEIS.</p>
    },
    {
      question: <p>Onde e quando estará disponível para usar o meu crédito das credenciais eventos TRANSFORMANDO VIDAS 2020 CAMPINAS ou LEADERSHIP SUMMIT?</p>,
      answer: <p>O crédito será disponibilizado no formato de cartão virtual e ficará armazenado no MyOffice, na aba Financeiro. A utilização desse crédito será liberado no dia do evento.</p>
    },
    {
      question: <p>Cadastrei meu convite através do APP e vejo, no MyOffice aba Financeiro, que já tenho liberado o meu crédito. Já posso usar o crédito?</p>,
      answer: <p>Não. Este crédito só estará habilitado para uso no dia da convenção para comprar as Ofertas Exclusivas que serão anunciadas no dia.</p>
    },
    {
      question: <p>Fiz um cadastro e preciso ter 02 acessos ao evento. Como eu faço?</p>,
      answer: <p>É permitido inscrever apenas 1 (um) login e senha em cada credencial, sendo o acesso pessoal e intransferível. Neste caso, orientamos a compra de um convite online para gerar um novo login e senha para o segundo usuário.</p>
    },
    {
      question: <p>Estava com meu cadastro cancelado e logo que recebi a carta do presidente João Appolinário comprei o convite, mas no meu pedido consta o ID da POLISHOP. Quando o meu ID estará ativo para poder comprar produtos?</p>,
      answer: <p>O seu ID será ativado assim que o sistema confirmar o pagamento.</p>
    },
    {
      question: <p>Comprei o convite, mas ainda não recebi email de confirmação com o link, login e senha. O que faço?</p>,
      answer: <p>Verifique sua caixa de SPAM ou PROMOÇÕES. Caso persista, mande email para <a href="mailto:polixtreme@polishop.com.br">polixtreme@polishop.com.br</a>.</p>
    },
    {
      question: <p>Tenho credencial do Transformando Vidas Campinas e do Leadership Summit. Se eu me inscrever com os 2 convites receberei R$ 900,00 de crédito?</p>,
      answer: <p>Não, o valor máximo que um ID receberá de crédito será de <b>R$ 600,00 para o convite Leadership Summit</b> e R$ <b>300,00 para o convite Transformando Vidas 2020 Campinas</b>. Se usar o convite Transformando Vidas 2020 Campinas para se inscrever e depois usar o Leadership Summit para se inscrever no PoliXtreme Summit, <b>o sistema considerará o de maior valor, ou seja, crédito de R$ 600,00.</b></p>
    }];
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
            
            <iframe
              width="800"
              height="500"
              src="https://www.youtube.com/embed/B6wJCxHnQc0"
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
          <a href="https://www.polishop.vc/convite?&utmi_p=_store_polishop&utmi_pc=BuscaFullText&utmi_cp=convite&utm_source=PolishopComVC&utm_campaign=23917&utm_medium=polishop" target="_blank">
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
        <a href="https://www.polishop.vc/convite?&utmi_p=_store_polishop&utmi_pc=BuscaFullText&utmi_cp=convite&utm_source=PolishopComVC&utm_campaign=23917&utm_medium=polishop" target="_blank">
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
                      <br />
                      <br />
                      <br />
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p>
                    <br />
                    <strong>R$ 80,00</strong> • PoliXtreme
                    <br />
                    <strong>R$ 150,00</strong> • PoliXtreme Summit
                    <br />
                    <strong>R$ 180,00</strong> • PoliXtreme + PoliXtreme Summit
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
                  Para cadastrar seu convite Transformando Vidas ou Leadership Summit, baixe o
                  {' '}
                  <b>
                    APP POLIXTREME
                  </b>
                  {' '}
                  na loja da App Store ou Play Store e siga o passo a passo.
                </p>
              </div>
              <div className="row">
                <div className="btns-stores">
                  <a href="#" className="soon-wrapper">
                    <img
                      src={require("../../assets/button-app-store.png")}
                      alt="flash"
                    />
                    <div className="soon-label"><span>Em breve</span></div>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.polixtreme2020&hl=en" target="_blank">
                    <img
                      src={require("../../assets/button-google-play.png")}
                      alt="flash"
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <p className="txt-final txt-final-02">
                Caso tenha dúvidas de como usar o aplicativo para cadastrar seu convite ou sobre a utilização do crédito,
                  {' '}
                  <a href="https://s3.amazonaws.com/myoffice-files.polishop.com/materiais/normas_regras/PASSOaPASSO_CADASTRO.pdf" target="_blank">
                    CLIQUE AQUI
                  </a>
                  {' '}
                  se ainda tiver dúvidas, entrar em contato através do email <a href="mailto:polixtreme@polishop.com.br">polixtreme@polishop.com.br</a> ou via Whatsapp no 11 96377-8262.
                  <ConsultaConvite></ConsultaConvite>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ninth-section">
        <div className="container">
          <h4>
            <strong>Dúvidas Frequentes</strong>
          </h4>
          <img
              className="flash-img"
              src={require("../../assets/flash-faq.jpg")}
              alt="flash"
            />
          <Accordion allowZeroExpanded={true}>
            {faq.map(faq => (
              <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      {faq.question}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {faq.answer}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
            </Accordion>
          </div>
      </section>
    </main>
  );
}
