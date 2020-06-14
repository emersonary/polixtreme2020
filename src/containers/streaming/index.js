import React, { Component } from "react";
import "./index.css";
import api from "../../services/api";

import img_polixtream from "../../assets/polixtream.png";
import img_smallpolixtream2020 from "../../assets/small_polixtream2020.png";

// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};
class Streaming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      token: null,
      grantlevel: null,
      auth: false,
      idvip: null,
      nick: null,
      nome: null,
      errorauth: false,
      streamingsrc: null,
      titulo: null,
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    let formErrors = this.state.formErrors;
    this.setState({ formErrors, [name]: value });
  };

  handleValidate = ({ formErrors, email, password }) => {
    formErrors.email =
      email == null || email.length < 3 ? "Usuário Inválido" : "";

    formErrors.password =
      password == null || password.length < 3 ? "Senha Inválida" : "";
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.handleValidate(this.state);

    this.state.errorauth = false;
    this.setState(this.state);

    if (formValid(this.state.formErrors)) {
      const { email, password } = this.state;

      const res = await api("streaminglogin", {
        username: email,
        password: password,
      });

      if (res) {
        this.setState({
          auth: res.auth,
          errorauth: !res.auth,
          grantlevel: res.grantlevel,
          titulo: res.titulo,
          streamingsrc: res.streamingsrc,
          idvip: res.idvip,
          nick: res.nick,
          nome: res.nome,
        });
      }
    } else {
      console.error("FORM INVALIDA - DISPLAY ERROR MESSAGE ");
    }
  };

  LoginScreen = () => {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="polixtream">
          <img src={img_polixtream} alt="" />
        </div>

        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Usuário</label>
              <input
                className={
                  "upper " + (formErrors.email.length > 0 ? "error" : "")
                }
                placeholder="Digite seu usuário de 6 dígitos"
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Senha</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Digite sua senha"
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
              {this.state.errorauth && (
                <span className="errorAuth">Credenciais Inválidas!</span>
              )}
            </div>

            <div className="createAccount">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  StreamScreen = () => {
    return (
      <div className="streaming">
        <div className="header">
          <div className="hdrleft">
            <img src={img_smallpolixtream2020} alt="" />
            <a>Streaming: {this.state.titulo}</a>
            <p>(123 pessoas assistindo)</p>
          </div>
          <div className="hdrright">
            <a>{this.state.nick}</a>
            <button
              onClick={() => {
                this.setState({
                  email: null,
                  password: null,
                  token: null,
                  grantlevel: null,
                  auth: false,
                  idvip: null,
                  nick: null,
                  nome: null,
                  errorauth: false,
                  streamingsrc: null,
                  titulo: null,
                  formErrors: {
                    email: "",
                    password: "",
                  },
                });
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="client">
          <script
            type="text/javascript"
            src="https://static.netshow.me/integration/embed.js"
          ></script>
          <iframe
            allowfullscreen="yes"
            frameborder="0"
            scrolling="yes"
            src={this.state.streamingsrc}
            width="100%"
            height="100%"
            title="straming_a"
          ></iframe>
        </div>
      </div>
    );
  };

  render() {
    return this.state.auth ? this.StreamScreen() : this.LoginScreen();
  }
}

export default Streaming;
