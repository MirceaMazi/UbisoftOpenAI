import React, { useState } from "react";
import "./Drawer.css";
import Input from "../../components/Input/Input";

function Drawer() {
  const [prompt, setPrompt] = useState("");
  // const [responseFromApi, setResponseFromApi] = useState("");

  async function createPainting() {
    //create the image
    const image = document.createElement("img");
    image.setAttribute("class", "resulted-image");

    //Call the api
    const apiBody = {
      //prettier-ignore
      "prompt": "Paint me " + prompt,
      //prettier-ignore
      "n": 1,
      //prettier-ignore
      "size": "256x256",
    };
    await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //prettier-ignore
        "Authorization": "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
      },
      body: JSON.stringify(apiBody),
    })
      .then((data) => data.json())
      .then((response) => {
        image.setAttribute("src", response.data[0].url);
        console.log(response.data[0].url);
      });

    //add it to the main section
    const mainEl = document.getElementById("main");
    mainEl.appendChild(image);
  }

  return (
    <div className="painter-page-container">
      <main className="main-section" id="main"></main>
      <Input
        prompt={prompt}
        setPrompt={setPrompt}
        handleResult={createPainting}
      ></Input>
    </div>
  );
}

export default Drawer;
