// 나라와 수도가 들어있는 country 딕셔너리 입니다. 수정하지 마세요!
var country = {
    대한민국: "서울",
    베트남: "하노이",
    브라질: "브라질리아",
    프랑스: "파리",
    미국: "워싱턴",
    칠레: "산티아고",
    체코: "프라하",
    러시아: "모스크바",
    중국: "베이징",
    스페인: "마드리드",
    이집트: "카이로",
    영국: "런던",
  };
  
  // 지시사항을 참고하여 코드를 작성하세요.
  let chile = country['칠레'];
  
  let name = '벨기에';
  
  country['벨기에'] = '브뤼셀';
  
  delete country['중국'];
  
  // 값을 확인하기 위한 코드입니다.
  console.log(chile);
  console.log(country);
  