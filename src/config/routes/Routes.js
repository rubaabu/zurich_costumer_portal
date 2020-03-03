// React Imports
import React from "react";

// Libraries Imports
import { Switch, Route } from "react-router-dom";

// Config Imports
import ProtectedRoutes from "./ProtectedRoutes";

// Pages Imports
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Claim from "../../components/Claim";
import DtlClaim from "../../components/Detail Schaden";

const Routes = (props) => {
  return (
    <Switch>
      <ProtectedRoutes
        path="/"
        exact
        component={() => <Main />}
      />
      <ProtectedRoutes
        path="/claim"
        exact
        component={() => <Claim />}
      />
      <ProtectedRoutes
        path="/claimdtl"
        exact
        component={() => <DtlClaim />}
      />
      <Route exact path="/login" component={() => <Login handleLoggedIn={props.handleLoggedIn} />} />
    </Switch>
  );
};

export default Routes;
