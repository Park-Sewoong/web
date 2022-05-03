//1. 지시사항에 따라 함수 코드를 완성합니다.
function calculateVolume(e) {
    e.preventDefault();

    const h = document.getElementById("height").value
    const r = document.getElementById("radius").value
    
    const V = Math.PI * Math.pow(r,2) * h
    const V2 = V.toFixed(2)
    
    const volume = document.getElementById("volume")
    
    return (volume.innerHTML = `${V2}`)


}

// 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
const button = document.getElementById("calc")
button.addEventListener("click", calculateVolume)