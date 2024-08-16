import React from 'react'

function Avengermap() {
const cardStyle = {
  width: "30%",
  backgroundColor: "black",
  paddingBottom: "1em",
  margin: " 25px",
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  fontWeight: "600",
  borderRadius: "10px",
  boxShadow: "1px 1px 15px 1px gray",
  textAlign: "center",
  padding:"0px 5px",

};
var card = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
};
    const heros = [
        {name:"Iron Man", power:"Genius-level intellect, advanced suit",strength:"85%" },
        {name:"Captain America", power:"Super soldier serum, shield", strength:"80%"},
        {name:"Hulk" , power:"Superhuman strength, rage",  strength:"100%"},
        {name:"Thor", power:"God of Thunder, Mjolnir", strength:"95%" },
        {name:"Black Widow",power:"Master spy, expert combatant",strength:"70%"}
    ];
  return (
    <div style={card}>
      {heros.map((a)=> {
        return (
          <div style={cardStyle}>
            <p>Name:{a.name}</p>
            <p>Power:{a.power}</p>
            <p>Strength:{a.strength}</p>
          </div>
        );
      })}
    </div>
  )
};


export default Avengermap
