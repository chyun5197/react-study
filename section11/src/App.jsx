import './App.css'
import {useState, useRef, useReducer, useCallback, createContext, useMemo} from 'react'
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

// Context 사용
// export const TodoContext = createContext();

// Context 분리
export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

function App() {
  // const [todos, setTodos] = useState(mockData)
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  // todo 추가
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }, []);

  // 체크박스 체크시
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, []);

  // 삭제 버튼
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, []);

  // useCallback(최적화하고 싶은 함수, deps)
  // deps가 변경되었을때만 함수 다시 생성하도록 최적화(메모이제이션)
  // 위 모든 함수에 적용
  // const func = useCallback(() => {}, []);

  //11-2 아래 CUD 함수들은 따로 메모화 적용
  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  }, []);
  // TodoDispatchContext는 변하지 않는 값만 공급하기 위해 처음 1회만 실행
  // 위 3개 함수 내부에서의 객체는 다시 생성되지 않게 하기 위해

  return (
    <div className='App'>
      <Header />
{/*      <TodoContext.Provider value={
        {
          todos,
          onCreate,
          onUpdate,
          onDelete
        }
      }>
        <Editor />
        <List />
      </TodoContext.Provider>*/}
      <TodoStateContext.Provider value = {todos}>
        <TodoDispatchContext.Provider value = {{
          onCreate,
          onUpdate,
          onDelete,
        }}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
