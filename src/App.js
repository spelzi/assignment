import React from "react";
import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Url from "./components/Url";
import "./App.css";

function App() {
  return (
    <center>
      <div class="card" style={{ width: "18rem" }}>
        <Url />
        <div class="card-body">
          <Name />
          <Description />
          <Price />
        </div>
      </div>
    </center>
  );
}

export default App;
