import React from "react";

// Style file Import
import "./index.css";

class Listelement extends React.Component {
  render() {
    const {handleOnClick, pathTo, iconclass, title, Schadennnummer, Polizzennummer, zahlungen, status, datum} = this.props;
      const months = ["JANUARY", "FEBRUARY", "MARCH","APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
      let current_datetime = new Date(datum)
      let formatted_date = current_datetime.getDate() + "." + months[current_datetime.getMonth()] + "." + current_datetime.getFullYear()
      console.log("formated",formatted_date)

      const formatter = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR'
      })
    return(

      <div className="schaden-list" onClick= {() => handleOnClick(pathTo)}>
      <div className="arrow-container">
        <div className="card-body" >
          <div className="schaden-title-container">
            <i className={`icon icon--${iconclass} motorIcon`} />
            <h3 className="schaden-title">{title}</h3>
          </div>
          <div className="group-list">
            <table>
              <tr>
                <td className="first-row">
                  <span>Schadennnummer </span>
                  <p>{Schadennnummer}</p>
                </td>
                <td className="secd-row">
                  <span>Kennzeichen</span>
                  <p>W-1234A</p>
                </td>
              </tr>
              <tr>
                <td className="first-row">
                <span>Polizzennummer</span>
                <p>{Polizzennummer}</p>
                </td>
                <td className="secd-row">
                  <span>Bisher erstattet</span>
                  <p>{formatter.format(zahlungen)}</p>
                </td>
              </tr>
            </table>     
          </div>
        </div>
        <i className="icon icon--arrow arrowIcon" />
      </div>
      <div className="schaden-status">
        <p>EINGEREICHT 02. FEBRUAR 2020</p>
        <p className="ofn">{status}</p>
      </div>
    </div>
    )
  }
}

export default Listelement;
