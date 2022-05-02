/*지시사항을 따라 작성해주세요*/
let sum = 0;

for (var i = 1; i <= 200; i++) {
    for (var j = 2; j <= i; j++) {
        if (i % j === 0) {
            break;
        }
    }
    if (j === i) {
        sum += j;
    }
}

document.write(sum);