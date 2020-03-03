import React from "react";
import Navsubelement from "../Menu-Listelement"

// Styles Imports
import "./index.css";

import Vector from "../../img/Vector.png";


const Navelement = ({iconclass, text, border}) => {
    return(
        <li className={border}>
            <div className="menu-item">
                <div className="left">
                    <div className="menu-icon">
                        <i className={`icon icon--${iconclass}`} />
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </li>
    );
}

class Menulogout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuopen: false
        }
    }

    toggleMenu = () => {
        const state = this.state.menuopen;
        this.setState({
            menuopen: !state
        });
    }


    render() {
        return (
            <div>
                <i className="icon icon--hamburger-menu" onClick={this.toggleMenu} />
                {this.state.menuopen && 
                <nav>
                    <div className="close">
                        <i className="icon icon--close" onClick={this.toggleMenu} />
                    </div>
                    <ul>
                        <li className="border-bottom">
                            <div className="menu-item">
                                <div className="left">
                                <img src={Vector} />
                                    <p className="logo-title">Meine Zurich</p>
                                </div>
                            </div>
                        </li>
                        <Navelement 
                            iconclass="lock" 
                            text="Login" 
                            border="border-bottom"
                        />
                        <Navsubelement 
                            iconclass="home-motor" 
                            text="Privatkunden" 
                            sub={["Auto & Motorrad", "Haus & Wohnung", "Recht & Haftpflicht"]} 
                        />
                        <Navsubelement 
                            iconclass="social-housing" 
                            text="Firmenkunden" 
                            sub={["Auto & Motorrad", "Haus & Wohnung", "Recht & Haftpflicht"]} 
                        />
                        <Navsubelement 
                            iconclass="star2" 
                            text="Service" 
                            sub={["Auto & Motorrad", "Haus & Wohnung", "Recht & Haftpflicht"]} 
                        />
                        <Navsubelement 
                            iconclass="info" 
                            text="Über Zürich" 
                            sub={["Auto & Motorrad", "Haus & Wohnung", "Recht & Haftpflicht"]} 
                        />
                    </ul>
                </nav>}
            </div>
        );
    }
}

export default Menulogout;