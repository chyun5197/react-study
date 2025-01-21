import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

// id에 맞는 일기 찾아 리턴, 없으면 이전 페이지로
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => { // 컴포넌트 생성 전인 처음부터 navigate 할 수 없기에 useEffect, useState로 사용
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));
        if(!currentDiaryItem){ // 없는 일기일때
            window.alert("존재하지 않는 일기입니다.")
            nav('/', {replace:true});
        }
        // return currentDiaryItem;
        setCurDiaryItem(currentDiaryItem);
    }, [id]);
    return curDiaryItem;
}
export default useDiary