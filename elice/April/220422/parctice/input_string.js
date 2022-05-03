/**
1. input String(str)이 palindrome 이 맞으면 true, 아니면 false를 반환하는 함수를 작성하세요.
palindrome이란 앞에서부터 읽으나 뒤에서부터 읽으나 동일한 단어나 구를 뜻합니다.
palindrome 예시: refer, madam, redivider, deified, civic, radar, level, rotor, kayak
*/

function isPalindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');

  return reverseStr === lowRegStr;
}
console.log(isPalindrome("A man, a plan, a canal. Panama"));


/**
2. input String(str)으로 들어온 문자열이 isogram이 맞으면 true, 아니면 false를 반환하는 함수를 작성하세요.
isogram은 문자의 반복없이 구성된 단어나 문장을 가르킵니다.
*/

function isIsogram(str) {
    str = str.toLowerCase();
    str = str.split("");
    str = str.sort();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            return false;
        }
    }

  return true;
};

module.exports = { isPalindrome, isIsogram };
