import React, { useEffect, useRef } from "react";
// import "./ChatHistory.css";

function ChatHistory({ chatHistory, response, onSend }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory, response]);

    return (
        <div className="chat-history">
            {chatHistory.map((item, index) => {
                const { type, data } = item;
                const avatar = type === "openai" ? "openai-avatar.png" : `${type}-avatar.png`;

                return (
                    <div className={`chat-bubble-container ${type}-bubble-container`} key={index}>
                        <div className="profile-picture">
                            <img src={`/${avatar}`} alt={type} height="100%" />
                        </div>
                        <div className={`chat-bubble ${type}-bubble`}>
                            {data}
                        </div>
                    </div>
                );
            })}
            {response && (
                <div className="chat-bubble-container openai-bubble-container" key="response">
                    <div className="profile-picture">
                        <img src={`/openai-avatar.png`} alt="openai" height="100%" />
                    </div>
                    <div className="chat-bubble openai-bubble">
                        {response}
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default ChatHistory;
// import React, {useEffect, useRef, useState} from "react";
//
// // import "./ChatHistory.css";
//
// function ChatHistory({chatHistory, response}) {
//     const [userInput, setUserInput] = useState("");
//     const messagesEndRef = useRef(null);
//
//     useEffect(() => {
//         messagesEndRef.current.scrollIntoView({behavior: "smooth"});
//     }, [chatHistory]);
//
//     const handleKeyDown = (event) => {
//         if (event.key === "Enter" && userInput.trim() !== "") {
//             const newItem = {type: "user", data: userInput};
//             chatHistory.push(newItem);
//             setUserInput("");
//         }
//     };
//
//     const handleSendClick = () => {
//         if (userInput.trim() !== "") {
//             const newItem = {type: "user", data: userInput};
//             chatHistory.push(newItem);
//             setUserInput("");
//         }
//     };
//
//     const handleChange = (event) => {
//         setUserInput(event.target.value);
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };
//
//     return (
//         <div className="chat-history">
//             {chatHistory.map((item, index) => {
//                 const {type, data} = item;
//                 const avatar = type === "openai" ? "openai-avatar.png" : `${type}-avatar.png`;
//
//                 return (
//                     <div className={`chat-bubble-container ${type}-bubble-container`} key={index}>
//                         <div className="profile-picture">
//                             <img src={`/${avatar}`} alt={type} height="100%"/>
//                         </div>
//                         <div className={`chat-bubble ${type}-bubble`}>
//                             {data}
//                         </div>
//                     </div>
//                 );
//             })}
//             {response && (
//                 <div className="chat-bubble-container openai-bubble-container" key="response">
//                     <div className="profile-picture">
//                         <img src={`/openai-avatar.png`} alt="openai" height="100%"/>
//                     </div>
//
//                     <div className="chat-bubble openai-bubble">
//                         {response}
//                     </div>
//                 </div>
//             )}
//             <div ref={messagesEndRef}/>
//             <form className="form-container" onSubmit={handleSubmit}>
//                 <div className="user-input-container">
//                     <input
//                         type="text"
//                         placeholder="Type your message..."
//                         className="input-text"
//                         value={userInput}
//                         onKeyDown={handleKeyDown}
//                         onChange={handleChange}
//                     />
//                     <button className="input-button" type="submit" onClick={handleSendClick}></button>
//                 </div>
//             </form>
//         </div>
//     );
// }
//
// export default ChatHistory;
//
