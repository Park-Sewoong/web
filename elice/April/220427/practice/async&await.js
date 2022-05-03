//async, await으로 변환하는 방법

// 1. Promise 대신 async로 비동기 처리해 'elice'를 반환하도록 fetchUser 함수를 수정하세요.
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("elice");
//   });
// }

async function fetchUser() {
    return 'elice';
}

const user = fetchUser();  //이 단계에서 user: Promise 객체
user.then(console.log);
//user.then((result) => console.log(result));

//같은 내용
//async getUserFunction(){
//  const user2 = await fetchUser();
//  console.log(user2)
//}

// 2. delay 함수를 이용해 getCoffee와 getTea 함수를 작성하세요.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCoffee() {
    await delay(1000) // 1000 ms 만큼 기다려라
    return "coffee";
}

async function getTea() {
    await delay(1000)
    return "tea";
}

// 3. 위 두 개의 함수를 사용해서 coffee와 tea를 한번에 반환합니다.
async function getDrinks() {
    const coffee = await getCoffee(); // coffee string 반환, 그냥 getCoffee(); 를 호출하면 promise 가 반환된다
    const tea = await getTea();
    return `${coffee} and ${tea}`;
}

getDrinks().then(console.log);
