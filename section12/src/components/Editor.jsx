import "./Editor.css"
import EmotionItem from "./EmotionItem.jsx";
import Button from "./Button.jsx";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants.js"
import {getDateToString} from "../util/getDateToString.js"

// 모듈로 뺌(util/getDate..)
// const getDateToString = (targetDate) => {
//     // 날짜 -> YYYY-MM-DD 문자열로
//     let year = targetDate.getFullYear()
//     let month = targetDate.getMonth() + 1;
//     let day = targetDate.getDate();
//
//     if(month<10){
//         month = `0${month}`;
//     }
//     if(day<10){
//         day = `0${day}`;
//     }
//
//     return `${year}-${month}-${day}`;
// }

const Editor = ({initData, onSubmit}) => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });
    const nav = useNavigate();

    useEffect(() => {
        if(initData){
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
            });
        }
    }, [initData]);

    const onChangeInput = (e)=> {
        console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
        console.log(e.target.value); // 입력된 값이 무엇인지?

        let name = e.target.name;
        let value = e.target.value;

        if(name==="createdDate"){
            // 문자열을 날짜 객체로 변환
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        })
    }

    const onSubmitButtonClick = () => {
        onSubmit(input);
    }
    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input
                    name = "createdDate"
                    onChange={onChangeInput}
                    value={getDateToString(input.createdDate)}
                    type="date"
                />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            onClick={()=>onChangeInput({
                                target : {
                                    name : "emotionId",
                                    value : item.emotionId,
                                }
                            })}
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name = "content"
                    value = {input.content}
                    onChange={onChangeInput}
                    placeholder="오늘은 어땟나요?"
                />
            </section>
            <section className="button_section">
                <Button
                    onClick={()=>nav(-1)}
                    text={"취소하기"}
                />
                <Button
                    onClick={onSubmitButtonClick}
                    text={"작성완료"}
                    type={"POSITIVE"}
                />
            </section>
        </div>
    )
}
export default Editor;