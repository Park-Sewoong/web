// 1) Scroll Navigation
var aTags = document.querySelectorAll("header a");  //전체 a 태그들을 다 가져온다(네이게이션에 해당하는 a 태그) --> 모두 onclick 이벤트에 만들어 놓은 함수 적용 
for(var i = 0; i < aTags.length; i ++) {  // --> for 문을 통해 a 태그의 각 index 0~2 까지 onclick 이벤트 부분에 우리가 만든 함수를 넣어주는 과정
    aTags[i].onclick = function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));

        window.scrollTo ({
            'behavior': 'smooth',
            'top':  target.offsetTop
        })
    }
}


