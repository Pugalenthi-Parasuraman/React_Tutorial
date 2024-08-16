import "./App.css";
import { Navbar, Gallery } from "./component/Avenger";
import Avengermap from "./component/Avengermap";
import Conditional from "./component/Conditional";
import Counter from "./component/Counter";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Gallery /> */}
      {/* <div className="Avenger-card">
        <>
          <Card
            name="Iron Man"
            power="Genius-level intellect, advanced suit"
            strength="85%"
          />

          <Card
            name="Captain America"
            power="Super soldier serum, shield"
            strength="80%"
          />

          <Card name="Hulk" power="Superhuman strength, rage" strength="100%" />

          <Card name="Thor" power="God of Thunder, Mjolnir" strength="95%" />

          <Card
            name="Black Widow"
            power="Master spy, expert combatant"
            strength="70%"
          />
        </>
      </div> */}
      {/* <Avengermap />
      <Conditional />
      <Counter /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/avengermap" element={<Avengermap />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
// , Card
