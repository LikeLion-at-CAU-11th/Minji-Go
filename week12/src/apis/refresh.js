import axios from "axios";
// Access Token 발급요청
export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");
  const result = await axios.post(
    "http://front.cau-likelion.org/refresh",
    {  // 요청 body
      refreshToken,
    },
    {  // headers.Authorization 필수
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
};
