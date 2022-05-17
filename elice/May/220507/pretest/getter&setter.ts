class personInfo {
    private age: number;
  
    constructor(age: number) {
      this.age = age;
    }
    
    getAge() {
      return this.age;
    }
    
    setAge(age: any) {
      if(typeof(age) === "number") {
          console.log(`age changed to ${age}`);
      } else {
          console.log('cannot change age');
      }
      
    }
  }
  
  const bob = new personInfo(30);
  
  // console.log(bob.age);
  
  console.log(bob.setAge('s'));
  console.log(bob.getAge());
  console.log(bob.setAge(31));
  