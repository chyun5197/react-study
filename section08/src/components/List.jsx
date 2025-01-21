import "./List.css"
import TodoItem from "./TodoItem";
import {useState} from "react";

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
    return <div className="List">
        <h4>Todo List🪭</h4>
        <input
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
        />
        <div className="todos_wrapper">
            {/*{todos.map((todo)=>{*/}
            {filteredTodos.map((todo)=>{
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