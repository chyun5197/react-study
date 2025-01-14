import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import {useState, useEffect, useRef} from 'react'

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const isMount = useRef(false)
    // useEffect(()=>{
    //     console.log(`count: ${count} / input: ${input}`);
    // }, [count, input]);
    // // [count, input] : 의존성 배열 (dependency array) (deps)

    // 1. mount : 탄생
    useEffect(() => {
        console.log("mount");
    }, []) //deps 빈 배열이면 최초 1번만 실행

    // 2. update : 변화, 리렌더링
    useEffect(() => {
        if(!isMount.current){ // 처음 실행(mount)할때는 로그 안찍도록
            isMount.current = true;
            return;
        }
        console.log("update");
    }) // deps 생략하면 업데이트될때마다 매번 실행

    // 3. unmount : 죽음
    // Even.jsx

    const onClickButton = (value) => {
        setCount(count + value);
        // console.log(count); setCount는 비동기함수라서 이렇게 로그로 실시간 확인은 어려움
        // 비동기함수의 호출은 바로 되어도 수행완료는 나중에 되기 때문
    }

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={input} onChange={(e) => {
                    setInput(e.target.value);
                }}/>
            </section>
            <section>
                <Viewer count={count}/>
                {count%2 === 0? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    )
}

export default App
