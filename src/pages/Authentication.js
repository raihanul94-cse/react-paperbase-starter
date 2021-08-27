import React from "react";
import Paperbase from "../components/Paperbase";
import { useLocation } from "react-router-dom";
import Content from "../components/Authentication/Content";

export default function Authentication() {
  const location = useLocation();
  const title = location ? location.pathname.replace(/\//g, "") : "";
  return (
    <Paperbase location={location} title={title}>
      <Content />
    </Paperbase>
  );
}
