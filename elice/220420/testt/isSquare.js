//배열의 모든 요소가 square number(정수의 제곱)인지 확인하는 함수를 작성하십시오.
const isSquare = (array) => {

    if(array.length === 0) {
        return undefined;
    }
    
// 배열의 요소 중에 square number가 아니거나 음의 정수가 있을 경우 모두 false를 반환합니다
    let result = array.every((item) => Number.isInteger(Math.sqrt(item)));
    
    return result;

};

console.log(isSquare([1, 4, 9, 81, 36, 1024]));

module.exports = { isSquare };
