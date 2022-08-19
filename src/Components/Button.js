import React from 'react';
import {useState} from "react";


// let counter = 0;
// function countUp(){
//     setCount(count + 1);
// }

function Button() {
    // const [ count, setCount ] = useState(0);
    // const onClick = () => {
    //     setCount((current) => current + 1);  // 자동으로 counter 수정
    // }

    const [ minutes, setMinutes ] = useState();
    const onChange = (event) => {
        setMinutes(event.target.value)
    }


    return (
        <div>
            <h1>Super Converter</h1>
            {/*<button onClick={ setCount((current) => current + 1) }>Click me</button>*/}
            {/* setCount에는 변경할 값을 직접적으로 넣을 수도 있고, 함수도 넣을 수 있다. */}

            <label for="minutes">Minutes</label>
            <input
                value={minutes}
                id="minutes"
                placeholder="Minutes"
                type="number"
                onChange={onChange}
            />

            <div>You want to convert {minutes}</div>

            <label for="hours">Hours</label>
            <input id="hours" placeholder="Hours" type="number"/>
        </div>
    );
}

export default Button;