const AlphabetCounter = {
    sentence: "",
    alphabetMap: {},
  
    setSentence: function (sentence) {
      this.sentence = sentence;
      return this;
    },
  
    buildAlphabetMap: function () {
      // this.sentence 로부터 알파벳 맵을 만들어
      // this.alphabetMap에 저장하세요.
      this.alphabetMap = 
          this.sentence
              .trim() // 공백 제거
              .toLowerCase() // 대문자를 소문자로 변경
              .split("") // 배열로
              .filter(c => c >= "a" && c <= "z") // a - z 사이 소문자 판별
              .reduce ((map, char) => {
                  if (!map[char]) map[char] = 0 //각각의 filter 들에 대한 map 적용
                  map[char]++
                  return map
              }, {}) // reduce 는 객체로 초기화 넣어준다
      
      return this;
    },
  
    buildResult: function () {
      // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
      const resultString = 
          Object.entries(this.alphabetMap)
              .reduce((acc, [alphabet, freq]) => `${acc} [${alphabet}: ${freq}]`, "")
              .trim()
              
      return `결과는 : ${resultString} 입니다.`;
    },
  };
  
  export default AlphabetCounter;
  