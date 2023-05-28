import React from 'react'
import styled from 'styled-components'

const Result = ({finalResult}) => {
  return (
    <ContentBox>
      <ResultTitle>점수 {finalResult.result}/9</ResultTitle>
      <IncorrectDom>
        <IncorrectTitle>틀린문제</IncorrectTitle>
        {finalResult.incorrect &&
          finalResult.incorrect.map((incorrect) => (
            <div key={incorrect.id}>
                <IncorrectQuestion>{incorrect.title}</IncorrectQuestion>
                <IncorrectAnswer>정답: {incorrect.answer}</IncorrectAnswer>
            </div>
          ))}
      </IncorrectDom>
    </ContentBox>
  )
}

export default Result

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const ResultTitle = styled.div`
  font-size: 30px;
  color: #535353;
  font-weight: 700;
  margin-bottom: 15px;
`;

const IncorrectDom = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const IncorrectTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
`
const IncorrectQuestion = styled.div`
  font-size: 20px;
  font-weight: 400;
`
const IncorrectAnswer = styled.div`
  font-size: 20px;
  color: #535353;
  font-weight: 400;
  margin-bottom: 15px;
`
