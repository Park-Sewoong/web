// 각 function마다 getElementById()와 getElementsByTagName()을 사용해서 index.html <body>내 각 div id에 해당하는 <p> 태그의 개수를 출력하세요.

function getAllParaElems() {
    let allparas = document.getElementsByTagName("p");
    let num = allparas.length;
  //var num = 0;
  alert("전체 메뉴 종류는 " + num + " 개 입니다.");
}

function div1ParaElems() {
    let div1 = document.getElementById("coldbrew");
    let div1paras = div1.getElementsByTagName("p");
    let num = div1paras.length;
  //var num = 0;
  alert("커피 음료 종류는 " + num + " 개 입니다.");
}

function div2ParaElems() {
    let div2 = document.getElementById("espresso");
    let div2paras = div2.getElementsByTagName("p");
    let num = div2paras.length;
  //var num = 0;
  alert("에스프레소 음료 종류는 " + num + " 개 입니다. ");
}
