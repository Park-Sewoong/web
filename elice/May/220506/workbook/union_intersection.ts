interface Doctor {
    name: string;
    age: number;
  }
  interface Engineer {
    name: string;
    skill: string;
  }
  
  // Docter 인터페이스와 Engineer 인터페이스를 합친 타입을 선언하세요.
  type Capt = Doctor & Engineer;
  
  // 함수의 매개변수 타입을 수정하세요.
  function introduce(person: Capt) {
    console.log(person.name); // 정상 동작
    console.log(person.age); // 타입 오류
    console.log(person.skill); // 타입 오류
  }
  
  // 채점을 위한 코드입니다. 수정하지 마세요.
  export { introduce };