// 3) Tabs

var links = document.querySelectorAll(".tabs-list li a") // links 는 탭버튼을 의미
var items = document.querySelectorAll(".tabs-list li") // items 는 탭버튼 아래에 있는 리스트를 의미
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault(); // 기본기능 정지. a 태그의 href 는 그 지점으로 이동하는 기본기능이 있다. 이동을 시키는 것이 아닌 tab 버튼을 통해 tab이 보였다가 안보였다가 하는 기능을 구현하기 위해 기본기능 정지
    }
}

for (var i = 0; i < items.length; i++) { // 각 탭에 클릭이 발생했을때 어떻게 움직이게 될지 설정해주는 부분
    items[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute("href") ; // 각 탭에 클릭이 발생했을때 querySelector 를 이용해 a 태그에 있는 tabId 를 가져온다
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active"); // active 라는 클래스 추가 --> 어떤 역할을 하는지 index.css 에서 확인
        this.classList.add("active");
    }  
} 