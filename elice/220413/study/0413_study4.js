// 지시사항을 참고하여 코드를 작성하세요.

//1번 지시사항
const form = document.getElementById('form');
const input = document.getElementById('input');
const answer = document.getElementById('answer');

//2번 지시사항
form.addEventListener('submit', function (ev) {
    //기본적인 함수 기능을 수행하지않게 하는 문법
    ev.preventDefault();
    
    answer.textContent = input.value
    

})