// url의 파라미터 읽어오기
const urlParamsObj = new URL(location.href);

const container = document.getElementById("container");
const urlParams = urlParamsObj.searchParams;
// `detail.html?title=${title}&location=${location}date=${date}&photographer=${photographer}&keyword=${keyword}&imgUrl=${imgUrl}`
const title = urlParams.get('title');
const dataLocation = urlParams.get('location');
const date = urlParams.get('date');
const photographer = urlParams.get('photographer');
const keyword = urlParams.get('keyword');
const imgUrl = urlParams.get('imgUrl');

console.log(title);
console.log(date);

// 날짜 파싱, galCreatedtime: "20221215151845"
const year = date.slice(0,4);
const month = date.slice(4,6);
const day = date.slice(6,8);

const detailImg = document.createElement('img');
detailImg.src = imgUrl;

const detailDiv = document.createElement('div');
detailDiv.id = 'list';
detailDiv.innerHTML = `제목 : ${title} <br/>장소 : ${dataLocation}<br/>날짜 : ${year}/${month}/${day}<br/>작가 : ${photographer}<br/>키워드 : ${keyword}`;

container.appendChild(detailImg);
container.appendChild(detailDiv);
