import './TodoItem.css'
import {memo} from "react";
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDeleteButton = () => {
        onDelete(id);
    }
    return (
        <div className="TodoItem">
        <input
            onChange={onChangeCheckbox}
            checked={isDone}
            type="checkbox"
        />
        <div className="content">{content}</div>
        {/*<div className="date">{date}</div>*/}
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
    )
}
// export default TodoItem

// export default memo(TodoItem)
// 하지만 onUpdate, onDelete는 함수 객체라서 매번 생성해서 props에 보내므로
// 체크하지 않은 다른 아이템도 매번 렌더링됨.
// (함수 객체는 얕은 비교를 하므로 같은 값이라도 주소 바뀌면 변한걸로 인식)
// 상위의 App.jsx에서의 모든 함수가 매번 재실행 리렌더링됨

// => memo함수를 써서 최적화하는 해결책. 2번째 인자
// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O
//     if(prevProps.id!==nextProps.id) return false;
//     if(prevProps.isDone!==nextProps.isDone) return false;
//     if(prevProps.content!==nextProps.content) return false;
//     if(prevProps.date!==nextProps.date) return false;
//     return true;
// })
// => but 불편하기에 useCallback을 사용하여 대체 - App.jsx에서
export default memo(TodoItem)