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
        console.log("Call the API...")
    },[])

    console.log("전체 화면 렌더링 됨") // useEffect가 화면 렌더링 할 때마다 같이 실행

    //  특정 state(keyword)가 변화할 때만 실행
    useEffect(()=> {
        // 컴포넌트가 처음 실행될 때 검색(실행)되지 않도록 : 빈값이 아니고 글자수가 5 이상일떄 함수실행
        if(keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword)
        }
    }, [keyword])


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