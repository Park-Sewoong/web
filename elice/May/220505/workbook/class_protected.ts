class Sneakers {
    color: string;
    constructor(theColor: string) {
      this.color = theColor;
    }
    // printPrice()의 접근 제한자를 수정하세요.
    protected printPrice(unitInWon: number = 0) {
      return `The ${this.color} one is ${unitInWon} won.`;
    }
  }
  
  // Sneakers 클래스를 상속받는 Adidas 클래스를 작성하세요.
  class Adidas extends Sneakers {
      constructor(color: string) {
      super(color);
      }
      // Adidas 클래스 내에 printPrice() 메소드를 재정의하세요.
      printPrice(unitInWon: number = 0) {
          return `Thank you for choosing Adidas
  The ${this.color} one is ${unitInWon} won.`
      }
  }
    
    
    
  // 주석을 해제하여 결과를 확인해보세요.
  let toni = new Adidas("red");
  console.log(toni.printPrice(120000));
  
  // 채점을 위한 코드입니다. 수정하지 마세요.
  export { Adidas };