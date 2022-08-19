import React from 'react';
import {useState} from "react";

function Button() {
    const [ minutes, setMinutes ] = useState();
    const [ flipped, setFlipped ] = useState(false);
    const onChange = (event) => {
        setMinutes(event.target.value)   // input의 value로 state값을 바꿔준다.
    }

    // onClick 이벤트시 실행 - 모든 state를 0으로 리셋
    const reset = () => setMinutes(0);

    // true는 false로, false는 true로 flip 시킨다. - setFlipped로 flipped라는 state의 값을 변화시킬건데, 원래 값의 반대로 !!
    // const onFlip = () => setFlipped(!flipped);  - state 계산을 이렇게 직접적으로 하는건 별로 좋지 않다.
    const onFlip = () => setFlipped((current) => !current);   // 변수로 현재 값을 바꿔주기

    /*
        1. input에 값을 입력하면 onChange 이벤트가 일어난다.
        2. onChange 함수에서 input의 value를 업데이트 시킨다.
        3. {minutes} 라는 state 값이 value로 바뀐다.
    */

    /*
        [ flipped 기능 ]
        flipped는 단순히 true 혹은 false인 변수(state) 이다.
        flip 버튼을 누르면 onFlip 함수가 실행되는데, 이 함수는 현재 값을 받아서 그 반대 값을 내놓는다. (기본값 = false)
        input의 disable 기본 조건으로 Minutes는 disabled을 false로(=enabled), Hours는 disabled을 true로(=disabled) 설정하였다.
        이제 flip 버튼을 누르면 현재의 state값이 반대로 바뀌면서 disabled도 조건문에 따라 반대로 바뀌게 되어
        Minutes 인풋창은 비활성화되고 Hours 인풋창은 활성화 된다.
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
                    disabled={flipped}
                />
            </div>

            <div>
                <label for="hours">Hours</label>
                <input
                    value={Math.round(minutes / 60)}  // 분을 시간으로 변경 + 반올림
                    id="hours"
                    placeholder="Hours"
                    type="number"
                    disabled={!flipped}   // 사용불가 설정
                />
                {/* flipped state의 기본값은 false이다. 이것을 이용해 disabled 값을 변경한다.  */}
            </div>

            <button onClick={reset}>Reset</button>

            <button onClick={onFlip}>Flip</button>
        </div>
    );
}

export default Button;