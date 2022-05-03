class Menu {
    // 지시사항을 참고하여 코드를 작성하세요.
    handleEvent(event) {
      let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
      
      // if (method === 'onMousedown') {
      //     this.onMousedown();
      // } else if (method === 'onMouseup') {
      //     this.onMouseup();
      // }
      
      //method === 'onMousedown' ? this.onMousedown() : this.onMouseup(); //위와 같은내용
      
      this[method]();
  
    }
  
    onMousedown() {
      // const elem = document.getElementById('elem') elem 이 전역변수로 설정되어서 따로 설정을 할 필요없다
      elem.innerHTML = '마우스 버튼을 눌렀습니다.';
    }
  
    onMouseup() {
      // const elem = document.getElementById('elem')
      elem.innerHTML = '마우스 버튼을 뗐습니다.';
    }
  }
  
  let menu = new Menu();
  const elem = document.getElementById("elem");
  elem.addEventListener("mousedown", menu);
  elem.addEventListener("mouseup", menu);
  