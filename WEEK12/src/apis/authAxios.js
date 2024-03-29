import axios from "axios";
import { getNewRefreshToken } from "./refresh";
// 에러 처리 부분 분리
export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: "http://front.cau-likelion.org",
    headers: {
      Authorization: token,
    },
  });
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        const { accessToken, refreshToken } = await getNewRefreshToken();
        error.config.headers.Authorization = accessToken;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );
  return authAxios;
};
