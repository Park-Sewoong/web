interface MakeJuice {
    make(): void
  }
  
  
  class BananaJuice implements MakeJuice {
      make() { console.log("Banana juice"); }
  }
  
  class StrawberryJuice implements MakeJuice {
      make() { console.log("Strawberry juice"); }
  }
  
  
  class JuiceCafe {
      private juice: MakeJuice
    makeJuiceStrategy(juice: MakeJuice) {
      this.juice = juice;
    }
    make() {
      this.juice.make();
    }
  }
  
  
  // 아래 코드는 수정하지 않습니다. 
  const juiceCafe = new JuiceCafe()
  
  juiceCafe.makeJuiceStrategy(new BananaJuice())
  juiceCafe.make()
  
  juiceCafe.makeJuiceStrategy(new StrawberryJuice())
  juiceCafe.make()
  