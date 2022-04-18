// 지시사항을 참고하여 코드를 작성하세요.
function getMaxNumber (arr) {
    let maxNum = arr[0];
    let length = arr.length;
    
    for (let i = 0; i < length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}