/*
hook
1. hook은 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
2. 제어문 내에서 호출 불가능
3. Custom Hook 제작 가능
 */
import {useState} from "react";
// const state = useState(); // 1. 에러: Invaild hook call

import useInput from "./../hooks/useinput"

const HookExam = () => {
    // if(true){const state = useState()} // 2. 에러

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    );
}
export default HookExam;