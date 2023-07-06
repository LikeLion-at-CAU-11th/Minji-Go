import axios from "axios";
import { getNewRefreshToken } from "./refresh";
// 데이터 요청
export const getMyPage = async () => {
  const access = localStorage.getItem("access"); // 로컬스토리지에서 access 토큰을 가져온다
  try {
    const result = await axios.get("http://front.cau-likelion.org/mypage", {
      headers: {
        Authorization: access,
      },
    });
    return result.data;
  } catch (error) {
    if (error.response.status === 401) {
      // 토큰이 만료된 경우
      const { accessToken, refreshToken } = await getNewRefreshToken();
      error.config.headers.Authorization = accessToken;
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
      return (await axios.get(error.config.url, error.config)).data;
    }
  }
};
