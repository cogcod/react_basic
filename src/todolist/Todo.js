import React, {useState} from 'react';

function Todo() {
    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])

    const onChange = (event) => setToDo(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault()

        // toDo가 비어있으면 그냥 리턴시키기
        if(toDo === ""){
            return
        }

        /*
            [ toDo를 받아 array 만들기 ]

            setState((이전의 state, props) => // 코드 // )

            - 현재 입력한 toDo와 이전의 모든 toDo 값들을 배열로 받기
            - 처음 currentArray는 빈배열이고, toDo가 입력될 때마다 하나씩 추가된다
            = 이전 state에 들어있는 모든 요소들(toDos)를 받아와서 새로운 toDo의 배열로 리턴하는 것!
         */
        setToDos(currentArray => [toDo, ...currentArray])

        // input창 비우기
        setToDo("")

        /*
            console.log(toDos) ==> 여기서 찍으면 onChange 함수가 아직 끝나지 않았기 때문에 이전 값이 출력된다.
            state는 비동기 함수이기도 하고, 컴포넌트가 렌더링될 때 이전 값을 기준으로 판단하기 떄문!!
         */
    }

    // console.log(toDos)

    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do ..."
                />
                <button>Add To Do</button>
            </form>
            <hr />

            {/*
                [ toDos 배열 아이템을 리스트로 뿌려주기 ]
                - toDos에 들어있는 요소의 갯수만큼 map 함수가 실행되면서 새로운 배열을 만든다.
            */}
            <ul>
                { toDos.map( (item, index) => <li key={index}>{item}</li> ) }
            </ul>
        </div>
    );
}

export default Todo;