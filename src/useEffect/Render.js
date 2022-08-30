import React, {useEffect, useState} from 'react';

function Render() {
    // --- state ---
    const [counter, setCounter] = useState(0)
    const [keyword, setKeyword] = useState("")

    // --- function ---
    const changeValue = () => setCounter(counter + 1)
    const onChange = (event) => setKeyword(event.target.value);

    // 처음 렌더링 시 한번만 실행
    useEffect(() => {
        console.log("I run only once")
    },[])

    //  특정 state(keyword)가 변화할 때만 실행
    useEffect(()=> {
        console.log("I run when 'keyword' changes.")
    }, [keyword])

    useEffect(()=> {
        console.log("I run when 'counter' changes.")
    }, [counter])

    useEffect(()=> {
        console.log("I run when 'keyword & counter' changes.")
    }, [keyword, counter])

    // -> 특정 state 변경 시 useEffect 안에 있는 코드만 실행된다!


    // --- Btn ---
    function Btn({onClick}) {
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
            >Button</button>
        );
    }

    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
            <h1>{counter}</h1>
            <Btn onClick={changeValue} />
        </div>
    );
}

export default Render;