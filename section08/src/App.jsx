import './App.css'
import {useState, useRef} from 'react'
import Editor from './components/Editor.jsx'
import Header from './components/Header.jsx'
import List from './components/List.jsx'

// 한번 선언할것이므로 외부에 선언
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 학습하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  }
]

function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  // todo 추가
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    setTodos([newTodo, ...todos])
  }

  // 체크박스 체크시
  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
    setTodos(todos.map((todo)=> todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo))
    // setTodos(todos.map((todo)=>{ // 위에 삼항연산자로 단축
    //   if(todo.id === targetId){
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone,
    //     }
    //   }
    //   return todo
    // }))
  }

  // 삭제 버튼
  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo)=>todo.id!==targetId)); // 삭제할 todo만 제외한 모든 값으로 저장
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List
          todos={todos}
          onUpdate={onUpdate}
          onDelete={onDelete}
      />
    </div>
  )
}

export default App
