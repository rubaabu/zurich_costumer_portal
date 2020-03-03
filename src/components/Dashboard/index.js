import React from "react";
import Listelement from "../Listelement";

// Styles Imports
import "./index.css";
import { Redirect } from "react-router-dom";

import { UserLoginResp } from '../../Mock/UserLogin';
import { GetBetreuerResp } from '../../Mock/GetBetreuer';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: false
    };
  }

  handleOnClick = (str) => {
    this.setState({
      path: str
    });
  };

  render() {
    const userData = UserLoginResp["s:Envelope"]["s:Body"]["UserLoginResponse"]["UserLoginResult"];
    const betreuerData = GetBetreuerResp["s:Envelope"]["s:Body"]["GetBetreuerResponse"]["GetBetreuerResult"]["b:BetreuerErweitert"];
    return (
      <div className="dashboard">
        {this.state.path && <Redirect to={this.state.path} />}
        <div className="background">
        <div className="gray">
          <h1 className="color-secondary-06">Meine Zurich</h1>
          <p className="color-secondary-06">
            Willkommen,
            <br />
            {userData["b:Name"]._text}!
          </p>
          <div className="betreuer">
            <p>Mein/e Betreuer/in</p>
            <h4>{betreuerData["b:Betreuername"]._text}</h4>
            <div className="icons">
              <i className="icon icon--contact" />
              <i className="icon icon--chat-sms" />
              <i className="icon icon--information" />
            </div>
          </div></div>
        </div>
        <div className="list">
          <h3>Service wählen</h3>
          <div className="sub-nav">
            <Listelement
              onclick={this.handleOnClick}
              pathTo=""
              iconclass="customer"
              text="Meine Daten"
              notification={false}
            />
            <Listelement
              onclick={this.handleOnClick}
              pathTo=""
              iconclass="literature"
              text="Meine Verträge"
              notification={false}
            />
            <Listelement
              onclick={this.handleOnClick}
              pathTo="claim"
              iconclass="warning"
              text="Meine Schäden"
              notification={true}
            />
            <Listelement
              onclick={this.handleOnClick}
              pathTo=""
              iconclass="health-insurance"
              text="Meine Arzt&shy;rechnungen"
              notification={false}
            />
            <Listelement
              onclick={this.handleOnClick}
              pathTo=""
              iconclass="mail-open"
              text="Meine Nachrichten"
              notification={true}
            />
            <Listelement
              onclick={this.handleOnClick}
              pathTo=""
              iconclass="idea"
              text="Meine Angebote"
              notification={false}
            />
            <Listelement
              onclick={this.handleOnClick}
              pathTo=""
              iconclass="info"
              text="Mehr über Zürich"
              notification={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
