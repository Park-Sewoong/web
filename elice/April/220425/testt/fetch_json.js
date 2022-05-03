// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function handleClick(e) {
    //새로고침 방지
    e.preventDefault();
    
    const colorValue = inputColor.value;
    
    fetch('data.json')
    .then(res => res.json()) // data 가공, 읽을수 있는 형태로 바꿔준다. 고정작업 매번 해줘야함
    .then(data => {
//데이터 가지고 놀기, data 에서 colorValue 에 해당하는 인자 찾아서...
//배열의 요소 중 color가 사용자가 입력한 색과 일치하는 요소를 찾음
        // console.log(data);
        const selectedColor = data.find((datum) => datum.color === colorValue)
        // console.log(selectedColor);
        
        // if(!selectedColor) {
        //     alert('색을 입력해주세요!') 잘못된 값을 입력했을때
        //     inputColorElement.value = "" 입력후 초기화
        //     return;
        // }
        //찾은 요소는 객체인데 그 value 값이 헥사코드임
        hexaCodeElement.innerHTML = selectedColor.value;
        hexaCodeElement.style.color = selectedColor.value;
  })
}

const inputcColorElement = document.getElementById("inputColor");
const buttonSubmitElement = document.getElementById("buttonSubmit");
const hexaCodeElement = document.getElementById("hexaCode");

buttonSubmitElement.addEventListener('click', handleClick)
