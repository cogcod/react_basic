import React, {useState} from 'react';

function MinutesToHours() {
    const [amount, setAmount] = useState();
    const [flipped, setFlipped] = useState(false);      // flipped의 기본값은 false
    const onChange = (event) => {
        setAmount(event.target.value)
    }
    const reset = () => setAmount(0);
    const onFlip = () => {
        reset()
        setFlipped((current) => !current)          // flipped의 현재값을 반대로 바꿔라
    }

    return (
        <div>
            <h1>Converter</h1>

            <div>
                <label htmlFor="minutes">Minutes</label>
                <input
                    //  input창 비활성화 된 창은 다른 input에서 작성한 값을 해당 단위로 convert 한다.
                    value={flipped ? amount * 60 : amount}    // flipped = true = disabled (사용불가)면 시간 * 60 (분) 으로 변환
                    id="minutes"
                    placeholder="Minutes"
                    type="number"
                    onChange={onChange}
                    disabled={flipped}                 // disabled = false (사용가능)
                />
            </div>

            <div>
                <label htmlFor="hours">Hours</label>
                <input
                    value={flipped ? amount : Math.round(amount / 60)}   // flipped = true = disabled (사용불가)면 분 / 60 (시간)으로 변환
                    id="hours"
                    placeholder="Hours"
                    type="number"
                    onChange={onChange}
                    disabled={!flipped}                // disabled = true (사용불가)
                />
            </div>


            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>       {/* 클릭 시 disabled 속성이 반대로 바뀌면서 flip된다. */}
        </div>
    );
}

export default MinutesToHours;