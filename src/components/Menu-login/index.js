import React from "react";
import Navsubelement from "../Menu-Listelement"

// Styles Imports
import "./index.css";
import { Link } from "react-router-dom";

import Vector from "../../img/Vector.png";
const Navelement = ({iconclass, text, border, pathTo, close}) => {
    return(
        <li className={border} onClick={close}>
            <Link to={pathTo}>
                <div className="menu-item">
                    <div className="left">
                        <div className="menu-icon">
                            <i className={`icon icon--${iconclass}`} />
                        </div>
                        <p>{text}</p>
                    </div>
                </div>
            </Link>
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
                        <li className="border-bottom" onClick={this.toggleMenu}>
                            <Link to={"/"}>
                                <div className="menu-item">
                                    <div className="left">
                                        <img src={Vector} />
                                        <p>Meine Zurich</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <Navelement
                            iconclass="broker"
                            text="Meine Betreuerin"
                            border="border-bottom"
                            onclick={this.props.onclick}
                            pathTo=""
                            close={this.toggleMenu}
                        />
                        <Navsubelement
                            iconclass="customer"
                            text="Meine Daten"
                            onclick={this.props.onclick}
                            sub={[{name: "Sub 1", url: "sub1"}]}
                        />
                        <Navsubelement
                            iconclass="literature"
                            text="Meine Verträge"
                            onclick={this.props.onclick}
                            sub={[
                                {
                                    name: "Sub 1",
                                    url: "sub1"
                                },
                                {
                                    name: "Sub 2",
                                    url: "sub2"
                                }
                            ]}
                            close={this.toggleMenu}
                        />
                        <Navsubelement
                            iconclass="warning"
                            text="Meine Schäden"
                            onclick={this.props.onclick}
                            sub={[
                                {
                                    name: "Übersicht",
                                    url: "claim"
                                },
                                {
                                    name: "Schaden melden",
                                    url: ""
                                }
                            ]}
                            close={this.toggleMenu}
                        />
                        <Navsubelement
                            iconclass="health-insurance"
                            text="Meine Arzt&shy;rechnungen"
                            onclick={this.props.onclick}
                            sub={[{name: "Sub 1", url: "sub1"}]}
                            close={this.toggleMenu}
                        />
                        <Navsubelement
                            iconclass="idea"
                            text="Meine Angebote"
                            onclick={this.props.onclick}
                            sub={[{name: "Sub 1", url: "sub1"}]}
                            close={this.toggleMenu}
                        />
                        <Navsubelement
                            iconclass="info"
                            text="Über Zürich"
                            onclick={this.props.onclick}
                            sub={[{name: "Sub 1", url: "sub1"}]}
                            close={this.toggleMenu}
                        />
                        <Navelement
                            iconclass="share"
                            text="Abmelden"
                            border="border-top"
                            onclick={this.props.onclick}
                            pathTo="/login"
                            close={this.toggleMenu}
                        />
                    </ul>
                </nav>}
            </div>
        );
    }
}

export default Menulogout;
