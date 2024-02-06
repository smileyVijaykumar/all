import React from "react";
import propsType from "prop-types";

const PropsChildrenFBC = (props) => {
  return (
    <div>
      <h2>{props.userName}</h2>
      <h1>{props.desig}</h1>
      <h1>{props.salry}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default PropsChildrenFBC;

//!default Props
PropsChildrenFBC.defaultProps = {
  userName: "sam",
  company: "google",
  desig: "Devleoper",
  salry: 20000,
};

// !props validation

PropsChildrenFBC.propsType = {
  userName: propsType.number,
  salry: propsType.number,
};
