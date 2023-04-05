import React, { useState } from 'react';
import "./Chat.css"
function Chat({ handleCloseChat }) {
    const [messages, setMessages] = useState([]);

    function sendMessage(message) {
        setMessages([...messages, message]);
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <span>Report a bug!</span>
                <button className={"close-button"} onClick={handleCloseChat}></button>
            </div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(e.target.elements.message.value);
                    e.target.elements.message.value = '';
                }}
            >
                <input type="text" name="message" placeholder="Type your message here" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chat;
