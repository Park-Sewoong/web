const Counter = {
    count: 0, //카운트 횟수입니다
  
    getCount: function () { //카운트 횟수를 반환하는 함수입니다.
      return this.count;
    },
  
    resetCount: function () { //카운트를 초기화하는 함수입니다.
      this.count = 0;
    },
  
    incrementSync: function () {
      // 동기적으로 3초 뒤에 this.count를 증가하세요.
      // while 문 안에서, 또 다른 Date.now()를 구하여 3000을 초과하는 순간
      // while 문을 벗어나게 구현하세요.
      const currentTime = Date.now()
      
      while (true) {
          const now = Date.now()
          if (now - currentTime > 3000) break
      }
      
      this.count++
    },
  
    incrementAsync: function (callback) {
      // 비동기적으로 3초 뒤에 this.count를 증가하며 callback을 호출하도록 구현하세요.
      // setTimeout을 활용하세요.
      setTimeout(() => {
          this.count++
          callback()
      }, 3000)
    },
  };
  
// export는 생성한 함수나 객체 등을 내보내기 위해 사용합니다.
// 내보낸 것은 다른 곳에서 import하여 사용할 수 있습니다.
// default를 붙여서 사용하는 경우 다른 파일에서 import를 할 때 어떠한 이름으로도 가져올 수 있게됩니다.

  export default Counter;
  