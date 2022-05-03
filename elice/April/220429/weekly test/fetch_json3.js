
// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function countDate(e) { 
    // 새로고침 방지
  
    e.preventDefault()
    
    const userInputNumber = inputElem.value 
    
    fetch('coronaData.json')
      .then(response => response.json())
      .then(datas => { 
        const foundDatas = datas.filter(data => data.new_cases >= userInputNumber)
        
        resultElem.innerHTML = foundDatas.length
      })
    
  }
  
  
  
  const inputElem = document.querySelector('#inputNumber')
  const buttonElem = document.querySelector('#buttonSubmit')
  const resultElem = document.querySelector('#numberOfDates')
  
  buttonElem.addEventListener("click", countDate)