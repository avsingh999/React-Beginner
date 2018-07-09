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
      {props.status === true ? <button onClick={props.click} style={{
        backgroundColor: 'white', cursor: 'pointer'
      }}>save</button> : <button onClick={props.click} style={{
          backgroundColor: 'white', cursor: 'pointer'

      }} >edit</button> }
      <br />
      <br />
      {props.status === true ? <input className="input" type="text" onChange={props.changed} value={props.name} /> :" "}
    </div>
  );
};
 
export default ImputMethod;