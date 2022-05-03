// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
let isInThrottle
function increaseScoreDuringTyping() {
  if (isInThrottle) {
    return
  }
  
  isInThrottle = true
  
  // 타이머 세팅
  setTimeout(() => {
    const score = document.querySelector('#score')
    const newScore = parseInt(score.innerText) + 1
    score.innerText = newScore
    
    isInThrottle = false
  }, 500)
}

const nameElem = document.querySelector('#inputName')

nameElem.addEventListener("input", increaseScoreDuringTyping) 