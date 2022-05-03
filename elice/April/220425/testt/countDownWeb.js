// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.


function handleClick(e) {

    e.preventDefault();
    
    setTimeout(() => {
        const value = nameElement.value;
        alert(`입력된 이름: ${value}`)
    },2000)
}


const nameElement = document.getElementById('inputName');
const buttonElement = document.getElementById('buttonSubmit')

buttonElement.addEventListener('click', handleClick)