import React, { useState } from 'react';
import Chat from '../Chat/Chat';
import './ChatPopUp.css';

function ChatPopUp() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseChat = () => {
        setIsOpen(false);
    };

    return (
        <div className="chat-pop-up">
            {isOpen ? (
                <Chat handleCloseChat={handleCloseChat} />
            ) : (
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7vuyMgzf6vwN01qoqd1M08Xv_00cwT5-OMaJ2rY&s'}
                    alt="Chat Icon"
                    className="chat-icon"
                    onClick={() => setIsOpen(true)}
                />
            )}
        </div>
    );
}

export default ChatPopUp;