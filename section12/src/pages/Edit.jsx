import {useParams, useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    usePageTitle(`${params.id}번 일기 수정`);

    const curDiaryItem = useDiary(params.id);
    // 윗줄 커스텀훅으로 뺌(hooks/useDiary.jsx)
    // const data = useContext(DiaryStateContext);

    // const [curDiaryItem, setCurDiaryItem] = useState();
    // useEffect(() => { // 컴포넌트 생성 전인 처음부터 navigate 할 수 없기에 useEffect, useState로 사용
    //     const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
    //     if(!currentDiaryItem){ // 없는 일기일때
    //         window.alert("존재하지 않는 일기입니다.")
    //         nav('/', {replace:true});
    //     }
    //     // return currentDiaryItem;
    //     setCurDiaryItem(currentDiaryItem);
    // }, [params.id]);

    const onClickDelete = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            onDelete(params.id);
            nav('/', {replace:true});
        }
    };

    // const getCurrentDiaryItem = () => {
    //     const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
    //     if(!currentDiaryItem){ // 없는 일기일때
    //         window.alert("존재하지 않는 일기입니다.")
    //         nav('/', {replace:true});
    //     }
    //     return currentDiaryItem;
    // }
    // const currentDiaryItem = getCurrentDiaryItem();

    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정하시겠습니까?")){
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav("/", {replace:true});
        }
    };

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button onClick={()=>nav(-1)} text={"< 뒤로 가기"} />}
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    )
}
export default Edit;