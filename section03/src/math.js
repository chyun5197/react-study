function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

// Common JS(CJS) 모듈 시스템
// module.exports ={
//     add, sub
// };

// ES Module(ESM) 시스템
export {add,sub};

export function mul(a,b){
    return a*b;
}

export default function division(a,b) {
    return a/b;
}