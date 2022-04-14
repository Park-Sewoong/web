/*지시사항을 따라 작성해주세요*/
const image = document.getElementsByClassName("zoom-img")[0];

function zoomIn() {
  /* 여기에 작성해주세요 */
  image.style.transition = "all 0.5s";
  image.style.transform = "scale(1.2)";
  image.style.zIndex = 1;
}

function zoomOut() {
  /* 여기에 작성해주세요 */
  image.style.transition = "all 0.5s";
  image.style.transform = "scale(1)";
  image.style.zIndex = 0;
}

/* 여기에 작성해주세요 */
image.addEventListener("mouseenter", zoomIn);
image.addEventListener("mouseleave", zoomOut);