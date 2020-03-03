import React from "react";
import Cardelement from './../Cardelement';
import { Redirect } from "react-router-dom";

// Style file
import "./style.css";

import {GetSchadenListeResponse} from './../../config/xmls/GetSchadenListeResponse'


class Claim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: "all",
      path: false,
      data: {}
    };
  }

  handleOnClick = str => {
    this.setState({
      path: str
    });
  };

  handleClickFilter = acitve => {
    this.setState({
      activeFilter: acitve
    });
  };

  componentDidMount = () => {
    const response =
      GetSchadenListeResponse.elements[0].elements[1].elements[0].elements[0]
        .elements[0].elements;

    const data = response.map(i => (i.name, i.elements.map(el => el.text)));
    this.setState({
      data
    });
  };

  render() {

    const title = this.state.data[13];
    const Schadennnummer = this.state.data[8];
    const Polizzennummer = this.state.data[5];
    const zahlungen = this.state.data[14];
    const status = this.state.data[10];
    const card = {
      title: title,
      Schadennnummer: Schadennnummer,
      Polizzennummer: Polizzennummer,
      zahlungen: zahlungen,
      status: status
    };
    console.log("stats", card.status);
    return (
      <div className="claim-container">
        {this.state.path && <Redirect to={this.state.path} />}

        <div className="claim-title bg-secondary-02">
          <div className="claim-main-title">
            <i className="icon icon--warning" />
            <h1 className="title">Meine Schäden</h1>
          </div>
          <button className="btn btn--primary but">Schaden melden</button>
          <p className="title-text">
            Hier können Sie einen Schaden melden und sich alle Informationen zu
            Ihren Schäden, z.B. Status oder AnsprechpartnerIn, holen.
          </p>
        </div>​
        <div className="claim-lists">
          <h3 className="lists-title">Schadenliste</h3>
          <div className="claim-filter">
            <div
              className={this.state.activeFilter === "all" ? "active " : ""}
              onClick={() => this.handleClickFilter("all")}
            >
              <p className="border-mid">Alle</p>
            </div>

            <div
              className={this.state.activeFilter === "ofn" ? "active" : ""}
              onClick={() => this.handleClickFilter("ofn")}
            >
              <p className="border-mid">Offen</p>
            </div>

            <div
              className={this.state.activeFilter === "dgt" ? "active" : ""}
              onClick={() => this.handleClickFilter("dgt")}
            >
              <p>Erledigt</p>
            </div>
          </div>
          {card.status && this.state.activeFilter === "all" ? (
            <All onClick={this.handleOnClick} card={card} />
          ) : card.status == "Offen" && this.state.activeFilter === "ofn" ? (
            <Offen onClick={this.handleOnClick} card={card} />
          ) : card.status =="Erledigt" && this.state.activeFilter === "dgt" ? (
            <Erledigt onClick={this.handleOnClick} card={card} />
          ) : null}
        </div>
      </div>
    );
  }
}
const All = props => {
  return (
    <>
      <Offen onClick={props.onClick} card={props.card} />
      <Erledigt onClick={props.onClick} card={props.card} />
    </>
  );
};
const Offen = props => {
  return <div>

  </div>;
};

const Erledigt = props => {
  return (
    <>
      <Cardelement
        handleOnClick={props.onClick}
        pathTo="claimdtl"
        iconclass="drive"
        title={props.card.title}
        Schadennnummer={props.card.Schadennnummer}
        Polizzennummer={props.card.Polizzennummer}
        zahlungen={props.card.zahlungen}
        status={props.card.status}
      />
    </>
  );
};
export default Claim;