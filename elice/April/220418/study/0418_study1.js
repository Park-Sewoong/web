const array = [4, 3, 2, 4, 5, 35, 35];
//for loop : traditional

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//foreach 결과를 다른 배열로 받을수 없다
const forEachArray = array.forEach((item) => {
    console.log(forEachArray)
});

//map 결과를 다른 배열로 받을수 있다
const testArray = array.map((item) => {
    console.log(forEachArray)
});

//reduce
const reduceArray = array.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
}, 1) // 맨뒤 숫자자리 초기값 --> 배열 다곱해진다.

console.log(reduceArray)

//factoial

function factorial (n) {
    let arr = [];
    for (let i=1; i<=n; i++) {
      arr.push(i);
    }
    let result = arr.reduce((prev,cur)=>{
      return prev * cur
    },1);
    return result;
  }

  function easyFactorial(n) {
    let initial = 1;
    for (let i = 1; i <= n; i++) {
        initial *= i;
    }
    return initial;
  }


//To do : Flatten Array
const GIVEN_ARRAY = [[4, 2, 3], [4, [3, 4, [5, 3]], 5], [4, 3, 5]];
const RESULT_ARRAY = [4, 2, 3, 4, 3, 4, 5, 3, 5, 4, 3, 5];


const GIVEN_ARRAY2 = [[5, [3, [5, [6, [5, 4]]]], 3, [6, 246]]];
const RESULT_ARRAY2 = [5, 3, 5, 6, 5, 4, 3, 6, 246];

const HINT_ARRAY = [[5, 3], [5, 4], [5, 5], [5,6]];
const HINT_RESULT = [5, 3, 5, 4, 5, 5, 5, 6];


function flatternArray(giveArray) {
    const resultArray = givenArray.reduce((prev, curr) => {
        console.log(prev, curr);
        return prev.concat(curr);
    }, []);
    return resultArray
}
flatternArray(HINT_ARRAY);




function flatternArray(giveArray) {

    console.log(typeof givenArray);
    if (typeof givenArray !== 'object') {
        return givenArray;
    }

    const resultArray = givenArray.reduce((prev, curr) => {
        console.log(prev, curr);
        return prev.concat(flattenArray(curr));
    }, []);
    return resultArray;
}
let finalResult = flatternArray(GIVEN_ARRAY2);
console.log(finalResult);