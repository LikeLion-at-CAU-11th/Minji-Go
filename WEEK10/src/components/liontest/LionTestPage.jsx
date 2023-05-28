import React, { useState } from "react";
import styled from "styled-components";
import StartButton from "./StartButton";
import QuestionSection from "./QuestionSection";
import { getAllQuestion, getTestResult } from "../../apis/liontest";
import Result from "./Result";
import ResultButton from "./ResultButton";
import { handleTestResult } from "../../apis/liontest";

export const LionTestPage = () => {
  const [start, setStart] = useState(0);
  const [question, setQuestion] = useState([]);  // 질문 저장
  const [answer, setAnswer] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  const [finalResult, setFinalResult] = useState([]);

  const getQuestion = async (id) => {
    const response = await getAllQuestion();
    const questions = response.data.data;
    if(questions === null){
      setStart(0);
    } else{
      if(!questions[id]) setStart(2)  // 더이상 문제가 없으면 결과버튼 반환
      else{
        setQuestion(questions[id]);
        setStart(1);
      }
    }
  }

  const answerBody = answer.map((answer, index) => {  // post 요청 body
    return {
      id: index,
      answer: answer
    };
  });

  const fetchTestResult = async () => {
    try {
      const finalResult = await handleTestResult(answerBody);
      setFinalResult(finalResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dom>
      <Title>🐻멋사인 테스트🐻</Title>
      <ContentBox>
        {start === 0 ? (
          <StartButton setStart={setStart} getQuestion={getQuestion} />
        ) : start === 1 ? (
          <QuestionSection
            question={question}
            setStart={setStart}
            getQuestion={getQuestion}
            setAnswer={setAnswer}
          />
        ) : start === 2 ? (
          <ResultButton fetchTestResult={fetchTestResult} setStart={setStart} />
        ) :(
          <Result finalResult={finalResult}/>
        )}
      </ContentBox>
    </Dom>
  );
}

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  height: 100%;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #FFE2DB;
  width: 85vw;
  min-height: 550px;
  align-items: center;
  justify-content: start;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #DCBEC2;
  margin-bottom: 50px;
`;