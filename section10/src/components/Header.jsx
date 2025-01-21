import "./Header.css"
import {memo} from "react";
const Header = () => {
    return <div className="Header">
        <h3>오늘은 📆 </h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
}

// export default Header
// 헤더를 최적화해서 반환(자신이 받는 props 변경 없으면 리렌더링 안하도록)
// const memoizedHeader = memo(Header);
// export default memoizedHeader;
export default memo(Header); // 위 두줄