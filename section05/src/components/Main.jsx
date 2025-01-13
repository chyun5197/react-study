/*
# JSX 주의사항
1. 중괄호 내부에는 js 표현식만 넣을 수 있다. (제어문X)
2. 숫자, 문자열, 배열 타입만 렌더링 | 불, undefined, null은 X
3. 최상위 태그는 반드시 하나여야만 한다. (main, header, 빈태그<> 등)
*/
import "./Main.css";
const Main = () => {
    // const number = 10;
    // return (
    //     <main>
    //         <h1>main</h1>
    //         <h2>{number%2 === 0 ? "짝수":"홀수"}</h2>
    //     </main>
    // );
    const user = {
        name: "최현",
        isLogin: true,
    };

    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ):(
    //             <div>로그인</div>
    //         )}
    //     </>
    // );
    if (user.isLogin) {
        // return <div style={{
        //     backgroundColor:"red",
        //     borderBottom:"5px solid blue",
        // }}>로그아웃</div>;
        return <div className="logout">로그아웃</div>
    }else{
        return <div>로그인</div>;
    }
};
export default Main;