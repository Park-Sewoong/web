// 지시사항에 따라 함수를 구현합니다.
function getSeriousCity (coronaData) {
    let bigCities = coronaData.filter(city => 
        city.coronaCount >= 100
    
    )
    return bigCities;
}







// 아래 배열 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
const coronaData = [
  { name: 'seoul', coronaCount: 240 },
  { name: 'gyeonggi', coronaCount: 200 },
  { name: 'busan', coronaCount: 98 },
  { name: 'chungnam', coronaCount: 115 },
  { name: 'gyeongnam', coronaCount: 78 },
  { name: 'ulsan', coronaCount: 27 },
  { name: 'gangwon', coronaCount: 28 },
  { name: 'jeju', coronaCount: 4 },
  { name: 'daejeon', coronaCount: 22 },
  { name: 'incheon', coronaCount: 28 },
  { name: 'gwangju', coronaCount: 13 }
]


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [coronaData], func: getSeriousCity }
