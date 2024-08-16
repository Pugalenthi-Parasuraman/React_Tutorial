import React from "react";

function Data(props) {
  console.log(props);
  
  if (props.logIn === "true") {
    return (
      <div>
        <h4>Welcome back {props.name}🎉</h4>
      </div>
    );
  } else if(props.logIn === "false"){
    return (
      <div>
        <h4>Go back {props.name}😊</h4>
      </div>
    );
  }
  else{
    return (
      <div>
        <h4>Hello!📍</h4>
      </div>
    );
  }
}


function Conditional() {
  return (
    <div>
      <Data name="Pugal" logIn="" />
    </div>
  );
}

export default Conditional;

