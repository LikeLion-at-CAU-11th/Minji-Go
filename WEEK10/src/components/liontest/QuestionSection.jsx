import React, { useState } from 'react'
import styled from 'styled-components'
import ResultButton from './ResultButton';

const QuestionSection = ({question,setStart, getQuestion, setAnswer }) => { 
  const [count, setCount] = useState(0)
  const [selectedAnswerID, setSelectedAnswerID] = useState(0);  // defalut 정답 설정

  const handleCount = () => {
    setCount(count + 1);
    getQuestion(count + 1); // 다음 질문 가져오기
  };

  if (!question) {  // 모든 문제를 진행했을 때
    return (
    <ResultButton setStart={setStart} answerBody/>  // 답을 저장한 배열 전달
    );
  }

  const handleAnswerClick = (selectedAnswerID) => {  // Answer버튼 관리 함수
    setSelectedAnswerID(selectedAnswerID);
  }

  const handleNextClick = () => {  // Next버튼 관리 함수
    handleCount();
    handleAnswerClick(null); //  다음으로 넘어갈 시 버튼 선택 리셋
    setAnswer((prevAnswer) => {
      const updatedAnswer = [...prevAnswer];  // 전개연산자 사용, 개별요소로 분리해서 새로운 배열 생성
      updatedAnswer[question.id] = selectedAnswerID;
      return updatedAnswer;
    }); 
  }

  return (
    <ContentBox>
      <QusetionTitle>{question.title}</QusetionTitle>
      <AnswerSection>
        {question.answerList &&
          question.answerList.map((answer) => (
            <AnswerButton 
              key={answer.aid}
              clicked={selectedAnswerID === answer.aid}
              onClick={()=>handleAnswerClick(answer.aid)}
              >
                {answer.content}
              </AnswerButton>
          ))}
      </AnswerSection>
      <NextButton onClick={() => {handleNextClick();}}>다음</NextButton>
    </ContentBox>
  );
}

export default QuestionSection

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const QusetionTitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
  margin: 40px 0 50px 0;
  word-break: keep-all;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
  width: 90%;
  margin: 20px 0 20px 0;
`;

const AnswerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80px;
  font-size: 25px;
  color: ${(props) => (props.clicked ? "black" : "gray")};
  background-color: ${(props) => (props.clicked ? "#FFBCDC" : "#FFF4EF")};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  margin-bottom : 10px;
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 70px;
  font-size: 20px;
  color: white;
  background-color: #FF85A5;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 400;
  margin: 20px 0 20px 0;
`; 