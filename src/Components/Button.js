import React from 'react';
import {useState} from "react";

function Button() {
    const [ minutes, setMinutes ] = useState();
    const onChange = (event) => {
        setMinutes(event.target.value)   // input의 value로 state값을 바꿔준다.
    }

    const reset = () => setMinutes(0);  // onClick 이벤트시 실행 - 모든 state를 0으로 리셋

    /*
        1. input에 값을 입력하면 onChange 이벤트가 일어난다.
        2. onChange 함수에서 input의 value를 업데이트 시킨다.
        3. {minutes} 라는 state 값이 value로 바뀐다.
    */

    return (
        <div>
            <h1>Super Converter</h1>

            <div>
                <label for="minutes">Minutes</label>
                <input
                    value={minutes}
                    id="minutes"
                    placeholder="Minutes"
                    type="number"
                    onChange={onChange}           // input의 값이 변경되면 onChange 함수 실행 -> state 값 변경
                />
            </div>

            <div>
                <label for="hours">Hours</label>
                <input
                    value={Math.round(minutes / 60)}  // 분을 시간으로 변경 + 반올림
                    id="hours"
                    placeholder="Hours"
                    type="number"
                    disabled   // 사용 불가 
                />
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Button;