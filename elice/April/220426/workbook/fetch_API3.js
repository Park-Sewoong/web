// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function handleClick(e) {
    e.preventDefault()
    
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((result) => {
            dogElement.src = result.message;
            console.log(result.message);
            
        })
}

const buttonElement = document.getElementById("buttonSubmit")
const dogElement = document.getElementById("dogImage")

buttonElement.addEventListener("click", handleClick)

