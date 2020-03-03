// React Imports
import React from "react";

// Libraries Imports
import { Route, Redirect } from "react-router-dom";

// Auth Imports
import * as Auth from "./auth";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isAuthenticated() === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};

export default ProtectedRoutes;
