import React, { Component } from "react";
import "./index.css";
import api from "../../services/api";
import axios from "axios";
import zlib from "react-zlib-js";
import { instanceOf } from "prop-types";
// import { withCookies, Cookies } from "react-cookie";

import img_polixtream from "../../assets/polixtream.png";
import img_smallpolixtream2020 from "../../assets/small_polixtream2020.png";

import sha256 from "crypto-js/sha256";
import { WebMatrixEncrypt, WebMatrixDecrypt } from "../../services/webmatrix";

// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

// let TimeOutVar = null;

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

function encriptstate(data) {
  return zlib.deflateSync(JSON.stringify(data)).toString("base64");
}

function descriptstate(data) {
  if (data && data !== "null") {
    const buf = Buffer.from(data, "base64");
    return JSON.parse(zlib.inflateSync(buf).toString());
  } else return null;
}

// async function iniciasessao(username, state) {
//   let returndata = null;

//   /*console.log("post", "https://ws-1.polishop.com/psm/sessoes/teste1",
//   {
//     id: username,
//     data: state,
//   }
//   );*/

//   await axios
//     .post(
//       "https://ws-1.polishop.com/psm/sessoes/teste1",
//       { id: username.toUpperCase(), data: state },
//       {
//         timeout: 30000,
//       }
//     )
//     .then((response) => {
//       //console.log(response);
//       if (response.status === 200) {
//         returndata = response.data.session;
//       }
//     })
//     .catch((err) => {
//       //console.log(err);
//       return null;
//     });

//   return returndata;
// }

// async function terminarsessao(sessionid) {
//   let returndata = null;

//   /*console.log(
//     "delete",
//     "https://ws-1.polishop.com/psm/sessoes/teste1/" + sessionid
//   );*/

//   await axios
//     .delete("https://ws-1.polishop.com/psm/sessoes/teste1/" + sessionid, {
//       timeout: 30000,
//     })
//     .then((response) => {
//       // console.log(response);
//       if (response.status === 204) {
//         returndata = true;
//       }
//     })
//     .catch((err) => {
//       // console.log(err);
//       return null;
//     });

//   return returndata;
// }

// async function refreshsessao(sessionid) {
//   let returndata = null;

//   /*console.log(
//     "put",
//     "https://ws-1.polishop.com/psm/sessoes/teste1/" + sessionid
//   );*/

//   await axios
//     .put("https://ws-1.polishop.com/psm/sessoes/teste1/" + sessionid, null, {
//       timeout: 30000,
//     })
//     .then((response) => {
//       //console.log(response);
//       if (response.status === 200) {
//         returndata = response.data.session;
//       }
//     })
//     .catch((err) => {
//       //console.log(err);
//       return null;
//     });

//   return returndata;
// }

// async function getres(sessionid) {
//   let returndata = null;

//   /*console.log(
//     "get",
//     "https://ws-1.polishop.com/psm/sessoes/teste1/" + sessionid
//   );*/

//   await axios
//     .get("https://ws-1.polishop.com/psm/sessoes/teste1/" + sessionid, null, {
//       timeout: 30000,
//     })
//     .then((response) => {
//       // console.log(response);
//       if (response.status === 200) {
//         returndata = response.data.data;
//       }
//     })
//     .catch((err) => {
//       //console.log(err);
//       return null;
//     });

//   return returndata;
// }

class Streaming extends Component {
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired,
  // };

  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      token: null,
      grantlevel: null,
      nosorte: null,
      auth: false,
      idvip: null,
      nick: null,
      nome: null,
      errorauth: false,
      errorsessao: false,
      streamingsrc: null,
      titulo: null,
      superuser: null,
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  // UNSAFE_componentWillMount = async () => {
  //   const { cookies } = this.props;

  //   let res = null;

  //   const sessionid = cookies.get("sessionid");

  //   if (sessionid && sessionid !== "null") {
  //     res = descriptstate(await getres(sessionid));

  //     if (!res) {
  //       cookies.set("sessionid", null, { path: "/" });
  //     }
  //   }
  //   if (res) {
  //     this.setState({
  //       auth: res.auth,
  //       errorauth: !res.auth,
  //       grantlevel: res.grantlevel,
  //       titulo: res.titulo,
  //       nosorte: res.nosorte,
  //       superuser: res.superuser,
  //       streamingsrc: res.streamingsrc,
  //       errorsessao: false,
  //       idvip: res.idvip,
  //       nick: res.nick,
  //       nome: res.nome,
  //     });
  //   } else
  //     this.setState({
  //       auth: false,
  //       errorsessao: false,
  //     });
  // };

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

  // handleRefresh = async () => {
  //   if (!this.state.superuser) {
  //     const { cookies } = this.props;
  //     const newsessionid = await refreshsessao(cookies.get("sessionid"));

  //     if (newsessionid) {
  //       cookies.set("sessionid", newsessionid, { path: "/" });
  //     }
  //   }
  // };

