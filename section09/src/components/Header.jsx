import "./Header.css"

// 체크할때 헤더는 매번 리렌더링 될필요없음
const Header = () => {
    return <div className="Header">
        <h3>오늘은 📆 </h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
}

