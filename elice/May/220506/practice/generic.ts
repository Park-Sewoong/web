class Queue<T> {
    private data: Array<T> = []
    // 제네릭을 활용하여 push()와 pop() 메소드를 구현해주세요.
    push(item: T) {
      this.data.push(item);
    }
    
    pop(): T|undefined {  // array 의 값이 없을수 있기 때문에
      return this.data.shift();
    }
  
  }
  const numberQueue = new Queue<number>()
  
  numberQueue.push(0)
  console.log(numberQueue.pop())
  