let x = 10; // x라는 변수에 10을 할당한다.

function timesTen(a) { // 인자를 받아 10을 곱하는 timeTen 함수를 선언한다.
  return a * 10;
}

let y = timesTen(x); // x 를 파라미터로 전달하여 timesTen 함수를 호출하고, 그 리턴값을 y 라는 변수에 저장한다.

console.log(y); // 100 y를 콘솔에 찍어본다

// 지시사항 1
function cubeVolume(n) {
    return Math.pow(n, 3) 
}

let z = cubeVolume(3);

console.log(z);

// 채점을 위한 코드입니다. 수정하지 말아주세요.
module.exports.cubeVolume = cubeVolume;
