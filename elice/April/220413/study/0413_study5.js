function myFunction() {
    //1. Create Element
    let textElement = document.createElement('p');
    textElement.textContent = "이것이 추가될 문장입니다."
    
    //2. Append Child
    document.getElementById('myDIV').appendChild(textElement)
}


// const myFunction = () => {
    //실행할 내용 추가