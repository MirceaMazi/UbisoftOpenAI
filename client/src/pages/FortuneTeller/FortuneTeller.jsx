import React, {useState} from "react";
import Input from "../../components/Input/Input";
import "./FortuneTeller.css";
import ChatPopUp from "../../components/ChatPopUp/ChatPopUp";

function FortuneTeller(props) {
    const [prompt, setPrompt] = useState("test");
    return (
        <div className="container">
            <p className="message">{prompt} aici este promptul</p>
            <Input prompt={prompt} setPrompt={setPrompt}></Input>
            <footer>
                <ChatPopUp/>
            </footer>
        </div>
    );
}

export default FortuneTeller;
