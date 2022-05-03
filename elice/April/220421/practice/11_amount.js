import "./app.css";

const Form = () => {
  const form = document.getElementById("input-form");
  const button = document.getElementById("form-button");
  const result = document.getElementById("result-text");

  button.addEventListener("click", (e) => {
    const formData = formDataToObject(new FormData(form));
    // formData 정보를 이용해 손익분기점 매출액을 계산하세요.
    // 적절하게 변환하여, 결과 텍스트를 출력하세요.
    
    const revenue = formData.revenue
    const variableCost = formData.variableCost.toFixed(2)
    const expense = formData.expense.toFixed(2)
    
    
    let breakEvenCost = expense / (1- (variableCost/revenue))
    breakEvenCost = breakEvenCost.toLocaleString();
    result.innerText = `손익분기점 매출액은 \n
        ${breakEvenCost}원 입니다.`
  });

  result.innerText = "";
};

const app = () => {
  Form();
};

module.exports = app;

function formDataToObject(formData) {
  return Array.from(formData.entries()).reduce(
    (acc, [k, v]) => ((acc[k] = Number(v)), acc),
    {}
  );
}
