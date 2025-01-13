console.log('hello node.js')

// Common JS(CJS) 모듈 시스템
// const moduleData = require("./math")
// console.log(moduleData.add(10,20))
// console.log(moduleData.sub(10,20))
//
// // 구조분해할당
// const {add, sub} = require('./math')
// console.log(add(10,20))
// console.log(sub(10,20))

// ES Module(ESM) 시스템
import {add, sub} from "./math.js"; // .js 확장자명 필수로 기입해줘야함
console.log(add(10,20))
console.log(sub(10,20))

import divi, {mul} from "./math.js";
console.log(mul(10,20))

// import divi from "./math.js"; // as 별칭 맘대로, 위에 합침
console.log(divi(10,20))
console.log()

import rdColor from "randomColor";
const color = rdColor();
console.log(color)

