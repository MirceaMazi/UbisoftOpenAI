import React, { useState } from "react";
import "./Drawer.css";
import Input from "../../components/Input/Input";

function Drawer() {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="painter-page-container">
      <main className="main-section">
        <div className="painter-container">
          <img src="/painter3.png" alt="A painter" className="painter-image" />
          <img
            src="/painter-popup.svg"
            alt="A painter"
            className="pop-up-message"
          />
        </div>
        <div className="easel-container">{prompt}</div>
      </main>
      <Input prompt={prompt} setPrompt={setPrompt}></Input>
    </div>
  );
}

export default Drawer;
