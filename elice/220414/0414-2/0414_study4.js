// 4) Click Image Slider
document.querySelector(".right-arrow").onclick = function () { //오른쪽 버튼 클릭했을때 발생하는 이벤트
    var currentSlide = document.querySelector("#photo .slide.active"); // 현재슬라이드 가져오는 작업, photo 중에 slide     이면서 활성화 되어 있는 slide --> current slide
    var nextSlide = currentSlide.nextElementSibling; // 다음슬라이드 가져오기, 현재슬라이드에 다음요소다음형제 가져오기
    if (nextSlide === null) { // 다음형제가 없다면 즉 마지막 슬라이드 일때 다음 슬라이드를 첫번째 슬라이드로 바꾸기
        nextSlide = currentSlide.parentElement.firstElementChild; // 현재슬라이드에 부모요소가 가지고 있는 첫번째 자식
    }
        currentSlide.animate({ // 현재 슬라이드에 부드러운 애니메이션 효과 적용
        opacity: [1, 0] // 투명도 0 % -- > 100 % 얼마나 보여질지 1 --> 0
    }, {
        duration: 500, // 실행시간 500 ms
        easing: "ease",
        iterations: 1, // 반복 한번만
        fill: "both" // 애니메이션이 끝난다음 어디에 위치해 있을지 설정 --> both는 애니메이션을 forward 로 실행했을때 끝부분으로 남아있고 backward 로 실행했을때는 첫번째 부분으로 남아있다
    });
    currentSlide.classList.remove("active"); // 현재슬라이를 투명도 변경후 액티브 삭제시 화면에서 사라지게 됨
    nextSlide.animate({ // 그 다음 현재 슬라이드가 사라지면 다음 슬라이드를 보여준다
        opacity: [0, 1] // 투명도 100 % --> 0 % 얼마나 보여질지 0 -- > 1
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    nextSlide.classList.add("active"); // 다음 슬라이드에 액티브라는 클래스 적용해주면 슬라이드 기능 구현 가능
}

//왼쪽 이미지 슬라이드 기능 구현
  
  
document.querySelector(".left-arrow").onclick = function () { // onclick 이벤트 변경
    var currentSlide = document.querySelector("#photo .slide.active"); // 현재슬라이드 받아오기
    var previousSlide = currentSlide.previousElementSibling;
    if (previousSlide === null) {
        previousSlide = currentSlide.parentElement.lastElementChild;
    }
        currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide.classList.remove("active");
    previousSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    previousSlide.classList.add("active");
}
