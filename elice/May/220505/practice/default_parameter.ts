// lastWord를 Default Parameter 형식으로 수정해주세요.
function say(fristWord: string, lastWord: string = "타입스크립트") {  
    return fristWord + " " + lastWord;
  }
  
  console.log(say("엘리스")) // "엘리스 타입스크립트" 출력