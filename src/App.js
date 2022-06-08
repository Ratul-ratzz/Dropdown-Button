import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./style.css"

function App() {
  const [selected, setSelected] =useState("");
  return (
    <Dropdown selected={selected} setSelected={setSelected}/>
  );
}

export default App;
