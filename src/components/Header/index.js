import React from "react";
import Logo from "../../lib/zurich-frontend-SDK_mvc-sprint_34-163/assets/brands/zurich/images/zurich-logo-small.svg";

// Styles Imports
import "./index.css";

import Menulogout from "../Menu-logout";
import Menulogin from "../Menu-login";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      path: false
    }
  }

  handleOnClick = (str) => {
    this.setState({
      path: str
    });
  };

  render() {
    return (
      <header className="header bg-secondary-01">
        <img src={Logo} className="logo logo--small" alt="Zurich Logo" />
        <div className="header-icons">
          <i className="icon icon--search" />
          {this.props.loggedIn ?  <Menulogin handleLoggedIn={this.props.handleLoggedIn} onclick={this.handleOnClick} /> : <Menulogout onclick={this.handleOnClick} />}
        </div>
      </header>

    );
  }
};

export default Header;
