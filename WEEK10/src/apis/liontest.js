import axios from "axios";

export const baseUrl = `https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api`;

export const getAllQuestion = () => {
  const url = `${baseUrl}/liontest/question`;
  return axios.get(url);
};


export const getTestResult = (answerBody) => {
    return axios.post(`${baseUrl}/liontest/result`, {answer: answerBody});
};

export const handleTestResult = async (answerBody) => {
  try {
    const response = await axios.post(`${baseUrl}/liontest/result`, { answer: answerBody });
    const result = response.data.data;
    return(result);
  } catch (error) {
    console.error('Error:', error);
    // 에러 처리 로직 추가
  }
};