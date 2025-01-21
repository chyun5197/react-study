import {useEffect} from "react";

const usePageTitle = (title) => {
    useEffect(()=>{ // 타이틀 변경
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title]);
}
export default usePageTitle;