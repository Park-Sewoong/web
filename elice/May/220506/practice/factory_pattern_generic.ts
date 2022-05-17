interface Carr {
    drive(): void
    park(): void
  }
  
  // // Bus 클래스와 Taxi 클래스를 생성하세요.
  // class Bus implements Carr {
  //     drive(): void{}
  //     park(): void{
  //         console.log("버스 주차");
  //     }
  // }
  
  // class Taxi implements Carr {
  //     drive(): void{}
  //     park(): void{
  //         console.log("택시 주차");
  //     }
  // }
  
  
  // // Factory pattern을 적용하기 위한 서브 클래스입니다.
  // class CarFactory { 
  //   static getInstance<T extends Carr>(type: { new (): T }): T {
  //     return new type()
  //   }
  // }
  
  // // CarFactory 클래스의 getInstance메소드를 이용해서 Bus, Taxi 인스턴스를 생성해주세요. 
  // const bus = CarFactory.getInstance(Bus);
  // const taxii = CarFactory.getInstance(Taxi); 
  
  // bus.park();
  // taxii.park();
  