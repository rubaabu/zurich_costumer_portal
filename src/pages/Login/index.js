// React Imports
import React from "react";

// Temp Imports
import {
  withRouter
} from 'react-router-dom'

// Config Imports
import AuthenticationUser from "../../config/xmls";

// Styles Imports
import "./index.css";

import { isAuthenticated } from "../../config/routes/auth";

const axios = require("axios").default;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
      stayLoggedIn: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("auth")) {
      localStorage.removeItem("auth");
      this.props.handleLoggedIn(false);
    }
  }

  handleClickSubmit = () => {
   /*  axios.post(
        "http://w3q.maklernetz.at/service/meta/kundenportal/Kundenportal/Authentication.svc/Authenticationx",
        AuthenticationUser(this.state.username, this.state.password),
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/xml"
          }
        }
      )
      .then(res => {
        // console.log(res);
        // console.log('xml', AuthenticationUser);
        this.setState({
          loggedIn: true
        });
        this.props.loggedIn(this.state.loggedIn);
      })

      .catch(err => {
        console.log("err", err);
        console.log("xml", AuthenticationUser);
      });*/

      if (this.state.usename = "1" && this.state.password == "123"){
        //isAuthenticated(true);

        localStorage.setItem('auth', true);
        this.props.history.push('/');


        this.setState({
          loggedIn: true,
        })

        this.props.handleLoggedIn(true);
      }
  };

  handleChangeUsername = event => {
    const USER = event.target.value;
    this.setState({
      username: USER
    });
    console.log(this.state.username);
  };

  handleChangePassword = event => {
    const PW = event.target.value;
    this.setState({
      password: PW
    });
    console.log(this.state.password);
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  toggleCheckbox = () => {
    this.setState({
      stayLoggedIn: !this.state.stayLoggedIn
    });
  };

  render() {
    return (
      <div className="login-container">
        <h2 className="login-title color-primary-01">Willkommen zurück</h2>
        <p className="login-body">
          Melden Sie sich an und genießen Sie die Vorteile von Meine Zurich!
        </p>
        <form className="login-input form-group">
          <input
            type="text"
            className="Kdnr"
            onChange={this.handleChangeUsername}
            placeholder="Kundennummer oder E-Mail"
          />
          <div className="password">
            <input
              type={this.state.show ? "text" : "password"}
              className="password-input"
              onChange={this.handleChangePassword}
              placeholder="Passwort"
            />
            <i className="icon icon--vision" onClick={this.toggleShow} />
          </div>
          <label className="checkbox">
            <input
              type="checkbox"
              className="angemeldet-bleiben checkbox__control"
              value={this.state.stayLoggedIn}
              onClick={this.toggleCheckbox}
            />{" "}
            <span className="checkbox__label">Angemeldet bleiben</span>
          </label>
          <button
            type="button"
            className="anmelden btn btn--primary"
            onClick={this.handleClickSubmit}
          >
            Anmelden
          </button>
          {console.log("checkbox", this.state.stayLoggedIn)}
        </form>
        <div className="register">
          Noch kein Account?{" "}
          <a href="https://www.zurich.at/meinezurich/Registration.aspx">
            Registrieren
          </a>
        </div>
        <div className="PW-vergessen">
          <a href="https://www.zurich.at/meinezurich/PasswortVergessen.aspx">
            Passwort vergessen?
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
