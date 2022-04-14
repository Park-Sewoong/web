var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/
// blockOne.addEventListenser(이벤트 종료, 이벤트 발생시 실행함수(콜백함수))//

blockOne.addEventListener('mouseenter', function() {  
     //클래스 추가//
    blockOne.classList.add('red'); // blockOne 클래스 리스트에 add 한다  //
    blockOne.classList.add('cursor');
});

blockTwo.addEventListener('mouseenter', function() {  
     //클래스 추가//
    blockTwo.classList.add('yellow'); // blockTwo 클래스 리스트에 add 한다  //
});

blockThree.addEventListener('mouseenter', function() {  
     //클래스 추가//
    blockThree.classList.add('green'); // blockThree 클래스 리스트에 add 한다  //
});

//추가문제
blockOne.addEventListener('mouseleave', function() {  
     //클래스 추가//
    blockOne.classList.remove('red'); // blockOne 클래스 리스트에 remove 한다  //
});

blockTwo.addEventListener('mouseleave', function() {  
     //클래스 추가//
    blockTwo.classList.remove('yellow'); // blockTwo 클래스 리스트에 remove 한다  //
});

blockThree.addEventListener('mouseleave', function() {  
     //클래스 추가//
    blockThree.classList.remove('green'); // blockThree 클래스 리스트에 remove 한다  //
});

