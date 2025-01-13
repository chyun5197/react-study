// function Button(props){
//     console.log(props);
//     return <button style={{color:props.color}}>
//         {props.text} - {props.color.toUpperCase()}
//     </button>
// }
function Button({text, color, children}) {
    const onClickButton = (e) => {
        console.log(e); // e는 합성 이벤트(SyntheticBaseEvent) 객체
        console.log(text);
    };

    return <button
        style={{color:color}}
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
    >
        {text} - {color.toUpperCase()}
        {children}
    </button>
}

// 디폴트 속성 전달
Button.defaultProps = {
    color:"black",
};

export default Button;