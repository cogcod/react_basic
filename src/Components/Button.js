import React from 'react';
import {useState} from "react";


// let counter = 0;
// function countUp(){
//     setCount(count + 1);
// }

function Button() {
let [ count, setCount ] = useState(0);

    return (
        <div>
            <h3>Total clicks: {count}</h3>
            <button onClick={()=> setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Button;