import React from "react";
import "./index.css";

import DropDownElement from "../Dropdown Element";
import { GetSchaden } from "../../Mock/GetSchaden";
import { GetVertraegeOverview } from "../../Mock/GetVertragOverview";
import { Redirect } from "react-router-dom";


class DtlClaim extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeFilter: 'dtl',
            expand: false,
            card: false,
            path: false,
        }
    }

    componentDidMount = () => {
       
        const resp =  GetSchaden.elements[0].elements[1].elements[0].elements[0].elements;
        /* console.log('result', GetVertraegeOverview.elements[0].elements[1].elements[0].elements[0].elements[1]) */

        const type = resp[6].elements[0].text;
        const timestamp =  resp[2].elements[0].text;
        const schadennr = resp[9].elements[0].text;
        const erstattet = resp[14].elements[0].text;
        const Polizzennr = resp[5].elements[0].text;
        const claimType = resp[11].elements[0].text;
        const status = resp[10].elements[0].text;
        const referent = resp[7].elements[0].text;
        const phone = resp[32].elements[0].text;
        const updateTs = resp[31].elements[0].elements[1].elements[0].text;

        const schadensdatum = new Date(timestamp).toLocaleDateString('de-DE');
        const update =  new Date(updateTs).toLocaleDateString('de-DE');

        const card = {
            schadensdatum: schadensdatum,
            schadennr: schadennr,
            erstattet: erstattet,
            polizzennr: Polizzennr,
            status: status, 
        }

        this.setState({ 
            type: type,
            claimType: claimType,
            card: card,
            referent: referent,
            phone: phone,
            update: update,
        })
    }

    handleClickFilter = (acitve) => {
        this.setState({
            activeFilter: acitve,
        })
    }

    handleClickDropDown = (id) => {
        /* console.log(id); */
    }

    handleClickBack = (path) => {
        this.setState({
            path: path,
        })
    }
   
    render(){   
        return(
            <div className="dtl-Schaden-Container">
            {this.state.path && <Redirect to={this.state.path} />}            
                <div className="dtl-Schaden-Header bg-secondary-02">
                    <div className= "dtl-Schaden-heading">
                        <i className={this.state.type === "Fahrzeug-Versicherung" ? "icon icon--drive" : null} /> 
                        <h2>{this.state.type === "Fahrzeug-Versicherung" ? "KFZ Versicherungen" : null}</h2>
                    </div>
                    <p> Alle Details und Dokumente zu einem gemeldeten Schaden auf einen Blick.  </p>
                </div>
                <div className="dtl-Schaden-Body">
                    <h3>{this.state.claimType}</h3>
                    <div className="dtl-Schaden-Filter">
                        <div className={this.state.activeFilter === "dtl" ? "dtl-active" : "dtl-non-acitve"} onClick={()=> this.handleClickFilter("dtl")} ><p>Details</p></div>
                        <div className={this.state.activeFilter === "doc" ? "dtl-active" : "doc-non-acitve"} onClick={()=> this.handleClickFilter("doc")} ><p>Dokumente</p></div>
                    </div>
                    {this.state.activeFilter=== "dtl" ? <Detail card={this.state.card} /> : this.state.activeFilter === "doc" ? <Doc /> : null }
                    <div className="verlauf">
                        <h3>Verlaufsübersicht</h3>
                        <p>Letztes Update: {this.state.update}</p>
                    </div>
                    <div className="dropdown-container">
                        <DropDownElement icon="icon icon--calendar" label="Letzter Status" onclick={() => this.handleClickDropDown('status')} />
                        <DropDownElement icon="icon icon--folder" label="Erfassung" onclick={() => this.handleClickDropDown('erfassung')}/>
                        <DropDownElement icon="icon icon--equipment" label="Bearbeitung" onclick={() => this.handleClickDropDown('bearbeitung')}/>
                        <DropDownElement icon="icon icon--document-checked" label="Erledigung" onclick={() => this.handleClickDropDown('erledigung')}/>
                    </div>
                    <div className="back">
                        <div onClick={()=>this.handleClickBack("/claim")}>Zurück zur Übersicht</div>
                    </div>
                    <div className="contact">
                        <div className="contact-heading">
                            <h3>Ihr Ansprechpartner</h3>
                        </div>
                        <div className="contact-body">
                            <i className="icon icon--broker" />
                            <div className="contact-dtl">
                            <p>{this.state.referent}</p>
                            <p>Telefon:  {this.state.phone}</p>
                            </div>
                        </div>
                        <div className="contact-btn-container">
                            <div className="contact-btn btn btn--primary">
                                <i className="icon icon--email" />
                                <p>Anfrage senden</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Detail = (props) => {
    const formatter = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR'
      })
    return(
        <div className="dtl-matrix"> 
        <div className="dtl-matrix-table">
            <div className="dtl-matrix-col left">
                <div className="dtl-matrix-el">
                    <p className="element-label">Schadensdatum</p>
                    <p className="element-content">{props.card.schadensdatum}</p>
                </div>
                <div className="dtl-matrix-el">
                    <p className="element-label">Schadennnummer</p>
                    <p className="element-content">{props.card.schadennr}</p>
                </div>
                <div className="dtl-matrix-el">
                    <p className="element-label">Fahrzeug</p>
                    <p className="element-content">GLS Mercedes Maybach</p>
                </div>
            </div>
            <div className="dtl-matrix-col">
                <div className="dtl-matrix-el">
                    <p className="element-label">Bisher Erstattet</p>
                    <p className="element-content">{formatter.format(props.card.erstattet)}</p>
                </div>
                <div className="dtl-matrix-el">
                    <p className="element-label">Polizzennummer</p>
                    <p className="element-content">{props.card.polizzennr}</p>
                </div>
                <div className="dtl-matrix-el">
                    <p className="element-label">Kennzeichen</p>
                    <p className="element-content"> W-1234A</p>
                </div>
            </div>
            </div>
            <div className="dtl-matrix-footer">
                <p>Eingereicht 02. Februar 2019</p> 
                <p className="status">{props.card.status}</p>
            </div>
        </div>
    )
}

const Doc = (props) => {
    return(
        <div className="download">
            <div className="download-body" >
                <i className="icon icon--pdf" />
                <p>Polizze</p>
            </div>
            <i className="icon icon--download" />
        </div>
    )
}


export default DtlClaim;