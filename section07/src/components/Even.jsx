import {useEffect} from "react";
const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수 : mount 될 때 실행되서 unmount되면 종료. 현재 짝수일때만 로그
        return () => {console.log("unmount")};
    }, []);
    return <div>짝수입니다</div>
}
export default Even;