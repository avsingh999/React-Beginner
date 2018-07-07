import React from "react";

const person = (props) => {
    return <div>
        <h3 onClick={props.click}>
        I'm a <strong> {props.name} {props.children} </strong> {props.age}
        </h3>
      </div>;
};
 
export default person;