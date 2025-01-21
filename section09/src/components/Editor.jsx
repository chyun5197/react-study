import './Editor.css'
import {useState, useRef} from 'react'
const Editor = ({onCreate}) => {
    const [content, setContent] = useState('')
    const contentRef = useRef()
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const onKeyDown = (e) => {
        if(e.key==='Enter'){ // 엔터로도 추가 가능하도록
            onSubmit()
        }
    }
    const onSubmit = () => {
        if(content === '') { // 비어있는값은 추가 안하도록 종료
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('') // 입력후 input값 비워지도록
    }
    return <div className="Editor">
        <input
            ref={contentRef}
            value={content}
            onKeyDown={onKeyDown}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
    </div>
}
export default Editor