  // handleLogout = async () => {
  //   if (!this.state.superuser) {
  //     clearTimeout(TimeOutVar);
  //     const { cookies } = this.props;

  //     await terminarsessao(cookies.get("sessionid"));
  //     cookies.set("sessionid", null, { path: "/" });
  //     cookies.set("state", null, { path: "/" });
  //   }
  //   this.setState({
  //     email: null,
  //     password: null,
  //     token: null,
  //     grantlevel: null,
  //     auth: false,
  //     errorsessao: false,
  //     idvip: null,
  //     nick: null,
  //     nome: null,
  //     errorauth: false,
  //     streamingsrc: null,
  //     titulo: null,
  //     nosorte: null,
  //     superuser: null,
  //     formErrors: {
  //       email: "",
  //       password: "",
  //     },
  //   });
  // };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.handleValidate(this.state);

    this.state.errorauth = false;
    this.state.errorsessao = false;
    this.setState(this.state);

    if (formValid(this.state.formErrors)) {
      const { email, password } = this.state;

      const res = await api("streaminglogin", {
        username: email,
        password: password,
      });

      if (res) {
        // const sessionid =
        //   res.auth && !res.superuser
        //     ? await iniciasessao(email, encriptstate(res))
        //     : !res.superuser
        //     ? null
        //     : "1234";

        const state = {
          auth: res.auth,
          // auth: res.auth && (!!sessionid || !res.superuser),
          errorauth: !res.auth,
          grantlevel: res.grantlevel,
          titulo: res.titulo,
          nosorte: res.nosorte,
          superuser: res.superuser,
          streamingsrc: res.streamingsrc,
          // errorsessao: !sessionid && res.auth,
          errorsessao: res.auth,
          idvip: res.idvip,
          nick: res.nick,
          nome: res.nome,
        };

        // if (!res.superuser) {
        //   const { cookies } = this.props;
        //   if (res.auth && sessionid) {
        //     cookies.set("sessionid", sessionid, { path: "/" });
        //   } else {
        //     cookies.set("sessionid", null, { path: "/" });
        //   }
        // }

        console.log("auth", state.auth);
        if (state.auth) {
          this.StreamScreen(res.streamingsrc);
        } else {
          this.setState(state);
        }
      }
    } else {
      console.error("FORM INVALIDA - DISPLAY ERROR MESSAGE ");
    }
  };

  LoginScreen = () => {
    const { formErrors } = this.state;

    if (this.state.auth == null) return null;

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
              {this.state.errorsessao && (
                <span className="errorAuth">
                  USUÁRIO {this.state.email.toUpperCase()} JÁ ESTÁ LOGADO EM
                  OUTRA SESSÃO!
                </span>
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

  StreamScreen = (psrc) => {
    // if (this.state.auth && !this.state.superuser) {
    //   TimeOutVar = setTimeout(this.handleRefresh, 1000 * 60 * 4);
    // }

    // const token = {
    //   fullname: this.state.nome,
    //   polishop_id: this.state.email,
    //   event_id: this.state.grantlevel,
    // };

    const token = {
      fullname: "EMERSON SANTOS",
      polishop_id: "esantos2002",
      event_id: this.state.grantlevel,
      sair_href: "http://www.polishop.com.vc",
    };

    const tokenstr = WebMatrixEncrypt(token);

    const signstr = sha256(tokenstr).toString();

    const src =
      psrc +
      "?payload=" +
      encodeURIComponent(tokenstr) +
      "&sign=" +
      encodeURIComponent(signstr);
    console.log("src3", src);
    console.log("token", token);

    window.open(src, "_self");

    // return (
    //   <div className="streaming">
    //     <div className="header">
    //       <div className="hdrleft">
    //         <img src={img_smallpolixtream2020} alt="" />
    //         <div className="InfoTextWarp">
    //           <div className="InfoText">Streaming: {this.state.titulo}</div>

    //           {this.state.nosorte > 0 && (
    //             <div className="InfoText">
    //               No. da Sorte: {this.state.nosorte}
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //       <div className="hdrright">
    //         <a>{this.state.nick}</a>
    //         <button onClick={this.handleLogout}>Logout</button>
    //       </div>
    //     </div>
    //     <div className="client">
    //       <script
    //         type="text/javascript"
    //         src="https://static.netshow.me/integration/embed.js"
    //       ></script>
    //       <iframe
    //         allowFullScreen="yes"
    //         frameBorder="0"
    //         scrolling="yes"
    //         src={src}
    //         width="100%"
    //         height="100%"
    //         title="straming_a"
    //       ></iframe>
    //     </div>
    //   </div>
    // );
  };

  render() {
    console.log("logged", this.state.auth);
    return this.state.auth
      ? this.StreamScreen(this.state.streamingsrc)
      : this.LoginScreen();
  }
}

export default Streaming;
// export default withCookies(Streaming);
