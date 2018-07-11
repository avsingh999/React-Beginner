import React from "react";

const ImputMethod = props => {
  return <div className="InputMethod" onClick={props.click} style = {{ cursor: 'pointer'}}>
      <h2>
        I'm a {props.name} {props.children}
      </h2>
    </div>;
};

export default ImputMethod;