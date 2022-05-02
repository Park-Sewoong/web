/* 지시사항 1번을 참고하여 코드를 작성하세요. */

let rabbit = document.getElementById('btnRabbit');
let cat = document.getElementById('btnCat');
let bird = document.getElementById('btnBird');
let animal = document.getElementById('animal');

rabbit.addEventListener("click", function(e) {
    animal.style.backgroundColor = "pink";
});

cat.addEventListener("click", function(e) {
    animal.style.backgroundColor = "purple";
});

bird.addEventListener("click", function(e) {
    animal.style.backgroundColor = "orange";
});


