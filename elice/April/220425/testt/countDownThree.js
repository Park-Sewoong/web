// 지시사항에 따라 코드를 작성합니다.

// const container = document.getElementById('container');
// container.addEventListener('click' () => {
//     //before
//     alert ('click')
    
//     //after
//     setTimeout(() => {  //setTimeout(콜백함수, 딜레이)
//         alert ('click')
//     }, 500) // 500 ms
//
//      setTimeout(function() {
//        alert('click')
//        }, 500)
// })

function countDownThree () {
    console.log(3);
    
    // for (let i = 3; i > 0; i--) {
    //     setTimeout(() => {
    //         i === 1 ? console.log('끝') : console.log(i-1)
    //     }, (4-i) * 1000)
    // }
    
    //N 일때
    // for (let i = N; i > 0; i--) {
    //     setTimeout(() =>{
    //         i === i ? console.log('끝') : console.log(i-1)
    //     }, (N+1-i) * 1000)
    // }
    
    setTimeout(() => console.log(2),1000)
    setTimeout(() => console.log(1),2000)
    setTimeout(() => console.log("끝"),3000)
    
}




// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [], func: countDownThree }
