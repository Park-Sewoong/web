/*지시사항을 따라 작성해주세요*/

function scrollUp(e) {
    /*1. 함수를 적용할 target 변수 지정하기*/
    const target = document.getElementById(e)
    
    // class name 으로 가져올때
    // const target2 = document.querySelector('.scroll-down');
    // const target3 = document.quertSelectorAll('.scroll-down')[0];
    
    /*2. 버튼 클릭 시 화면의 최상단으로 이동하기*/
    // (버튼).(이벤트 리스너)
    target.addEventListener('click', function () {
      //화면 최상단 이동하기
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    })
  }
  
  scrollUp("scroll-btn");
  
  