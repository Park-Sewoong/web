/*지시사항을 따라 작성해주세요*/

/*1. index.html 파일을 참고해 주어진 변수들 완성시키기*/

const target = document.querySelector('.attend'); //올바른 값을 작성해주세요.   버튼
const inputName = document.querySelector('input'); //올바른 값을 작성해주세요.    input 태그
const attendee = document.querySelector('#attendee'); //올바른 값을 작성해주세요.     p 태그
                // = document.getElementById('attendee')
/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
  /*여기에 작성해주세요.*/
  //두개 선택하기
  //1. attendee 안에서 텍스트를 수정하는 방법!
  
  attendee.textContent = inputName.value;
  // attendee.innerText
  // attendee.innerHTML
  //2. inputName에 작성된 input을 받아오는 방법!
  //console.log(inputName.value)
  
  //attendee.innerHTML += `<p>${inputName.value}</p>`;
}
    

target.addEventListener("click", attend);
