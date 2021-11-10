import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
  return <main className="wrapper waytrTop waytrTopT">{props.children}</main>;
}

export default Wrapper;
