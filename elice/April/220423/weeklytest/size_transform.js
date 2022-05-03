//1. 지시사항에 따라 함수 코드를 완성하세요.
function calculate(e) {
    e.preventDefault();
    
    const krsize = document.getElementById("mm").value
    
    const inches = krsize / 25.4
    
    const usSize= (3 * inches) - 22
    const usSize2 = usSize.toFixed(2)
    const ukSize = (3 * inches) - 23
    const ukSize2 = ukSize.toFixed(2)
    const euSize = 1.27 * (ukSize + 23) + 2
    const euSize2 = euSize.toFixed(2)
    
    document.getElementById("us_size").value = usSize2
    document.getElementById("uk_size").value = ukSize2
    document.getElementById("eu_size").value = euSize2
    


}


// 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
const button = document.getElementById("calc")
button.addEventListener("click", calculate)