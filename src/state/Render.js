import React, {useState} from 'react';
import MinutesToHours from "./MinutesToHours";
import KmToMiles from "./KmToMiles";

function Render() {
    const [index, setIndex] = useState("xx");
    function onChange(event){
        setIndex(event.target.value)
    }

    return (
        <div>
            <h1>Super Converter</h1>

            {/* 시/분 변환기에서 km/miles 변환기로 전환하기 */}
            <select value={index} onChange={onChange}>        {/* 아래 option에서 사용자가 선택한 value 값을 여기에 넣어준다. */}
                <option value="xx">Select your units</option>
                <option value="0">Minutes & Hours</option>    {/* value 값을 넣어서 사용자가 무엇을 선택했는지 알 수 있도록 */}
                <option value="1">Km & Miles</option>
            </select>

            { index === "xx" ? "Select your units" : null }
            { index === "0" ? <MinutesToHours /> : null }
            { index === "1" ? <KmToMiles /> : null }

        </div>
    );
}

export default Render;