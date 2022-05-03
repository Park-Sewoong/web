// 지시사항에 따라 코드를 작성합니다.
const myDog = {
    species: "Maltiz", 
    age: 5,  
    color: "beige",
    getSpecies: function() {
      return this.species
    },
    getAge: function() {
      return this.age
    },
    getColor: function() {
      return this.color
    },
    changeSpecies: function(newSpecies) {
      this.species = newSpecies
    },
    changeAge: function(newAge) {
      this.age = newAge
    },
    changeColor: function(newColor) {
      this.color = newColor
    }     
  }
  
  
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = { obj: myDog }
  