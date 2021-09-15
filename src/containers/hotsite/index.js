import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

//import "./index.css";
//import "./base.css";

import Countdown from "react-countdown";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ConsultaConvite from "./ConsultaConvite";

// Random component
const Completionist = () => <span>Chegou a hora.</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    //return <Completionist />;
    return (
      <a href="../../streaming">
        <div align="center">
          <img
            className="button"
            src={require("../../assets/btn-assistir-live.png")}
            alt="Entrar para Assistir a Live."
          />
        </div>
      </a>
    );
  } else {
    // Render a countdown
    return (
      <h1>
        Faltam {days} dias, {hours} {hours === 1 ? "hora" : "horas"} {minutes}{" "}
        {hours === 1 ? "minuto" : "minutos"} e {seconds}{" "}
        {hours === 1 ? "segundo" : "segundos"}
      </h1>
    );
  }
};

const tables = [
  <div className="Table-wrapper Table-wrapper--first">
    <div className="Table-date">
      01/05 à 16/05
    </div>
    <table border="1">
      <thead>
        <tr>
          <td className="Table-gap"></td>
          <td>VIP</td>
          <td>PREMIUM</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="Table-leftCol">
            Valor
          </td>
          <td>
            R$ 199,90
          </td>
          <td>
            R$ 299,90
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Acesso evento 18 e 19 de Setembro​
          </td>
          <td>
            Sim
          </td>
          <td>
            Sim
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Treinamento especial 11 de Setembro​
          </td>
          <td>
            Não
          </td>
          <td>
            Sim
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Kit boas vindas
          </td>
          <td>
            Sim
          </td>
          <td>
            Sim
          </td>
        </tr>
      </tbody>
    </table>
  </div>,
  <div className="Table-wrapper Table-wrapper--second">
    <div className="Table-date">
      17/05 à 30/06​
    </div>
    <table border="1">
      <thead>
        <tr>
          <td className="Table-gap"></td>
          <td>VIP</td>
          <td>PREMIUM</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="Table-leftCol">
            Valor
          </td>
          <td>
            R$ 249,90
          </td>
          <td>
            R$ 349,90​
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Acesso evento 18 e 19 de Setembro​
          </td>
          <td>
            Sim
          </td>
          <td>
            Sim
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Treinamento especial 11 de Setembro​
          </td>
          <td>
            Não
          </td>
          <td>
            Sim
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Kit boas vindas
          </td>
          <td>
            Sim
          </td>
          <td>
            Sim
          </td>
        </tr>
      </tbody>
    </table>
  </div>,
  <div className="Table-wrapper Table-wrapper--third">
    <div className="Table-date">
      01/07 à 31/08​
    </div>
    <table border="1">
      <thead>
        <tr>
          <td className="Table-gap"></td>
          <td>VIP</td>
          <td>PREMIUM</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="Table-leftCol">
            Valor
          </td>
          <td>
            R$ 299,90​
          </td>
          <td>
            R$ 399,90​
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Acesso evento 18 e 19 de Setembro​
          </td>
          <td>
            Sim
          </td>
          <td>
            Sim
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Treinamento especial 11 de Setembro​
          </td>
          <td>
            Não
          </td>
          <td>
            Sim
          </td>
        </tr>
        <tr>
          <td className="Table-leftCol">
            Kit boas vindas
          </td>
          <td>
            Sim
          </td>
          <td>
            Sim
          </td>
        </tr>
      </tbody>
    </table>
  </div>
];

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42.738" height="24.37" viewBox="0 0 42.738 24.37">
    <path id="Path_1023" data-name="Path 1023" d="M8198.473,1132l17.128,17.127L8232.727,1132" transform="translate(-8194.23 -1127.757)" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 137.534 134.737">
    <g id="Group_1437" data-name="Group 1437" transform="translate(-921.924 -2220.547)">
      <path id="Path_1038" data-name="Path 1038" d="M-6179.186,3378.4l-105.04,105.039" transform="translate(7221 -1143)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="21"/>
      <path id="Path_1039" data-name="Path 1039" d="M-6284.226,3378.4l105.04,105.039" transform="translate(7223.795 -1143)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="21"/>
    </g>
  </svg>
);

