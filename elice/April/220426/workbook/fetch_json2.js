// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function handleClick(e) {
    e.preventDefault();
    
    const codeValue = selectEmployeeCode.value;
    //console.log(codeValue)
    
    fetch('employees.json')
        .then(res => res.json())
        .then(result => {
            //객체의 키중 email이 사용자가 입력한 코드와 일치하는 키를 찾음
            
            const selectedEmail = result.Employees.find(data => data.employeeCode === codeValue)
            
            console.log(selectedEmail)
            
            employeeEmailElement.innerHTML = selectedEmail.emailAddress;
            
            
        })

}
const selectEmployeeElement = document.getElementById("selectEmployeeCode")
const buttonSubmitElement = document.getElementById("buttonSubmit")
const employeeEmailElement = document.getElementById("employeeEmail")

buttonSubmitElement.addEventListener("click", handleClick)



