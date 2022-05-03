// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function handleClick(e){

    e.preventDefault()
    
    fetch("https://randomuser.me/api/?password=upper,lower,number")
        .then((res) => res.json())
        .then((result) => {
              passwordElement.innerHTML = result.results[0].login.password;
              console.log(result)
        })
}

const buttonElement = document.getElementById("buttonSubmit")
const passwordElement = document.getElementById("password")

buttonSubmit.addEventListener("click", handleClick)