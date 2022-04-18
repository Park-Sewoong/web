var line = 5;
var result = "";

for (var i = 1; i < line * 2; i += 2) {
    for (var j = 1; j < ((line * 2) - i) / 2; j++) {
        result += " ";
    }
    for (var l = 1; l <= i; l++) {
        result += "*";
    }
    for (var k = 1; k < ((line * 2) - i) / 2; k++) {
        result += " ";
    }
    result += "\n";
}
console.log(result);

//피라미드 만들기
// let pyramid = function (n) {

//     for (let i = 1; i <= n; i++) {
//       let floor = '';
//       for (let j = 1; j < n; j++) {
//         if (n - i < j) {
//           floor += '**';
//         } else {
//           floor += ' ';
//         }
//       }
//       floor += '*';
//     }
//     return pyramid();
//   }
  