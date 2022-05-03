var data = {
    items: [
      {
        name: "user1",
        group: 1,
      },
      {
        name: "user2",
        group: 1,
      },
      {
        name: "user3",
        group: 2,
      },
    ],
  };
  
  //위에 제시된 데이터 배열을 지시사항에 따라 div 목록으로 렌더링합니다.
  var boxItems = document.getElementsByTagName("button");
  
  for (var i = 0; i < 3; i++) {
    boxItems[i].item_name = data.items[i].name;
    boxItems[i].group_name = data.items[i].group;
    boxItems[i].addEventListener("click", activateItem);
  }
  
  function activateItem() {
    alert("Hi, " + this.item_name + "!  You are in group " + this.group_name);
  }