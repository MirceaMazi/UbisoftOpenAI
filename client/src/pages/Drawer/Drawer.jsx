import React, { useState } from "react";
import "./Drawer.css";
import Input from "../../components/Input/Input";

function Drawer() {
  const [prompt, setPrompt] = useState("test");
  return (
    <div className="painter-page-container">
      <main></main>
      <p className="message">{prompt} aici este promptul</p>
      <Input prompt={prompt} setPrompt={setPrompt}></Input>
    </div>
  );
}

export default Drawer;
