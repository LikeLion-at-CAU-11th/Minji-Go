import Car from "./DOM/Car.js";
import CarList from "./DOM/CarList.js";
import { gameView } from "./DOM/updateView.js";

const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");

const carNamesSubmitBtn = document.getElementById("car-names-submit");
const racingCountSubmitBtn = document.getElementById("racing-count-submit");

const carList = new CarList();

const gameRun = (e) =>{
    e.preventDefault();  // 'submit' 기본동작(페이지 reload) 중지
    try{
        carList.resetList();  // 리셋하고 시작

        if (inputName.value.length === 0) throw "inputNameNullError";
        if (inputCount.value.length === 0) throw "inputCountNullError";
    
        const gameCount = inputCount.value;
        

        if (inputName.value.includes(",")) {
            const carNameArray = inputName.value.split(",");
            carNameArray.forEach((carName) =>{
                carList.addCar(new Car(carName.trim()));
            });
        } else {
            const carName = inputName.value;
            carList.addCar(new Car(carName.trim()));
        }

        // 제대로 입력 받으면 게임결과에 맞게 DOM 변경
        gameView(carList,gameCount);

    } catch (error) {
        if (error === "inputNameNullError"){
            alert("자동차 이름을 입력해주세요.");
        } else if (error === "inputCountNullError"){
            alert("시도횟수를 입력해주세요.")
        } else if (error === "inputNameLengthError"){
            alert("자동차 이름을 5자 이하로 입력해주세요.")
        }
    }
}

carNamesSubmitBtn.addEventListener("click", gameRun);
racingCountSubmitBtn.addEventListener("click", gameRun);