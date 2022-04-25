// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = []

rl.on("line", function(line){
    input.push(line)
}).on("close", function(){

    let num1 = +input[0].split(' ')[0]
    let op = input[0].split(' ')[1]
    let num2 = +input[0].split(' ')[2]

    switch(op) {
        case '>':
            console.log(num1 > num2)
            break;
        case '==':
            console.log(num1 == num2)
            break;
        case '<':
            console.log(num1 < num2)
            break;
    }
    
    
    process.exit();
})