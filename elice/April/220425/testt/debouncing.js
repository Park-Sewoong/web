// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

//debouncing
let timeoutID

function handleInput(e) {

    //첫번째 돌때 timeoutID 가 없으므로
    if (timeoutID) {
        clearTimeout(timeoutID);
    }
    
    timeoutID = setTimeout(() => {
        const value = nameElement.value;
        alert(`입력된 이름: ${value}`)
    },1000)
}

const nameElement = document.getElementById('inputName');

nameElement.addEventListener('input', handleInput)


//throttling
