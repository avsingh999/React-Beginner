import React from "react";

const ImputMethod = props => {
  return (
    <div className="InputMethod">
      <h2 onClick={props.click}>
        I'm a {" "}
        <strong>
          {props.name} {props.children}
        </strong>
        
      </h2>
      <input className="input" type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};
 
export default ImputMethod;