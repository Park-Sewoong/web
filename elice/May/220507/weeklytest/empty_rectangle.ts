class Square {
    length: number;
  
    getLength() {
      return this.length;
    }
  
    setLength(length: number) {
      this.length = length;
    }
  
    draw() {
      console.log("*".repeat(this.length));
      for (let i = 1; i < this.length - 1; i++)
        console.log("*" + " ".repeat(this.length - 2) + "*");
      console.log("*".repeat(this.length));
    }
  }
  
  export { Square };