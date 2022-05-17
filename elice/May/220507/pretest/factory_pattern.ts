// Car 추상 클래스를 구현해주세요.
// 1. constructor를 구현해서 name필드값을 생성하세요.
// 2. name 필드는 상속받은 자식 클래스에서 접근가능한 접근제어자를 선언해주세요.
// 3. 추상 메소드를 구현해주세요.
class Carr {
    name: string;
    constructor(name: string) {
     this.name = name;
    }

}


// 이하 아래 코드는 수정하지 않습니다.
class Buss extends Carr {
  constructor(name: string) {
    super(name);
  }
  
  drive(): void {}
  park(): void {
    console.log(`${this.name} 주차`);
  }
}
class Taxii extends Carr {
  constructor(name: string) {
    super(name);
  }
  
  drive(): void {}
  park(): void {
    console.log(`${this.name} 주차`);
  }
}

class CarrFactory {
  static getInstance<T extends Car>(type: { new (name: string): T }, name: string): T {
    return new type(name)
  }
}

// const buss = CarrFactory.getInstance(Buss, '버스')
// const taxii = CarrFactory.getInstance(Taxii, '택시')
// buss.park();
// taxii.park();