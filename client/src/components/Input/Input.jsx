// import React, { useState } from 'react';
// import './Input.css';
//
// function Input(props) {
//     const [messages, setMessages] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };
//
//     const handleSendMessage = (event) => {
//         event.preventDefault();
//         if (inputValue.trim() !== '') {
//             setMessages([...messages, { text: inputValue, sender: 'user' }]);
//             setInputValue('');
//         }
//     };
//
//     return (
//         <div className="chat">
//             <div className="chat-history">
//                 {messages.map((message, index) => (
//                     <div key={index} className={`message ${message.sender}`}>
//                         <div className="message-text">{message.text}</div>
//                     </div>
//                 ))}
//             </div>
//             <form className="chat-input" onSubmit={handleSendMessage}>
//                 <input
//                     type="text"
//                     placeholder="Type a message..."
//                     value={inputValue}
//                     onChange={handleInputChange}
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// }
//
// export default Input;
import React from 'react';

const Input = () => {
    return (
        <div
            style={{
                width: '66.67%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                marginBottom:'10px'
            }}
        >
            <input type="text" placeholder="Enter your text here" style={{ width: '100%', padding: '1rem' }} />
        </div>
    );
};

export default Input;
