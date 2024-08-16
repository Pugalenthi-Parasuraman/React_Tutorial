import React from "react";
import "../style/Avenger.css";
import image from "../images/1.png";
function Navbar() {
  return (
    <div className="Avengers">
      <div className="demo-nav">
        <div className="logo">
          <img src={image} alt="1.png" height="30px" />
        </div>
        <div className="nav">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
          <a href="#">SERVICRE</a>
        </div>
      </div>
      <h1>Avengers Assemble</h1>
    </div>
  );
}

function Gallery() {
  return (
    <div className="body-content">
      <div className="body-img">
        <img
          src="https://www.pngarts.com/files/12/Avengers-Logo-PNG-Download-Image.png"
          alt=""
        />
      </div>
      <div className="body-para">
        <h2>
          Here's a dramatic paragraph inspired by the "Avengers Assemble" moment
          from Avengers Endgame:
        </h2>
        <p className="para">
          In the heart of the battlefield, where the very fabric of reality
          trembled under the weight of destiny, the Avengers faced their
          greatest challenge. The forces of Thanos, vast and relentless, surged
          like a dark tide against the remnants of Earth’s mightiest heroes.
          Hope seemed a distant memory, flickering like a dying star in the
          void. But then, a whisper of hope resonated across the desolate
          plains, carried by the familiar voice of Sam Wilson: "On your left."
          Portals shimmered into existence, each one a gateway to a legion of
          allies. The armies of Wakanda, the sorcerers of Kamar-Taj, the
          Asgardians, and so many others emerged from the light, answering the
          call to arms. With the broken shield of Captain America clenched in
          his hand, Steve Rogers stood at the forefront, the embodiment of
          resolve. His voice, steady and filled with unyielding determination,
          rang out across the battlefield: “Avengers, assemble!” In that moment,
          the universe held its breath, as the final stand against tyranny
          began. United, they charged into the fray, not as individuals, but as
          one—bound by a singular purpose, to restore balance to a world on the
          brink of annihilation. This paragraph captures the epic scale and
          emotion of the climactic moment when the Avengers unite to face Thanos
          in Endgame.
        </p>
      </div>
    </div>
  );
}

// function Card(props) {
//   console.log(props);

//   return (
//     <div className="card">
//       <p>Name:{props.name}</p>
//       <p>Power:{props.power}</p>
//       <p>Strength:{props.strength}</p>
//     </div>
//   );
// }

export { Navbar, Gallery};
// Card; 