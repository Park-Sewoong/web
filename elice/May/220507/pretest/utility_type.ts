interface IBook {
    title: string;
    author: string;
    description: string;
  }
  
  // Ibook에 Utility types을 추가해주세요
  function updateBookDescription(book: Pick<IBook, "description">) { 
    console.log(book);
  }
  
  // Ibook에 Utility types을 추가해주세요
  function updateBookTitleAndAuthor(book: Omit<IBook, "description">) { 
    console.log(book);
  }
  
  // Ibook에 Utility types을 추가해주세요
  function updateTitle(book: Pick<IBook, "title">) {
    console.log(book);
  }
  
  // 함수 호출 부분은 수정을 하지 않습니다
  updateBookDescription({ description: "new description" });
  updateBookTitleAndAuthor({ title: "new title", author: "new author" });
  updateTitle({ title: "new title" });