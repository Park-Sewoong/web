// 2) Image Slider

var slider = document.querySelector("#slider");
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".silde");

var currentSlide = 0;  // 현재 화면에 보여지고 있는 슬라이드가 몇번 슬라이드인지 

setInterval(function() {
    var from = -(1024 * currentSlide); // from to 이미지가 현재 있는 위치에서 어디로 이동 할건지 저장하는 변수
    var to = from - 1024;
    slides.animate({ // marginLeft 를 넣어서 from px 에서 to px 로 이미지가 이동하는 애니메이션 삽입
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,   // 애니메이션이 실행되는 실행값 시간값
        easing: "ease",  // 애니메이션이 어떻게 실행될지 결정
        iterations: 1,  // 계속 반복하라는 옵션
        fill: "both"  
    });
    currentSlide++;  // 애니메이션이 끝나면 currentSlide 증가 --> 현재 화면에 보여지는 slide 번호 변경
    if (currentSlide === (slide.length - 1)) { // 현재 slide 가 마지막 위치에 도달했을때 다시 첫번째 slide 로 변경
        currentSlide = 0;
    }
}, 3000);  //  setInterval 은 함수를 3000 ms 간격으로 계속해서 실행하라는 함수