var form = document.getElementById("form");
var input = document.getElementById("input");
var answer = document.getElementById("answer");

// 지시사항을 참고하여 문제를 해결하세요.
form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let val = input.value;
    
    if (val) {
        if (val >= 50) {
            answer.textContent = "우산을 챙긴다.";
        } else {
            answer.textContent = "그냥 간다.";
        }
        
        form.reset();
    }
  
});
