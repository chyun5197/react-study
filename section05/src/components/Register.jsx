/*
회원가입 폼
1. 이름
2. 생년월일
3. 국적
4. 자기소개
 */
import {useState, useRef} from "react";
const Register = () => {
    /* useState */
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    // 위 4개를 하나의 객체로 관리
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });
    // console.log(input);

    // 아래 4개 함수도 하나의 통합이벤트 핸들러로 관리
    const onChange = (e) => {
        // console.log(e.target.name, e.target.value);
        countRef.current++; // 역시 js변수로 진행하면 리렌더링 1회만 진행됨(매번 Register 함수 한번 실행)
        console.log(countRef.current); // 수정횟수 출력
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    // const onChangeName = (e) => {
    //     // console.log(e);
    //     // setName(e.target.value);
    //     setInput({
    //         ...input, //나머지 값은 그대로 유지. 해당코드 필수
    //         name: e.target.value
    //     })
    // };
    // const onChangeBirth = (e) => {
    //     // setBirth(e.target.value);
    //     setInput({
    //         ...input,
    //         birth: e.target.value
    //     })
    // };
    // const onChangeCountry = (e) => {
    //     // setCountry(e.target.value);
    //     setInput({
    //         ...input,
    //         country: e.target.value
    //     })
    // };
    // const onChangeBio = (e) => {
    //     // setBio(e.target.value);
    //     setInput({
    //         ...input,
    //         bio: e.target.value
    //     })
    // }

    /* useRef */
    // const refObj = useRef(0);
    // console.log("Register 렌더링");
    const countRef = useRef(0);
    const inputRef = useRef();
    const onSubmit = (e) => {
        if(input.name===""){ // 입력 빈값이면 입력할 값에 포커스 주기
            // 이름 입력하는 DOM 요소에 포커스
            // console.log(inputRef.current);
            inputRef.current.focus(); // 아래 ref={inputRef} 해놓은걸로 포커스
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name='name'
                    value={input.name}
                    onChange={onChange}
                    /*onChange={onChangeName}*/
                    placeholder={"이름"}
                />
                {/*{name}*/}
            </div>
            <div>
                <input
                    name='birth'
                    value={input.birth}
                    onChange={onChange}
                    type='date'
                />
                {/*{birth}*/}
            </div>
            <div>
                <select name='counTRY' value={input.country} onChange={onChange}>
                    <option></option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
                {/*{country}*/}
            </div>
            <div>
                <textarea name='bio' value={input.bio} onChange={onChange}/>
                {/*{bio}*/}
            </div>

            {/*<div>*/}
            {/*    <button onClick={() => {*/}
            {/*        refObj.current++;*/}
            {/*        console.log(refObj.current);*/}
            {/*    }}*/}
            {/*    >*/}
            {/*        ref +1*/}
            {/*    </button>*/}
            {/*</div>*/}

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}
export default Register;