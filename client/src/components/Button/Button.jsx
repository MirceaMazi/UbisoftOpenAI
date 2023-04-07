import React from 'react';
import "./Button.css"
function Button({ onClick }) {
    return (
        <button onClick={onClick}>
            Back to Menu
        </button>
    );
}

export default Button;