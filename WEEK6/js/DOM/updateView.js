// DOM 처리 파일
const gameResult = document.getElementById("result");
const gameWinner = document.getElementById("racing-winners");

// 실행결과 DOM
function gameResultView(carList) {
    carList.cars.forEach((car) =>{
        car.updateScore();
        const newDiv = document.createElement('div');
        const newText = document.createTextNode(`${car.name}: ${car.scoreStr}`);
        newDiv.appendChild(newText);
        gameResult.appendChild(newDiv);
    });

    const newBr = document.createElement('br');
    gameResult.appendChild(newBr);
}
// 우승자 DOM
function gameWinnerView(carList) {
    gameWinner.innerText = carList.getWinner();
}

export function gameView(carList, gameCount) {
    for (let i = 0; i < gameCount; i++){
        gameResultView(carList);
    }
    gameWinnerView(carList);
}

