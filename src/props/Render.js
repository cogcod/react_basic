import React from 'react';
import Btn from './Btn';



const MemorizedBtn = React.memo(Btn)

function Render() {
    const [value, setValue] = React.useState("Save Changes")
    const changeValue = () => setValue("Revert Changes")
    return (
        <div>
            {/* 컴포넌트 태그의 onClick은 이벤트리스너가 아닌 하나의 props이다. */}
            <MemorizedBtn text={value} onClick={changeValue}/>
            <MemorizedBtn text="Continue" />
        </div>
    );
}

export default Render;