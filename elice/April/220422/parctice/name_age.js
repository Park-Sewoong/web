// 함수(1개 혹은 여러개)를 자유롭게 구현해 부세요.
const makeAdultList = (humanList) => {
    let nameTags = ""
    let ageTags = ""
    humanList.forEach((human) => {
      if (human.age < 20) {
        return
      }
      
      nameTags += `<li>${human.name}</li>`
      ageTags += `<li>${human.age}살</li>`
    })
    
    return [nameTags, ageTags]
  }
  
  
  
  const makeChildList = (humanList) => {
    let nameTags = ""
    let ageTags = ""
    humanList.forEach((human) => {
      if (human.age >= 20) {
        return
      }
      
      nameTags += `<li>${human.name}</li>`
      ageTags += `<li>${human.age}살</li>`
    })
    
    return [nameTags, ageTags]
  }