import React from "react";
import Paperbase from "../components/Paperbase";
import { useLocation } from "react-router-dom";

export default function Performance() {
  const location = useLocation();
  const title = location ? location.pathname.replace(/\//g, "") : "";
  return (
    <Paperbase location={location} title={title}>
    </Paperbase>
  );
}
