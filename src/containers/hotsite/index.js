import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Slider from 'infinite-react-carousel';

//import "./index.css";
//import "./base.css";
import './styles/index.scss';

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

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42.738" height="24.37" viewBox="0 0 42.738 24.37">
    <path id="Path_1023" data-name="Path 1023" d="M8198.473,1132l17.128,17.127L8232.727,1132" transform="translate(-8194.23 -1127.757)" fill="none" stroke="#eb1f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
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

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="33.432" height="18.854" viewBox="0 0 33.432 18.854">
    <g id="check" transform="translate(3.535 3.511)">
      <path id="check-2" data-name="check" d="M5263.812,7092.241l10.077,10.548,16.309-12.844" transform="translate(-5263.812 -7089.945)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
    </g>
  </svg>
);

/*
<ConsultaConvite></ConsultaConvite>            */
export default function Hotsite() {

  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideoCode, setModalVideoCode] = useState(null);
  const IMG_PATH = 'http://polishop.vteximg.com.br/arquivos/';
  const reasons = [
    {
      img: 'http://polishop.vteximg.com.br/arquivos/hotsite-tvidas--BEFORE-AND-NOW.jpg',
      text: <>Agregar conhecimento através de histórias vitoriosas de quem identificou oportunidades em momentos de crise e obteve <b>resultados extraordinários</b>.<br /><br /><a href="https://www.youtube.com/watch?v=ymeK3BKDWOY&list=PLnLCAaBP0gslll196fcLwIpiJdzEUlEPp" target="_blank" rel="noopener noreferrer" className="u-uppercase">Clique</a> e conheça histórias inspiradoras.</>
    },
    {
      img: 'https://polishop.vteximg.com.br/arquivos/transformando-vidas--logo.png',
      text: <>Capacitar-se com <b>conteúdos exclusivos</b> em um evento <b>dinâmico</b>, <b>100% digital</b> e <b>ao vivo</b>.</>
    },
    {
      img: 'http://polishop.vteximg.com.br/arquivos/hotsite-tvidas--logo_unipolishop_v1.jpg',
      text: <>Desenvolver habilidades de <b>alta performance</b> que te permitirão sair da zona de conforto para a <b>realização de seus sonhos</b></>
    },
    {
      img: 'http://polishop.vteximg.com.br/arquivos/hotsite-tvidas--woody-falando-com-top-lideres.jpg',
      text: <>Contribuir em tempo real para o <b>Transformando Vidas aLive 2021</b> através de uma <b>plataforma interativa</b></>
    },
    {
      img: 'http://polishop.vteximg.com.br/arquivos/hotsite-tvidas--assistindo-em-casa-04.jpg',
      text: <>Participar de uma <b>convenção nacional</b> na segurança de sua casa.</>
    },
    {
      img: 'http://polishop.vteximg.com.br/arquivos/hotsite-tvidas--devices.png',
      text: <>Assistir ao evento online de <b>qualquer dispositivo</b> com acesso à internet - computador, notebook, tablet, smartphone ou smart tv!</>
    },
  ];
  const phrases = [
    {
      text: 'Todo negócio só vai até onde o Empreendedor deseja chegar! Se você tem o sonho de empreender, faço um convite pessoal: venha alcançar resultados extraordinários com a FORÇA da marca POLISHOP. Venha empreender comigo!',
      author: 'João Appolinário - Presidente e Fundador da POLISHOP',
    },
    {
      text: 'Seja humilde e siga o método.',
      author: 'Gilberto Guitti - Diretor POLISHOP COM.VC',
    },
    {
      text: 'Eu simplesmente não conheço oportunidade melhor do que POLISHOP com.vc para pessoas que tem sonhos a realizar!',
      author: 'Daniel Hoory - Triplo Diamante Crown',
    },
    {
      text: 'A Oportunidade POLISHOP sempre foi o que eu vi como a melhor possibilidade de Transformar Vidas. HOJE em especial, ela representa uma esperança para milhares de pessoas. Leve a Oportunidade a todos!',
      author: 'Cristiano Cruz - Triplo Diamante Crown',
    },
    {
      text: 'Sucesso é algo que você atrai pela pessoa que você se torna. Torne-se melhor com a Oportunidade POLISHOP com.vc.',
      author: 'Fred e Ivana Carvalhaes - Triplos Diamantes Imperial',
    },
    {
      text: 'Venha VOCÊ escrever sua nova história!',
      author: 'Cornélio Diniz e Silvia Margon - Triplos Diamantes Imperial',
    },
  ];
  // const videos = [
  //   {
  //     thumbnail: 'hotsite-innovation2020--video1.jpg',
  //     code: 'zZ8du7vNuZY',
  //     name: 'Daniel Hoory',
  //   },
  //   {
  //     thumbnail: 'hotsite-innovation2020--video2.jpg',
  //     code: 'hIJaQEnYoGE',
  //     name: 'Cristiano Cruz',
  //   },
  //   {
  //     thumbnail: 'hotsite-innovation2020--video3.jpg',
  //     code: 'HGZpuKUExvk',
  //     name: 'Fred e Ivana Carvalhaes',
  //   },
  //   {
  //     thumbnail: 'hotsite-innovation2020--video4.jpg',
  //     code: 'bza1wQWVyp4',
  //     name: 'Cornélio Diniz e Silvia Margon',
  //   },
  // ];

  const bestChoices = [
    <>Conhecer os grandes lançamentos da <b>POLISHOP</b></>,
    <>Ter acesso a <b>ofertas exclusivas</b></>,
    <>Inspirar-se através de mentorias com <b>grandes líderes</b></>,
    <>Viver <b>emocionantes reconhecimentos</b></>,
    <>Garantir <b>pontuação extra</b> na compra do convite</>,
    <>Participar de <b>sorteios de prêmios exclusivos</b></>,
  ];

  // const playVideo = (code) => {
  //   setModalVideoCode(code);
  //   setModalVisible(true);
  // };

  const month = (new Date()).getMonth();
  const generatePrice = (m) => {
    if (m === 0) return 'R$ 239,90';
    return 'R$ 239,90'
  };
  const generateOnlineVPQ = (m) => {
    if (m === 0) return '480';
    return '240';
  };
  const generateStoreVPQ = (m) => {
    if (m === 0) return '500';
    if (m === 1) return '350';
    if (m >= 2) return '250';
  };
  const ticketPrice = generatePrice(month);
  const onlineVpq = generateOnlineVPQ(month);
  const officeVpq = generateStoreVPQ(month);

  return (
  <main>
    <Helmet>
      <title>Transformando Vidas 2021 - POLISHOP</title>
      <meta name="theme-color" content="#000"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <meta name="robots" content="noindex" />
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
    <session className="Intro">
      <div className="u-container">
        <div className="u-flex">
          <div className="Intro-logo u-flex-col u-flex-col--50">
            <img
              src="https://polishop.vteximg.com.br/arquivos/transformando-vidas--logo.png"
              alt="Inovation Logo"
            />
          </div>
          <div className="Intro-text u-flex-col u-flex-col--50">
            <h1>
              Um evento <b>inspirador</b>
              <span className="u-uppercase">
                para capacitar sua visão empreendedora na busca e realização de seus sonhos!
              </span>
            </h1>
          </div>
        </div>
        <div className="Intro-text Intro-text--second">
          <p>
            Nos dias 06 e 07 de Março levaremos até o conforto da sua casa um dos grandes eventos POLISHOP COM.VC!
          </p>
        </div>
        <Countdown
              date={new Date(2021, 2, 6, 13, 0, 0, 0)}
              renderer={renderer}
        />

        <a href="#adquira-seu-convite" className="Intro-cta u-button">
          Tome a decisão e garanta já o seu convite!
        </a>
        <a href="#saiba-mais" className="Intro-knowMore">
          Saiba mais
          <ArrowDownIcon />
        </a>
      </div>
    </session>
    <session className="Video" id="saiba-mais">
      <div className="u-container">
        <iframe title="Inovation 2020 video" src="https://www.youtube.com/embed/pO_BwcUxks4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
    </session>
    <session className="Reasons">
      <div className="Reasons-wrapper">
        <div className="u-container">
          <div className="Reasons-title">
            Por que eu devo participar do 
            <img
              src="https://polishop.vteximg.com.br/arquivos/transformando-vidas--logo.png"
              alt="Transformando Vidas - Logo"
            />
          </div>
          <div className="Reasons-items">
            {
              reasons.map((item) => (
                <div className="Reasons-itemsItem">
                  <img
                    src={item.img}
                    alt={item.text}
                  />
                  <p>
                    {item.text}
                  </p>
                </div>
              ))
            }
          </div>
          <div className="Reasons-carousel">
            <Slider dots autoplay adaptiveHeight>
              {
                reasons.map((item) => (
                  <div className="Reasons-itemsItem">
                    <img
                      src={item.img}
                      alt={item.text}
                    />
                    <p>
                      {item.text}
                    </p>
                  </div>
                ))
              }
            </Slider>
          </div>
          <a href="#adquira-seu-convite" className="Reasons-cta u-button">
            Quero participar!
          </a>
        </div>
      </div>
    </session>
    {/* <session className="Videos">
        <div className="u-container">
          <div className="u-flex">
            <div className="Videos-description">
              <h3 className="Videos-descriptionTitle">
                Pode ser que você ainda não acredite
                {' '}
                <span className="u-red">no seu potencial.</span>
              </h3>
              <p>
                Assista o vídeo de alguns líderes que poderão te ajudar a tomar esta importante decisão.
              </p>
              <img
                src={`${IMG_PATH}hotsite--inovattion2020--logo.png`}
                alt="Inovation Logo"
              />
            </div>
            <div className="Videos-videos">
              {
                videos.map((video) => (
                  <button
                    className="Videos-videosVideo"
                    onClick={() => playVideo(video.code)}
                  >
                    <div className="Videos-videosVideoThumb">
                      <img
                        src={`${IMG_PATH}${video.thumbnail}`}
                        alt={video.name}
                      />
                    </div>
                    <span>
                      {video.name}
                    </span>
                  </button>
                ))
              }
            </div>
          </div>
        </div>
    </session> */}
    <session className="BestChoice">
      <h3>
        Com o <span className="u-red">Transformando Vidas aLive 2021</span> você vai:
      </h3>
      <div className="BestChoice-list">
        <ul>
          {
            bestChoices && bestChoices.map((text) => (
              <li>
                {text}
                <CheckIcon />
              </li>
            ))
          }
        </ul>
        <a href="#adquira-seu-convite" className="Reasons-cta u-button">
          Comprar meu convite!
        </a>
      </div>
    </session>
    <session className="Paritipants">
      <h3>
        Participação de
      </h3>
      <img src={`${IMG_PATH}hotsite-tvidas--participants-trim.png`} />
      <div className="Paritipants-phrases">
        {
          phrases && phrases.map(({ text, author }) => (
            <blockquote className="Paritipants-phrase">
              {/* <LeftQuote />
              <RightQuote /> */}
              <p>
                {text}
              </p>
              <b>{author}</b>
            </blockquote>
          ))
        }
      </div>
    </session>
    <session className="Participations">
      <h3>
        Participação de
      </h3>
      <div className="Participations-main">
        <div className="Participations-mainLine">
          <div className="Participations-mainItem Participations-mainItem--appolinario">
            <img
              src={`${IMG_PATH}hotsite-innovation2020--img-joao-pk-2.png`}
              alt="João Appolinário"
            />
            <div className="Participations-mainItemTxt">
              <p className="Participations-name">
                João Appolinário
              </p>
              <p className="Participations-occupation">
                Presidente e Fundador da POLISHOP
              </p>
              <p className="Participations-quotes">
                "Todo negócio só vai até onde o Empreendedor deseja chegar! Se você tem o sonho de empreender, faço um convite pessoal: venha alcançar resultados extraordinários com a FORÇA da marca POLISHOP. Venha empreender comigo!"
              </p>
            </div>
          </div>
        </div>
        <div className="Participations-mainLine">
          <div className="Participations-mainItem Participations-mainItem--gilberto">
            <img
              src={`${IMG_PATH}hotsite-innovation2020--img-gilberto-ok.png`}
              alt="Gilberto"
            />
            <div className="Participations-mainItemTxt">
              <p className="Participations-name">
                Gilberto Guitti
              </p>
              <p className="Participations-occupation">
                Diretor do Canal POLISHOP com.vc
              </p>
              <p className="Participations-quotes">
                "Seja humilde e siga o método."
              </p>
            </div>
          </div>
          <div className="Participations-mainItem">
            <img
              src={`${IMG_PATH}hotsite-innovation2020--LIDER-DANIEL-1.png`}
              alt="Daniel Hoory"
            />
            <div className="Participations-mainItemTxt">
              <p className="Participations-name">
                Daniel Hoory
              </p>
              <p className="Participations-occupation">
                Triplo Diamante Crown
              </p>
              <p className="Participations-quotes">
                "Eu simplesmente não conheço oportunidade melhor do que POLISHOP com.vc para pessoas que tem sonhos a realizar!"
              </p>
            </div>
          </div>

          <div className="Participations-mainItem">
            <img
              src={`${IMG_PATH}hotsite-innovation2020--DIAMANTE-CRISTIANO-1.png`}
              alt="Cristiano Cruz"
            />
            <div className="Participations-mainItemTxt">
              <p className="Participations-name">
                Cristiano Cruz
              </p>
              <p className="Participations-occupation">
                Triplo Diamante Crown
              </p>
              <p className="Participations-quotes">
                "A Oportunidade POLISHOP sempre foi o que eu vi como a melhor possibilidade de Transformar Vidas. HOJE em especial, ela representa uma esperança para milhares de pessoas. Leve a Oportunidade a todos!"
              </p>
            </div>
          </div>
        </div>

        <div className="Participations-mainLine">
          
          <div className="Participations-mainItem">
            <img
              src={`${IMG_PATH}hotsite-innovation2020--DIAMANTE-CORNELIO.png`}
              alt="Cornélio Diniz e Silvia Margon"
            />
            <div className="Participations-mainItemTxt">
              <p className="Participations-name">
                Cornélio Diniz e Silvia Margon
              </p>
              <p className="Participations-occupation">
                 Diamantes Imperial
              </p>
              <p className="Participations-quotes">
                "Venha VOCÊ escrever sua nova história."
              </p>
            </div>
          </div>

          <div className="Participations-mainItem">
            <img
              src={`${IMG_PATH}hotsite-innovation2020--DIAMANTE-FRED.png`}
              alt="Fred e Ivana Carvalhaes"
            />
            <div className="Participations-mainItemTxt">
              <p className="Participations-name">
                Fred e Ivana Carvalhaes
              </p>
              <p className="Participations-occupation">
                Triplo Diamantes Imperial
              </p>
              <p className="Participations-quotes">
                "Sucesso é algo que você atrai pela pessoa que você se torna. Torne-se melhor com a Oportunidade POLISHOP com.vc."
              </p>
            </div>
          </div>
          
          {/* <div className="Participations-mainItem">
            <img
              src={`${IMG_PATH}hotsite-innovation2020--DIAMANTE-MARCIO-LUCAS.png`}
              alt="Márcio Lucas"
            />
            <div className="Participations-mainItemTxt">
              <p className="Participations-name">
                Márcio Lucas
              </p>
              <p className="Participations-occupation">
                Triplo Diamantes Imperial
              </p>
              <p className="Participations-quotes">
              "Temos uma oportunidade para quem busca não ser segmentado em um mercado competitivo e tem um propósito muito bem definido! Foco nos seus sonhos, persista e não desista!"
              </p>
            </div>
          </div> */}

        </div>
      </div>
    </session>

    <session className="Tickets" id="como-participar">
        <h3>
          Como participar
        </h3>
        {/* <p className="Tickets-subtitle">
          Você pode participar do
          <img
            src={`${IMG_PATH}hotsite--inovattion2020--logo.png`}
            alt="Inovation Logo"
          />
          com os convites
          <span className="u-uppercase u-red">plus</span>
          {' '}
          e
          {' '}
          <span className="u-uppercase u-red">xperience!</span>
          *
        </p> */}

        {/* <p className="Tickets-firstDisclaimer">
          * Para garantir a Pontuação Extra Exclusiva para Empreendedores Independentes POLISHOP, lembre-se de usar o ID e CPF do 1º titular. Válido apenas 1 convite por ID. Valor do kit de produtos: <span className="u-red">{ticketPrice}</span>
        </p> */}
        <div className="Tickets-ticket Tickets-ticket--xperience" id="adquira-seu-convite">
          <div className="Tickets-ticket-wrapper">
            <div className="Tickets-ticketPhoneImg">
              <img
                src={`${IMG_PATH}hotsite-tvidas--celular.png`}
                alt="Ticket Experience"
              />
            </div>
            <div className="Tickets-ticketGains">
              <div className="Tickets-ticketGainsImgWrapper">
                <img
                  src={`${IMG_PATH}hotsite-tvidas--pack.jpg`}
                  alt=""
                />
                <small>
                  * Imagem meramente ilustrativa, os produtos poderão ser alterados sem aviso prévio
                </small>
              </div>
              <div className="Tickets-ticketGainsTexts">
                <p>
                  {/* Na compra do convite, você ganha produtos exclusivos <b>Lifestyle</b> e <b>VIVA Smart Nutrition</b> e ainda garante <b className="u-uppercase">pontuação extra</b> na sua loja virtual!* */}
                  {/* Na compra do kit <b>Todo Dia Com Você Transformando Vidas 2021</b> você participa do evento!
                  <br />
                  Compre até 31 de Janeiro e pontue <b>480 VQPs</b>! */}

                  Na compra de um <b>Kit Todo Dia Com Você Transformando Vidas 2021</b> você paga <b>R$ 239,90</b> e recebe:
                  <br />
                  <ul>
                    <li>
                      R$ 418,69 em produtos
                    </li>
                    <li>
                      01 convite para os 02 dias da convenção Transformando Vidas aLIVE
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="Tickets-ticketTicket">
              <img src="http://polishop.vteximg.com.br/arquivos/hotsite-tvidas--bg-ticket02.jpg" className="Tickets-ticketTicketHeader" />
              <div className="Tickets-ticketTicketBody">
                <p className="Tickets-ticketTicketPrice">
                  <span>De: R$ 418,69</span>
                  Por: {ticketPrice}
                </p>
                <p className="Tickets-ticketTicketScore">
                  {/* <b>{onlineVpq} VQPs</b>
                  <span>nas compras via internet</span> */}
                  COMPRE ATÉ <b>31/01</b>
                  {' '}
                  E PONTUE 480 VQPs POR KIT + CONVITE! *
                </p>
                <a href="https://www.polishop.vc/_secure/minha-loja/exclusivo" target="_blank" rel="noopener noreferrer" className="u-button Tickets-CTA">
                  Comprar meu convite na Aba Exclusivo pra.vc
                </a>
              </div>
            </div>
          </div>
          <p className="Tickets-ticketDisclaimer">
            * Na compra de 02 kits ou mais, você continua a pontuar em dobro e ainda recebe vários acessos para a convenção!
          </p>
        </div>

        {/* <div className="Tickets-ticket Tickets-ticket--plus">
          <div className="Tickets-ticket-wrapper">
            <div className="Tickets-ticketPhoneImg">
              <img
                src={`${IMG_PATH}hotsite-innovation2020--celular-innovation-plus.png`}
                alt="Ticket Experience"
              />
            </div>
            <div className="Tickets-ticketGains">
              <div className="Tickets-ticketGainsImgWrapper">
                <p>
                  ganhe
                  <br />
                  boas-vindas plus
                </p>
                <img
                  src={`${IMG_PATH}hotsite-innovation2020--pack-prod-plus.png`}
                  alt=""
                />
                <img
                  src={`${IMG_PATH}hotsite-innovation2020--brinde.png`}
                  alt=""
                />
                <small>
                  *Imagem meramente ilustrativa
                </small>
              </div>
              <div className="Tickets-ticketGainsTexts">
                <p>
                  <span className="u-uppercase">
                    Evento Innovation 2020
                    <CheckIcon />
                  </span>
                  07 e 08 de Novembro de 2020
                </p>
              </div>
            </div>
            <div className="Tickets-ticketTicket">
              <p className="Tickets-ticketTicketHeader">
                Convite Plus 
              </p>
              <div className="Tickets-ticketTicketBody">
                <p className="Tickets-ticketTicketDescription">
                  Super novidade! <br />
                  Pela primeira vez o convite de evento 
                  pontuará em sua Loja Virtual!
                </p>
                <p className="Tickets-ticketTicketScore">
                  Pontue 150 VQPs
                </p>
                <p className="Tickets-ticketTicketPrice">
                  R$ 149,90
                </p>
                <a href="https://www.polishop.vc/especial/convite" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer" className="u-button Tickets-CTA">
                  Comprar meu convite
                </a>
              </div>
            </div>
          </div>
          <p className="Tickets-ticketDisclaimer">
            RECEBA EM CASA: **Luva Golden Soft, Antisséptico Bucal, Creme Dental Nano Action + Brinde LifeStyle
          </p>
        </div> */}

        <table border="1">
          <thead>
            <tr>
              <td></td>
              <td>18 a 31 de Janeiro de 2021</td>
              <td>01 de Fevereiro a <br /> 06 de Março  de 2021</td>
              {/* <td>01 a 06 de Março de 2021</td> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                VALOR
              </td>
              <td>
                R$ 239,90
              </td>
              <td>
                R$ 239,90
              </td>
              {/* <td>
                R$ 250,00
              </td> */}
            </tr>
            <tr>
              <td>
                PONTUAÇÃO
                <br />
                (será cobrado frete para envio do kit)
              </td>
              <td>
                <b className="Tickets-tableBig">
                480 VQPs *
                </b>
              </td>
              <td>
                240 VQPs *
              </td>
              {/* <td>
                250 VQPs *
              </td> */}
            </tr>
           
            <tr>
              <td>
                KIT TODO DIA COM VOCÊ
                <br />
                com produtos no valor de R$ 418,69 
                (será cobrado frete para o envio)
              </td>
              <td>
                SIM
              </td>
              <td>
                SIM
              </td>
              {/* <td>
                250 VQPs *
              </td> */}
            </tr>
            
            <tr>
              <td>
                Acesso aos dois dias de convenção
                <br />
                Transformando Vidas aLIVE 2021
              </td>
              <td>
                SIM
              </td>
              <td>
                SIM
              </td>
              {/* <td>
                250 VQPs *
              </td> */}
            </tr>
            
            <tr>
              <td>
                Válido para Kits Adesão Bronze, Silver ou Gold com o selo
                <br />
                Transformando Vidas 2021
              </td>
              <td>
                SIM
              </td>
              <td>
                SIM
              </td>
              {/* <td>
                250 VQPs *
              </td> */}
            </tr>
            
            <tr>
              <td>
                Acessos múltiplos na compra de
                <br />
                02 KIT ou mais
              </td>
              <td>
                SIM
              </td>
              <td>
                SIM
              </td>
              {/* <td>
                250 VQPs *
              </td> */}
            </tr>
            
          </tbody>
        </table>
        <p className="Tickets-tableDisclaimer">
          * Para garantir a Pontuação Extra Exclusiva para Empreendedores Independentes POLISHOP, lembre-se de usar o ID e CPF do 1º titular.   
        </p>
        <a href="#adquira-seu-convite" className="u-button Tickets-mainnCta">
          Garantir meu convite
        </a>
    </session>
    {/* <session className="AlreadyHave" id="utilizar-bonus">
      <div className="u-container">
        <h3>
          Já tenho a credencial innovation premium, vip ou exclusive
        </h3>
        <p className="u-center">
          *Modalidade Exclusiva para Empreendedores Independentes POLISHOP
        </p>
        <div className="AlreadyHave-cards">
          <img
            src={`${IMG_PATH}hotsite-innovation2020--innovation-PREMIUM-card-2.png`}
            alt="Card Premium"
            />
          <img
            src={`${IMG_PATH}hotsite-innovation2020--innovation-VIP-card-2.png`}
            alt="Card Vip"
            />
          <img
            src={`${IMG_PATH}hotsite-innovation2020--innovation-EXCLUSIVE-card-2.png`}
            alt="Card Exclusive"
          />
        </div>
        <h4>
          Baixe o app POLIINNOVATION na playstore (EM BREVE)
          <br />
          e garanta sua participação
          <span className="u-red">
            com as vantagens xperience!
          </span>
        </h4>
        <h5>
          Viva as emoções
          <span className="u-red">
            da maior convenção do ano
          </span>
          , sem aglomeração e com a máxima segurança! 
        </h5>
        <p>
          1) Baixe o APP POLIINNOVATION na PlayStore (EM BREVE).
          <br />
          2) Cadastre a sua Credencial Innovation Premium, VIP ou Exclusive no APP POLIINNOVATION.
          <br />
          <span className="u-red u-italic">
            Atenção aos dados informados! Essa etapa não poderá ser refeita e cada credencial poderá ser cadastrada uma ÚNICA VEZ e o CPF/ID cadastrado não poderá ser utilizado novamente. Crédito pessoal e intransferível.
          </span>
          <br />
          3) Foi gerado um cartão de crédito virtual na aba Financeiro {'>'} Extrato Adiantamento De Bônus de seu MY OFFICE, para que possa garantir todos os benefícios XPERIENCE.
          <br />
          4) Acesse a aba EXCLUSIVO PRA.VC de sua Loja Virtual e garanta seu PACK BOAS-VINDAS XPERIENCE com 300 VPQs! A compra só poderá ser concluída através da forma de pagamento DÉBITO BÔNUS com o seu Cartão Virtual. 
          <br />
          5) Lembre-se de usar o seu CPF e o seu ID no momento da compra! No seu carrinho só pode ter o convite!
          <br />
          6) Escolha a Forma de Pagamento DÉBITO BÔNUS e insira as informações do CARTÃO DE CRÉDITO VIRTUAL de seu My Office.
        </p>
        <div className="AlreadyHave-warning">
          <b>Importante</b>: Trocar seu PACK BOAS-VINDAS XPERIENCE até 05/11/2020. Após essa data, a troca estará desabilitada.
        </div>
      </div>
    </session> */}
    <session className="Faq">
      <h3>
        Perguntas frequentes
      </h3>
      <div className="u-container">
      
      <div className="Faq-line">
        <div className="Faq-item">
          <p className="Faq-itemTitle">
            Como eu assisto a convenção on-line?
          </p>
          <p className="Faq-itemTxt">
            Você receberá o link de acesso dias antes da convenção online com todas as instruções de acesso.
          </p>
        </div>
        
        <div className="Faq-item">
          <p className="Faq-itemTitle">
            Não recebi a senha. O que eu faço?
          </p>
          <p className="Faq-itemTxt">
            Login e Senha serão enviados para o e-mail de compra a partir de Fevereiro.
          </p>
        </div>
      </div>

      </div>
    </session>

    <session className="Terms">
      <div className="u-container">
        <h3>
          Termos e condições
        </h3>
        <p>
          Os problemas técnicos ou mau funcionamento decorrentes, mas não limitados às ocorrências, tais como, erros de hardware ou software de propriedade do participante; defeito ou falha do computador, telefone, cabo, satélite, rede, eletroeletrônico, equipamento sem fio, que prejudiquem o acesso ou a conexão à Internet; erro ou limitação por parte dos provedores de serviço, hospedagem; erro na transmissão das informações; falhas no envio e/ou recebimento de mensagens de correio eletrônico; atraso ou falha no envio e/ou recebimento de mensagens de correio eletrônico; ações de hackers, vírus, bugs, worms, que venham a prejudicar o acesso ao site de divulgação desta promoção e/ou que impeçam ou dificultem a participação do empreendedor neste evento, não poderão ser atribuídos à Polimport.
          <br />
          <br />
          <br />
          <br />
          <b className="u-red">ATENÇÃO</b>: Trata-se de evento comercial fechado e e para empreendedores independentes – <a href="https://www.polishop.com.vc" target="_blank" rel="noopener noreferrer">POLISHOP.COM.VC</a> – regularmente credenciados. Portanto, eventuais dúvidas, sugestões ou reclamações deverão ser registradas no CANAL EXCLUSIVO de atendimento ao empreendedor, conforme manual de procedimentos. 
          <br />
          <b className="u-red">ADVERTE-SE</b> que não serão conhecidas as dúvidas / reclamações realizadas nos canais estranhos ao negócio (RECLAME AQUI, etc.…).
        </p>
        <img
          src="http://polishop.vteximg.com.br/arquivos/transformando-vidas--logo.png"
          alt="Transformando Vidas - POLISHOP"
        />
      </div>
    </session>
  </main>
  );
}
