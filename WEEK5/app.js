// 1. js 파일에서 접근해야하는 html dom 요소들 선언하기
const myHandText = document.getElementById('my-hand-text');
const myHandIcon = document.getElementById('my-hand-icon');

const computerText = document.getElementById('computer-hand-text');
const computerIcon = document.getElementById('computer-hand-icon');

const result = document.getElementById('display-result');

const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');

const PLAYER_WIN=0;
const PLAYER_LOSE=1;

// a. 과제 - 스코어 변경 (html에서 class인거 id로 변경함)
const myScore = document.getElementById('my-score');
const computerScore = document.getElementById('computer-score');
// b. 과제 - 리셋버튼
const resetBtn = document.getElementById('reset');
// c. 과제 - 모드 변경
const modeBtn = document.getElementById('mode-button')

//2. 선언한 dom 요소에 클릭이벤트 주기
const arr = undefined;
([rockBtn,scissorsBtn,paperBtn] || arr).forEach((button)=>{
    button.addEventListener('click',displayMyChoice);});

// b. 과제 - 리셋버튼 클릭이벤트
resetBtn.addEventListener('click', resetScore);
// c. 과제 - 모드버튼 클릭이벤트
modeBtn.addEventListener('click', changeMode);

function changeMode(){
    if(modeBtn.innerText=="다크모드 🌝"){modeBtn.innerText="라이트모드 🌞";}
    else {modeBtn.innerText="다크모드 🌝";}
    document.body.classList.toggle('dark');
    ['contents-wrapper','rock','scissors','paper','reset-button','mode-button'].forEach((element)=>{
        document.getElementById(element).classList.toggle('dark');
    });
    document.getElementsByClassName('display-title')[0].classList.toggle('dark');
    document.getElementsByClassName('display-title')[1].classList.toggle('dark');
}

//3. 함수가 실행될 때, 이벤트가 발생한 dom 객체에 접근하기(e.target)
function displayMyChoice(e){
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon.className;

    startGame(clickedBtn);  
}

function getComChoice(){
    //배열의 [0]에는 text, [1]에는 className
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex=Math.floor(Math.random()*3);

    return randomValue[randomIndex];
}

function displayComChoice(result){
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}


function startGame(myChoice) {
    let resultArr = getComChoice();
    let comChoiceText = resultArr[0];
    
    switch (myChoice[0]+comChoiceText[0][0]){
        case "rs":
        case 'sp':
        case 'pr':
            result.innerText='win';
            changeScore(PLAYER_WIN);
            break;
        
        case "rr":
        case 'ss':
        case 'pp':
            result.innerText='tie';
            break;
        
        case "rp":
        case "sr":
        case "ps":
            result.innerText='lose';
            changeScore(PLAYER_LOSE);
            break;
    }

    displayComChoice(resultArr);

}

// a. 과제 - 스코어 변경 함수
function changeScore(gameResult){
    let gameScore = 0;

    if(gameResult==0){
        gameScore = Number(myScore.innerText) + 1;
        myScore.innerText = gameScore;
    }

    else if(gameResult==1){
        gameScore = Number(computerScore.innerText) + 1;
        computerScore.innerText = gameScore;
    }

}


// b. 과제 - 초기화 함수
function resetScore(){
    myScore.innerText = 0;
    computerScore.innerText = 0;
    myHandText.innerText = '';
    myHandIcon.className = '';
    computerText.innerText = '';
    computerIcon.className = '';
    result.innerText='';
}
