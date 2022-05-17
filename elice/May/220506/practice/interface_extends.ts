interface Animal {
    makeSoundd(): void
  }
  
//   interface Dog extends Animal{  
//     run(): void
//   }
  
//   // Dog class는 Animal interface를 implements했기 때문에 
//   // interface가 가지고 있는 함수를 class에서 구현시켜야합니다.
//   class BullDog implements Dog {
//       makeSound(): void {
//           console.log("멍멍");
//       }
      
//       run(): void {
//           console.log("달리기");
//       }
//   }
  
//   const bullDog = new BullDog();
//   bullDog.makeSound(); // 멍멍 출력
//   bullDog.run(); // 달리기 출력