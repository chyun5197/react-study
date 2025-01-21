import './App.css'
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import {useReducer, useRef, createContext, useEffect, useState} from "react";
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import {getEmotionImage}     from "./util/get-emotion-image.js";
import Button from './components/Button'
import Header from './components/Header'

// 1. "/" : 모든 일기 조회 Home 페이지
// 2. "/new" : 새로운 일기 작성 New 페이지
// 3. "/diary" : 일기 상세 조회 Diary 페이지
// 4. "/edit" : 일기 수정 Edit 페이지

// const mockData = [
//     {
//         id: 1,
//         createdDate: new Date("2025-01-21").getTime(),
//         emotionId: 1,
//         content: "1번 일기"
//     },
//     {
//         id: 2,
//         createdDate: new Date("2025-01-20").getTime(),
//         emotionId: 2,
//         content: "2번 일기"
//     },
//     {
//         id: 3,
//         createdDate: new Date("2024-12-08").getTime(),
//         emotionId: 3,
//         content: "3번 일기"
//     },
//
// ]

function reducer(state, action) {
    let nextState;
    switch (action.type) {
        case 'INIT': return action.data; // 로컬 스토리지에 있는값으로 불러옴
        case 'CREATE': {
            nextState = [action.data, ...state];
            break;
        }
        case 'UPDATE': {
            nextState = state.map(
                (item) => String(item.id) === String(action.data.id) ? action.data : item
            );
            break
        }
        case 'DELETE': {
            nextState = state.filter((item) => String(item.id) !== String(action.id));
            break;
        }
        default: return state;
    }
    // 일기 추가,수정,삭제될때마다 로컬스토리지에 저장
    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    // const nav = useNavigate();
    // const onClickButton = () => {
    //   nav("/new");
    // }
    // const [data, dispatch] = useReducer(reducer, mock);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0); // 목데이터 다음 id부터
    const [isLoading, setIsLoading] = useState(true);// true:로딩중, false:로딩완료

    // localStorage.setItem('test', 'hello');
    // 로컬스토리지는 문자열 값만 저장하기에 객체 저장할때는 stringify()로 변환해서 저장
    // localStorage.setItem("person", JSON.stringify({name:"최현"}));
    // console.log(localStorage.getItem("test"));
    // console.log(JSON.parse(localStorage.getItem("person"))); // 문자열을 객체로 파싱
    // localStorage.removeItem("test");

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        if (!storedData) { // 없으면(undefined) 종료
            setIsLoading(false);
            return;
        }
        const parsedData = JSON.parse(storedData);
        if(!Array.isArray(parsedData)) { // 배열 아니면 종료
            setIsLoading(false);
            return;
        }

        let maxId = 0;
        parsedData.forEach((item) => {
            if(Number(item.id)>maxId){ // 로컬스토리지에서 가져온 값들은 모두 문자열이기에 숫자로 형변환해서 비교
                maxId = Number(item.id);
            }
        })

        idRef.current = maxId+1; // 새로운 일기 생성될때마다 id에 1증가

        dispatch({
            type: "INIT",
            data: parsedData
        });
        setIsLoading(false);
    }, [])

    // 새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) =>{
        dispatch({
            type:"CREATE",
            data:{
                id: idRef.current++,
                createdDate,
                emotionId,
                content
            }
        })
    }

    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type:"UPDATE",
            data:{
                id, createdDate, emotionId, content
            }
        })
    }

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type:"DELETE",
            id,
        })
    }

    if(isLoading){
        return <div>데이터 로딩중입니다..</div>
    }
    return (
        <>
            {/*<div>*/}
            {/*    <img src={getEmotionImage(1)} />*/}
            {/*    <img src={getEmotionImage(2)} />*/}
            {/*    <img src={getEmotionImage(3)} />*/}
            {/*    <img src={getEmotionImage(4)} />*/}
            {/*    <img src={getEmotionImage(5)} />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Link to="/">Home</Link>*/}
            {/*    <Link to="/new">New</Link>*/}
            {/*    <Link to="/diary">Diary</Link>*/}
            {/*</div>*/}
            {/*<button onClick={onClickButton}>New 페이지로 이동</button>*/}
            {/*<Header*/}
            {/*    title={"Header"}*/}
            {/*    leftChild={<Button text={"Left"}/>}*/}
            {/*    rightChild={<Button text={"Right"}/>}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    text={"123"}*/}
            {/*    onClick={() => {*/}
            {/*        console.log("클릭")*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    text={"123"}*/}
            {/*    type={"POSITIVE"}*/}
            {/*    onClick={() => {*/}
            {/*        console.log("클릭")*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    text={"123"}*/}
            {/*    type={"NEGATIVE"}*/}
            {/*    onClick={() => {*/}
            {/*        console.log("클릭")*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<button onClick={() => {*/}
            {/*    onCreate(new Date().getTime(), 1, "Hello")*/}
            {/*}}>*/}
            {/*    일기 추가 테스트*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}
            {/*    onUpdate(1, new Date().getTime(), 3, "수정된 일기")*/}
            {/*}}>*/}
            {/*    일기 수정 테스트*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}
            {/*    onDelete(1);*/}
            {/*}}>*/}
            {/*    일기 삭제 테스트*/}
            {/*</button>*/}
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{
                    onCreate,
                    onUpdate,
                    onDelete,
                }}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path={"/edit/:id"} element={<Edit/>}/>
                        <Route path="*" element={<Notfound/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}


export default App
