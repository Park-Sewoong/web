// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function handleClick(e) {
    e.preventDefault()
    
    const colorValue = inputColor.value;
    
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
        
            const selectedColor = data.find((datum) => datum.color === colorValue)
            
            hexaCodeElement.innerHTML = selectedColor.value;
        })
}


const inputColorElement = document.getElementById("inputColor")
const buttonSubmitElement = document.getElementById("buttonSubmit")
const hexaCodeElement = document.getElementById("hexaCode")

buttonSubmitElement.addEventListener("click", handleClick)