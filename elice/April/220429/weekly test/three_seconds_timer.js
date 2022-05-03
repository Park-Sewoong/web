// setTimeout을 이용해 3초 카운트하기
const btn = document.getElementById("btn");
const text = document.getElementById("text");

const clickBtn = () => {
  window.setTimeout(() => {
    text.innerHTML += "1초<br>";
  }, 1000);
  window.setTimeout(() => {
    text.innerHTML += "2초<br>";
  }, 2000);
  window.setTimeout(() => {
    text.innerHTML += "3초<br>";
  }, 3000);
};

btn.addEventListener("click", clickBtn);