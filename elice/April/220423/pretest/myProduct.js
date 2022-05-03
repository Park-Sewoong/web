// 지시사항에 따라 코드를 작성합니다.
const myProduct = {
    type: "냉장고",
    model: "ABC-123",
    year: 2020,
    getType: function () {
        return this.type
    },
    getModel: function () {
        return this.model
    },
    getYear: function () {
        return this.year
    },
    changeType: function (newType) {
        this.type = newType
    },
    changeModel: function (newModel) {
        this.model = newModel
    },
    changeYear: function (newYear) {
        this.year = newYear
    }
        


}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { obj: myProduct };
