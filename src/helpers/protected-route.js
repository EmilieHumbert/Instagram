/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Children } from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

// rerouting if user doesn't have account
export default function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return Children;
        }
        if (!user) {
          return (
            <Redirect
              to={{ pathname: ROUTES.LOGIN, state: { from: location } }}
            />
          );
        }
        return null;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
