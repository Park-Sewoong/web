// addWord 함수를 작성합니다.
const addWord = (e) => {

    e.preventDefault()
  
    const newWord = wordInput.value
    addEntryToDb("programmingwords", newWord)  
  }
  
  
  // deleteList 함수를 작성합니다.
  const deleteList = (e) => {
  
    e.preventDefault()
  
    clearAllEntries("programmingwords")
  }