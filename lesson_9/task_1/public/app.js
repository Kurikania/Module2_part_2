import {myUtils} from './index.js'

let array = [1,2,3,4,5,5,6];
let array3 = [0,-2,0,26,36,153];
let array2 = [0,[-2,8],0,26,36,153];


console.log(myUtils.minElem(array))
console.log(myUtils.maxElem(array))
console.log(myUtils.average(array3))
console.log(myUtils.maxElem(array3))
console.log(myUtils.copyArr(array2))