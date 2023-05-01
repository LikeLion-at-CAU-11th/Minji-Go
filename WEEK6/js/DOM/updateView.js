// DOM 처리 파일
const gameResult = document.getElementById("result");
const gameWinner = document.getElementById("racing-winners");

export function gameView(carList, gameCount){
    // 실행결과
    for(let i=0; i<gameCount; i++){
        const newBr = document.createElement('br');
        gameResult.appendChild(newBr);
        carList.cars.forEach((car) => {
            car.updateScore();
            const newDiv = document.createElement('div');
            const newText = document.createTextNode(`${car.name}: ${car.scoreStr}`);
            newDiv.appendChild(newText);
            gameResult.appendChild(newDiv);
        });
    }
    // 최종 우승자
    gameWinner.innerText = carList.getWinner();
}