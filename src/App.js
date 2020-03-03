// React Imports
import React from "react";

// Libraries Imports
import { BrowserRouter } from "react-router-dom";

// Configs Imports
import Routes from "./config/routes/Routes";
import { isAuthenticated } from "./config/routes/auth";

// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// Styles Imports
import "./App.css";

// CSS and styles
import "./lib/zurich-frontend-SDK_mvc-sprint_34-163/assets/brands/zurich/css/main.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  handleLoggedIn = (status) => {
    this.setState({
      loggedIn: status
    })
  }

  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <div className="content-wrap">
            <Header loggedIn={this.state.loggedIn} handleLoggedIn={this.handleLoggedIn} />
            {console.log('new routes')}
            {/* Import all routes */}
            <Routes handleLoggedIn={this.handleLoggedIn} />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
