// 첫 번째 줄에 입력된 여러 숫자 중, "두 번째 줄에 입력된 숫자"번째로 큰 숫자를 출력하세요.
// 여러 줄을 통해 주어지는 입력을 처리하세요.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
let count = 0;


rl.on('line', function (x) {
    // To do: 두 줄 입력 받기, 두 줄 입력 후엔 close 로 가기
    count ++; // count 하나씩 증가
    input.push(x);
    
    if(count === 2) {  // 두줄 다 읽었으면 close 로 내려가기
        rl.close();
    }
    
    
}).on('close', function(){
    //To do: 첫번째 줄 중에서 N 번째로 큰 수 찾기
    //To do 1: 첫번째 줄과 N 번째 줄 정의하기
    //To do 2: 첫번째 줄에서 N 번째 큰 수 출력
    
    const arrayToHandle = input[0].split(" "); // 첫 번째 arrayToHandle, split 
    const N = input[1]; // 두 번째 arrayToHandle
    arrayToHandle.sort(function(a,b){ // 첫 번째 줄 정렬
        return parseInt(b)-parseInt(a); // 내림차순으로 정렬
    })
    
    console.log(arrayToHandle[N-1])
    
    process.exit()
})


// rl.on('line', function(x){
//     //To do: 두 줄 입력 받기, 두 줄 입력 후엔 close로 가기
//     count ++;
//     input.push(x);
    
//     if(count === 2){
//         rl.close();

//     }
// }).on('close', function(){
//     //To do 2: 첫번째 줄에서 N번째 큰 수 출력
//     const arrayToHandle = input[0].split(" ").map((i) => parseInt(i));
//     const N = input[1];
    
//     //첫번째 줄 정렬
//     arrayToHandle.sort(function(a,b){
//         return b-a
//     })
//     console.log(arrayToHandle[N-1]);
//     process.exit();
// })