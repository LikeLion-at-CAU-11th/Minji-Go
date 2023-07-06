import axios from "axios"
// 데이터 요청
export const getMyPage =async()=>{
    const access = localStorage.getItem('access');  // 로컬스토리지에서 access 토큰을 가져온다
    const result = await axios.get('http://front.cau-likelion.org/mypage',{
        headers:{
            Authorization: access,
        },
    });
    return result.data
}