// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
// then
// function thenHandleClick(){
//        e.preventDefault()
//     fetch("https://randomuser.me/api/?password=upper,lower,number")
//         .then((res) => res.json())
//         .then((result) => {
//               passwordElement.innerHTML = result.results[0].login.password;
//         })
// }

//async await
async function handleClick(e) {
    e.preventDefault();
    
    const res = await fetch('https://randomuser.me/api/?password=upper,lower,number');
        //console.log(res);
    const result = await res.json();
        //console.log(result);
        //result 의 첫번째 item 안에 logindks 의 password
          //console.log(result.results[0].login.password)
          passwordElement.innerHTML = result.results[0].login.password;
}

const buttonElement = document.getElementById("buttonSubmit")
const passwordElement = document.getElementById("password")

buttonSubmit.addEventListener("click", handleClick)