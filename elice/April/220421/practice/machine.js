// 지시사항에 따라 코드를 작성합니다.

const atm = {
    currentMoney: 1000,
    password: 93412,
    getCurrentMoney: function(pw) {
        if (pw !== this.password) {
            return "비밀번호가 틀립니다."
        }
        return this.currentMoney
    },
    depositMoney: function(pw, money) {
        if (pw !== this.password) {
            return "비밀번호가 틀립니다."
        }
        this.currentMoney += money
    },
    withdrawMoney: function(pw, money) {
        if (pw !== this.password) {
            return "비밀번호가 틀립니다."
        }
        this.currentMoney -= money
    }



}


















// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { obj: atm }
