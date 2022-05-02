// 여러 줄을 통해 주어지는 입력을 처리하세요.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var inputs = [];

rl.on("line", function(line){
    inputs.push(line);
    if(line === 'exit'){
        rl.close();
    }
})
rl.on("close", function(){
    for(var i = 0; i < inputs.length-1; i++){
        console.log(inputs[i]);
    }
    process.exit;
})

// r1.on('line', function(x) {
//     if(x==='exit'){
//         r1.close();
//     }
//     console.log(x);
// }).on('close', function() {
//     process.exit();
// });