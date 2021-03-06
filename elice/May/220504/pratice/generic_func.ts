function add<T extends number|string|boolean>(a: T, b: T): T {
    if (typeof a === 'boolean') {
      return a || b;
    } else {
      return <any>a + <any>b;
    }
  }
  
  console.log(add<number>(13, 15));
  console.log(add<string>("hell", "o"));
  console.log(add<boolean>(false, true));
  
  // error
  // console.log(add<number>(3, "5"));
  