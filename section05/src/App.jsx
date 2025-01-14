import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from "./components/Button";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

/*
리렌더링 되는 케이스
1. state 값 변할때
2. props 값 변할때
3. 부모 컴포넌트 변할때
그래서 부모인 App에서 +버튼 누르면 자식인 Bulb 컴포넌트도 리렌더링된다(로그로 확인)
따라서 관련없는 컴포넌트끼리는 분리해줘야 -> Counter 컴포넌트 추가 후 jsx 파일로 따로 생성
 */

// App 컴포넌트 - 부모컴포넌트
// Root 컴포넌트가 될거임
function App() {
    const buttonProps = {
        text: "메일",
        color: "red",
        a: 1,
        b: 2,
        c: 3,
    };

    // const [값, 함수] = useState(초기값)
    // const [count, setCount] = useState(0); Bulb 컴포넌트로 옮김
    // const [light, setLight] = useState("OFF"); Bulb 컴포넌트로 옮김
    // let lgiht = 'OFF' -> 이런 JS 일반 변수로는 렌더링 안됨. useState 사용해야함
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
            <h1> 안녕 리액트</h1>

            {/*<Button text={"메일"} color={"red"} />*/}
            <Button {...buttonProps} />
            <Button text={"카페"}/>
            <Button text={"블로그"}>
                {/*<div>자식요소</div>*/}
                <Header/>
            </Button>

            {/*<div>*/}
            {/*    <h1>{count}</h1>*/}
            {/*    <button onClick={() => {*/}
            {/*        setCount(count + 1);*/}
            {/*    }}> +*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h1>{light}</h1>*/}
            {/*    <button onClick={()=>{*/}
            {/*        setLight(light === 'ON'? 'OFF':'ON');*/}
            {/*    }}>*/}
            {/*        {light === 'ON'? '끄기':'켜기'}*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    /!*    <h1>{light}</h1>*!/*/}
            {/*    /!*<Bulb light={light}/>*!/*/}
            {/*    <Bulb light={light}/>*/}
            {/*    <button onClick={() => {*/}
            {/*        setLight(light === 'ON' ? 'OFF' : 'ON');*/}
            {/*    }}>*/}
            {/*        {light === 'ON' ? '끄기' : '켜기'}*/}
            {/*    </button>*/}
            {/*</div>*/}
            <Bulb />
            <Counter />

            <Register />

            <HookExam />
        </>
    )
}

// Header 함수 컴포넌트 (대문자시작) - 자식컴포넌트
// function Header(){ //아래와 같음
// const Header = () => {
//     return(
//         <header>
//             <h1>header</h1>
//         </header>
//     )
// }

export default App
