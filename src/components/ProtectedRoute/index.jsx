import { PRODUCT_TOAST_OPTIONS } from "constants/globals";
import jwt from "jsonwebtoken";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute(props) {
  const { auth } = useSelector((state) => state.employee);
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        try {
          jwt.verify(auth.token, process.env.REACT_APP_JWT_KEY);
          return <Component />;
        } catch (error) {
          toast.error("🧦 Please check login.", { ...PRODUCT_TOAST_OPTIONS });
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
