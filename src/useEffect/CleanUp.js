import React, {useEffect, useState} from 'react';

function Hello(){
    useEffect(()=> {
        console.log("created :)")     // 컴포넌트 생성될 때 실행
        return () => console.log("destroyed :(")    // 컴포넌트 언마운트 될 때 실행

        /*
            Return 문에 도달하면 함수 실행은 이 지점에서 중단된다. 그리고 return문의 새로운 호출함수나 값을 반환한다.
            만약 값을 명시하지 않으면 대신 undefined를 반환한다.
        */
    },[])

    return <h1>Hello</h1>
}

function CleanUp() {
    const [showing, setShowing] = useState(false)
    const onClick = () => setShowing((prev) => !prev)

    return (
        <>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </>
);
}

export default CleanUp;