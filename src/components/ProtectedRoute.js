import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedLayout = ({ children, ...rest }) => {
  return <>{children}</>;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        if (
          localStorage.getItem("access_token") &&
          localStorage.getItem("user_type") === "Protected"
        ) {
          return (
            <ProtectedLayout>
              <Component {...matchProps} />
            </ProtectedLayout>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: {
                  from: matchProps.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
