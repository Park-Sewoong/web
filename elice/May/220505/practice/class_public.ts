class Animall {
    // 코드가 정상 동작 할수 있게 접근제어자를 수정해주세요.
    public name: string
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Dogg extends Animall {
    constructor(name: string) {
      super(name);    
    }
    
    makeSound() {
      console.log(this.name + " 멍멍!!")
    }
  }
  
  const dogg = new Dogg("진돗개")
  dog.makeSound() // 진돗개 멍멍!! 출력
  