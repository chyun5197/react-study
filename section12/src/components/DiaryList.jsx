import "./DiaryList.css"
import Button from "./Button";
import DiaryItem  from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        // 원본 배열은 그대로고 정렬한 새로운 배열 반환
        return data.toSorted((a,b)=>{
            if (sortType === "oldest") {
                return Number(a.createdDate - b.createdDate);
            }else{
                return Number(b.createdDate - a.createdDate);
            }
        });
    }

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button onClick={()=>nav("/new")} text={"새 일기 쓰기"} type={"POSITIVE"} />
            </div>
            <div className="list_wrapper">
                {sortedData.map((item)=><DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}
export default DiaryList