import "./List.css"
import TodoItem from "./TodoItem";
import {useState, useMemo} from "react";

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const getFilteredData = () => {
        if (search === "") { // 검색없을때는 제외
            return todos;
        }
        return todos.filter((todo)=> // 배열 모든 todo 순회하면서
            todo.content
                .toLowerCase() // 소문자화하여 대소문자 모두 포함 검색
                .includes(search.toLowerCase())
        );
        // (todo) => {} 중괄호 넣으려면 아래처럼 return 필요
        // return todos.filter((todo)=>{ // 배열 모든 todo 순회하면서
        //     return todo.content.includes(search)
        // });
    }
    const filteredTodos = getFilteredData(); // 컴포넌트가 리렌더링 될때마다 호출

    // 아래 코드로 변경
    // const getAnalyzedData = () => {
    //     const totalCount = todos.length;
    //
    //     // 관련 없는 기능인 검색을 해도 리렌더링되서 필터함수가 매번 실행되므로 낭비
    //     const doneCount = todos.filter((todo) => todo.isDone).length;
    //
    //     const notDoneCount = totalCount - doneCount;
    //     return {totalCount, doneCount, notDoneCount};
    // }
    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    // => 메모이제이션으로 어떤 조건일때만 실행하도록 변경
    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};
    }, [todos]) // deps의 todos 넣다 뺏다로 확인
    // 1. useMemo는 콜백함수의 반환값을 그대로 반환받아서 변수에 할당 가능
    // 2. 종속된 배열인 deps []를 기준으로 메모이제이션한다. 비워두면 처음에만 한번 실행하고 끝, 다시 실행 안됨
    // [todos] 넣으면 todos가 바뀔때마다 실행

    return <div className="List">
        <h4>Todo List🪭</h4>
        <div>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
        </div>
        <input
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
        />
        <div className="todos_wrapper">
            {/*{todos.map((todo)=>{*/}
            {filteredTodos.map((todo) => {
                // return <div>{todo.content}</div>
                return <TodoItem
                    key={todo.id}
                    {...todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}/>
            })}
        </div>
    </div>
}
export default List