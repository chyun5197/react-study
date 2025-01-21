import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import {Navigate, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {DiaryDispatchContext} from "../App.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const New = () => {
    const nav = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext);

    usePageTitle("새 일기 쓰기");
    // 커스텀훅으로(usePageTitle)
    // useEffect(()=>{ // 타이틀 변경
    //     const $title = document.getElementsByTagName("title")[0];
    //     $title.innerText = "새 일기 쓰기"
    // }, [])

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav('/', {replace:true}); // 일기 등록 후 홈으로 이동, 단순 뒤로가기 아닌 추가 후 이전 url로 이동 {뒤로가기 방지}
    };
    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={
                    <Button onClick={() => nav(-1)}
                            text={"< 뒤로 가기"}/>
                }
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
}
export default New