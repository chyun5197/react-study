import './App.css'
import {useState, useRef, useReducer} from 'react'
import Editor from './components/Editor.jsx'
import Header from './components/Header.jsx'
import List from './components/List.jsx'
import Exam from './components/Exam.jsx'

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
function reducer(state, action) {
  switch (action.type) {
    case "CREATE": return [action.data, ...state]
    case "UPDATE": return state.map((item)=>item.id === action.targetId
        ?{...item, isDone: !item.isDone} : item)
    case "DELETE": return state.filter((item)=>item.id!==action.targetId)
    default: state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData)
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  // todo 추가
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }

  // 체크박스 체크시
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }

  // 삭제 버튼
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
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
      <Exam />
    </div>
  )
}

export default App
