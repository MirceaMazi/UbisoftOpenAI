import React from "react";
import "./Input.css";

const Input = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    //Opreste pagina din a da refresh
    const inputPrompt = document.getElementById("input");
    props.setPrompt(inputPrompt.value);

    inputPrompt.value = "";
  };

  return (
    <div className="input-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your text here"
          className="input-text"
          id="input"
        />
        <button className="input-button" type="submit"></button>
      </form>
    </div>
  );
};

export default Input;
