import React from "react";

const SvgArrowR = ( {isOpen} ) => {
    return (
        <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transform: isOpen ? 'rotate(90deg)' : 'none',
                transition: 'transform 0.3s ease'
            }}
        >
            <path
                d="M1 7H15M15 7L9 13M15 7L9 1"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SvgArrowR;
