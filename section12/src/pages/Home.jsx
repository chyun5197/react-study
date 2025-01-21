import {useSearchParams} from "react-router-dom"; // 쿼리스트링 파라미터 사용
import {useState, useContext} from "react";
import {DiaryStateContext} from "../App.jsx";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle.jsx";

// 이번달의 데이터만 필터링
const getMonthlyData = (pivotDate, data) => {
    //이번달 시작시간 설정
    const beginTime = new Date(
        pivotDate.getFullYear(), pivotDate.getMonth(),
        1, 0, 0).getTime();

    //이번달 마지막시간 설정
    const endTime = new Date(
        pivotDate.getFullYear(), pivotDate.getMonth()+1,
        0, 23, 59, 59).getTime();
    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
}

const Home = () => {
    // const [params, setParams] = useSearchParams();
    // console.log(params.get("value")); // http://localhost:5173/?value=hello
    // return <div>Home</div>
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    usePageTitle("감정 일기장");

    const monthlyData = getMonthlyData(pivotDate, data);
    console.log(monthlyData);

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${
                    pivotDate.getMonth() + 1
                }월`}
                leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
                rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
            />
            <DiaryList data={monthlyData}/>
        </div>
    )
}
export default Home