import React from 'react';

function Btn({text, onClick}) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: "purple",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                cursor: "pointer",
                //fontSize: big ? 30 : 16,     // props를 조건문에서 사용
            }}
        >{text}</button>
    );
}

export default Btn;