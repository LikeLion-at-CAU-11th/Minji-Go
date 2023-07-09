import { getAuthAxios } from "./authAxios";
// 데이터 요청
export const getMyPage = async () => {
  const access = localStorage.getItem("access"); // 로컬스토리지에서 access 토큰을 가져온다
  const authAxios = getAuthAxios(access);
  const result = await authAxios.get("/mypage");  // baseUrl 뒷 부분만
  return result.data;
};
