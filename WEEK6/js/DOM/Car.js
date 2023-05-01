const maxLength = 5;

class Car {
    constructor(name) {
        // 생성자 내에서 길이 유효성 검사
        if (name.length > maxLength) {
            throw "inputNameLengthError";
        } else if (name.length === 0) {
            throw "inputNameNullError";
        }
  
      this.name = name;
      this.scoreNum  = 0;
      this.scoreStr = "";
    }

    updateScore(){
        const randomNum = Math.floor(Math.random()*10);
        if (randomNum >= 4) {
            this.scoreNum += 1;
            this.scoreStr = "-".repeat(this.scoreNum);
        }
    }
}

export default Car;