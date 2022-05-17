interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  // Pick을 이용해 title 프로퍼티를 포함해봅니다..
  type TodoPrevieww = Pick<Todo, "title">;
  
  const todoo: TodoPrevieww = {
    title: "Clean room"  
  }