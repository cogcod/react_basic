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

        // 여러개의 toDo를 받을 수 있는 array 만들기
        // 현재 입력한 toDo와 이전의 모든 toDo 값들을 배열로 받기
        // 처음 currentArray는 빈배열이고, toDo가 입력될 때마다 하나씩 추가된다.
        setToDos(currentArray => [toDo, ...currentArray])

        // input창 비우기
        setToDo("")

        /*
            console.log(toDos) ==> 여기서 찍으면 onChange 함수가 아직 끝나지 않았기 때문에 이전 값이 출력된다.
            state는 비동기 함수이기도 하고, 컴포넌트가 렌더링될 때 이전 값을 기준으로 판단하기 떄문!!
         */
    }

    console.log(toDos)

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
        </div>
    );
}

export default Todo;