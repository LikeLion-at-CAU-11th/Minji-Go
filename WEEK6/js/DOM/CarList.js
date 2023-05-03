class CarList {
    constructor() {
      this.cars = [];
    }
  
    // Car객체 배열에 추가 메서드
    addCar(car) {  
      this.cars.push(car);
    }

    // 에러 시 배열 리셋 메서드
    resetList() {  
        this.cars.splice(0);
    }

    // 현재 cars의 우승자를 반환하는 메서드
    getWinner() {  
        let carScores = [];
        let winners = [];
        let max = 0;
        
        for(let i = 0; i < this.cars.length; i++){
            carScores.push(this.cars[i].scoreNum);
        }

        max = Math.max(...carScores);  // 최대 스코어 구하기
        
        for(let j = 0; j < this.cars.length; j++){
            if (carScores[j] === max){
                winners.push(this.cars[j].name);
            }
        }

        return winners.join(", ");
    }
  }
  
  export default CarList;