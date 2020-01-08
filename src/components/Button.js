import React from 'react';

const Button = ({ children, ...buttonProps }) => {
    return (
        <button
            className="px-3 py-1 rounded-sm bg-green-400 text-green-800 text-xl 
            focus:outline-none font-light uppercase shadow-md hover:shadow-lg"
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;