const StarIcon = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.481 19.481" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 19.481 19.481">
    <g>
      <path d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"/>
    </g>
  </svg>
);

/*
<ConsultaConvite></ConsultaConvite>            */
export default function Hotsite() {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVideoCode, setModalVideoCode] = useState(null);
    const [dateCarouselIndex, setDatecarouselindex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(0);
  
    const handleCarouselChange = (index) => {
      setDatecarouselindex(index);
    };
  
    return (
    <main className="wrapper">
      <Helmet>
        <title>Rumo a 2030 - POLISHOP COM.VC</title>
        <meta name="theme-color" content="#000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </Helmet>
      {
        modalVisible && (
          <div className={`Modal ${modalVisible && 'is-active'}`}>
            <button
              className="Modal-shadow"
              onClick={() => setModalVisible(false)}
            />
            <div className="Modal-content">
              <button
                className="Modal-closeBtn"
                onClick={() => setModalVisible(false)}
              >
                Fechar
                <CloseIcon />
              </button>
              {
                modalVideoCode && (
                  <iframe title="Video" width="560" height="315" src={`https://www.youtube.com/embed/${modalVideoCode}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay />
                )
              }
            </div>
          </div>
        )
      }
      <session className="Intro u-parallax u-section">
        <div className="u-container">
          <div className="u-flex">
            <div className="Intro-text u-flex-col">
              <p className="u-uppercase">
                Prepare-se para viver um novo momento
              </p>
              <img
                src="http://polishop.vteximg.com.br/arquivos/rumo-2030-logo.png"
                alt="Rumo a 2030 Logo"
              />
              <p>
                Um canal renovado, ainda mais forte e com 
                <br />
                a missão de transformar a sua vida.
              </p>
            </div>
          </div>
          <Countdown
              date={new Date(2021, 8, 18, 12, 0, 0, 0)}
              renderer={renderer}
        />
        <br/>
          <a href="#saiba-mais" className="Intro-knowMore">
            <ArrowDownIcon />
            Scroll para ver mais
          </a>
        </div>
      </session>
      <session className="Video" id="saiba-mais">
        <div className="u-large-container">
          <div className="u-flex">
            <div className="Video-explanation">
              <img
                src="http://polishop.vteximg.com.br/arquivos/rumo-2030-logo.png"
                alt="Rumo a 2030 Logo"
              />
              A celebração da primeira década de nossa 
              história e o marco que dá início à trajetória 
              dos nossos <b>próximos dez anos de sucesso</b>.​
              <a href="https://www.polishop.vc/_secure/minha-loja/exclusivo" target="_blank">
                Quero Participar
              </a>
            </div>
            <iframe title="Polishop com.vc | Vem aí Rumo a 2030 com.vc" src="https://www.youtube.com/embed/UMYXLi1aqig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
        </div>
      </session>
      <session className="Reasons u-parallax u-section">
        <div className="u-container">
          <div className="u-session-title">
            Como participar
          </div>
          <div className="Reasons-subtitle">
            Reserve já a sua participação <b>em nossa maior convenção</b>!​
          </div>
          <p className="Invite-swipe-text u-center u-visible-mobile">
            {'ARRASTE PARA CONHECER OS TIPOS DE CONVITE >>>'}
          </p>
          <div className="Invites">
            <div className="u-flex-center">
              <div className="Invite Invite--premium">
                <div className="Invite-vpq">
                  400
                  <span>
                    VQPS​
                  </span>
                </div>
                <div className="Invite-block01">
                  <p className="Invite-title">Convite <b>Premium​</b></p>
                  <div className="Invite-image-wrapper">
                    <img src="https://polishop.vteximg.com.br/arquivos/PECA-08-Rumo-2030-COMBO-CONVITE-PREMIUM-03.jpg" className="Invite-image" />
                  </div>
                  <p className="Invite-name u-center">
                    <b>Acesso para uma pessoa</b>
                    18 e 19 de Setembro​
                  </p>
                </div>
                <div className="Invite-container">
                  <div className="Invite-list">
                    <p className="Invite-plus">
                      <StarIcon />
                      Mega Treinamento de Produtos e Plano de Bonificação (11 de Setembro)
                    </p>
                    <p className="Invite-listTitle">
                      Kit boas-vindas
                      <span className="Invite-listTitle-price">
                        R$ 451,38 em produtos
                      </span>
                    </p>
                    <ul>
                      <li>
                        01 Slim Soup Legumes, 
                      </li>
                      <li>
                        01 Slim Soup Mandioquinha e Frango, 
                      </li>
                      <li>
                        06 Superfood Balance, 
                      </li>
                      <li>
                        01 VIVA Slim
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="Invite-container">
                  <div className="Invite-price">
                    <div className="Invite-price-currency">
                      R$
                    </div>
                    <div className="Invite-price-values">
                      {/*  <small>
                        de R$ 399,90​
                      </small>
                      */}
                      <span className="Invite-price-by">por</span>
                      <b className="Invite-price-best">
                        399,
                      </b>
                      90​
                    </div>
                  </div>
                  <a href="https://www.polishop.vc/_secure/minha-loja/exclusivo" target="_blank" className="Invite-buyButton">
                    Garantir meu convite
                  </a>
                  <p className="Invite-dates">
                    De 01/07 a 31/08 
                  </p>
                </div>
              </div>
              <div className="Invite Invite--vip">
                <div className="Invite-vpq">
                  300
                  <span>
                    VQPS​
                  </span>
                </div>
                <div className="Invite-block01">
                  <p className="Invite-title">Convite <b>VIP</b></p>
                  <div className="Invite-image-wrapper">
                    <img src="https://polishop.vteximg.com.br/arquivos/PECA-07-Rumo-2030-COMBO-CONVITE-VIP-03.jpg" className="Invite-image" />
                  </div>
                  <p className="Invite-name u-center">
                    <b>Acesso para uma pessoa</b>
                    18 e 19 de Setembro​
                  </p>
                </div>
                <div className="Invite-container">
                  <div className="Invite-list">
                    <p className="Invite-listTitle">
                      Kit boas-vindas
                      <span className="Invite-listTitle-price">
                        R$ 321,48 em produtos
                      </span>
                    </p>
                    <ul>
                      <li>
                        01 Slim Soup Legumes, 
                      </li>
                      <li>
                        01 Slim Soup Mandioquinha e Frango, 
                      </li>
                      <li>
                        06 Superfood Balance
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="Invite-container">
                  <div className="Invite-price">
                    <div className="Invite-price-currency">
                      R$
                    </div>
                    <div className="Invite-price-values">
                      <small>
                        de R$ 299,90​
                      </small>
                      <span className="Invite-price-by">por</span>
                      <b className="Invite-price-best">
                        299,
                      </b>
                      90​
                    </div>
                  </div>
                  <a href="https://www.polishop.vc/_secure/minha-loja/exclusivo" target="_blank" className="Invite-buyButton">
                    Comprar
                  </a>
                  <p className="Invite-dates">
                    De 01/07 a 31/08
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="u-center">
            * Para garantir a Pontuação Exclusiva para Empreendedores Independentes POLISHOP, lembre-se de usar o ID e CPF do 1º titular.​
          </p>
        </div>
      </session>
      {/*<session className="Benefits">
        <div className="Benefit Benefit-vip">
          <div className="Benefit-value">
            2x
          </div>
          <p className="Benefit-text">
            <b className="Benefit-title">
              DUPLIQUE SEUS VQPs​
            </b>
            em pedidos acima de R$ 600,00 na compra de <b><span className="u-red">um convite</span> Rumo a 2030 VIP ou PREMIUM​</b>
          </p>
    </div>
        <div className="Benefit Benefit-premium">
          <div className="Benefit-value">
            3x
          </div>
          <p className="Benefit-text">
            <b className="Benefit-title">
              TRIPLIQUE SEUS VQPs​
            </b>
            em pedidos acima de R$ 600,00 na compra de <b><span className="u-red">dois ou mais</span> convites Rumo a 2030 VIP ou PREMIUM​</b>
          </p>
        </div>
        <p className="u-center">
          * A Pontuação Extra é concedida sobre o valor pago em produtos no pedido, não considerando frete e/ou seguro.​
        </p>
      </session>*/}
      <session className="Tables">
        <div className="u-session-title">
          Tabela comparativa​
        </div>
        <div className="Tables-subtitle u-visible-mobile">
          Clique na data para conferir CONDIÇÕES
        </div>
        <div className="Tables-tables u-visible-desktop">
          <div className="u-flex">
            {
              tables.map((table) => {
                return table;
              })
            }
          </div>
        </div>
        <div className="Tables-tables u-visible-mobile">
          <div
            className={`Tables-dates-carousel Tables-dates-carousel--${dateCarouselIndex}`}
          >
            <button className="Tables-dates-carousel-date" onClick={() => setSelectedItem(0)}>01/05 à 16/05​ </button>
            <button className="Tables-dates-carousel-date" onClick={() => setSelectedItem(1)}>17/05 à 30/06​</button>
            <button className="Tables-dates-carousel-date" onClick={() => setSelectedItem(2)}>01/07 à 31/08​</button>
          </div>
          <Carousel
            onChange={handleCarouselChange}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            selectedItem={selectedItem}
          >
            {
              tables.map((table) => {
                return table;
              })
            }
          </Carousel>
        </div>
        <p className="u-center">
          * Para garantir a Pontuação Exclusiva para Empreendedores Independentes POLISHOP, lembre-se de usar o ID e CPF do 1º titular.
        </p>
      </session>
      <session className="Faq u-parallax u-section">
        <h3>
          FAQ
        </h3>
        <div className="u-container">
          <div className="Faq-line">
            <div className="Faq-item">
              <p className="Faq-itemTitle">
                Como eu assisto a convenção on-line?
              </p>
              <p className="Faq-itemTxt">
                No dia do evento, acesse esse mesmo endereço - <a href="https://rumoa2030.polishop.com">rumoa2030.polishop.com</a> - e acompanhe a contagem regressiva. Ao término, você terá disponível os campos LOGIN e SENHA para curtir ao máximo a nossa convenção.
              </p>
            </div>
          </div>
          <div className="Faq-line">
            <div className="Faq-item">
              <p className="Faq-itemTitle">
                Não recebi a senha. O que eu faço?​
              </p>
              <p className="Faq-itemTxt">
                Seu login e senha para acessar ao evento estarão disponíveis:
                <br />
                <br />
                a) no email de cadastro do ID que realizou a compra (verifique sua caixa de SPAM, LIXO ELETRÔNICO ou PROMOÇÕES).
                <br />
                b) nas notificações da tela inicial de seu MYOFFICE 
              </p>
            </div>
          </div>
          <div className="Faq-line">
            <div className="Faq-item">
              <p className="Faq-itemTitle">
                DÚVIDAS
              </p>
              <p className="Faq-itemTxt">
                <a href="mailto:eventos@polishop.com.vc">eventos@polishop.com.vc</a>
              </p>
            </div>
          </div>
        </div>
      </session>
  
      <session className="Terms">
        <div className="u-small-container">
          <div className="u-session-title">
            Dados legais
          </div>
          <p>
            Os problemas técnicos ou mau funcionamento decorrentes, mas não limitados às ocorrências, tais como, erros de hardware ou software de propriedade do participante; defeito ou falha do computador, telefone, cabo, satélite, rede, eletroeletrônico, equipamento sem fio, que prejudiquem o acesso ou a conexão à Internet; erro ou limitação por parte dos provedores de serviço, hospedagem; erro na transmissão das informações; falhas no envio e/ou recebimento de mensagens de correio eletrônico; atraso ou falha no envio e/ou recebimento de mensagens de correio eletrônico; ações de hackers, vírus, bugs, worms, que venham a prejudicar o acesso ao site de divulgação desta promoção e/ou que impeçam ou dificultem a participação do empreendedor neste evento, não poderão ser atribuídos à Polimport.​
            <br />
            <br />
            ATENÇÃO: Trata-se de evento comercial fechado e e para empreendedores independentes – POLISHOP.COM.VC – regularmente credenciados. Portanto, eventuais dúvidas, sugestões ou reclamações deverão ser registradas no CANAL EXCLUSIVO de atendimento ao empreendedor, conforme manual de procedimentos. ADVERTE-SE que não serão conhecidas as dúvidas / reclamações realizadas nos canais estranhos ao negócio (RECLAME AQUI, etc.…). ​
          </p>
        </div>
      </session>
    </main>
    );
  }
