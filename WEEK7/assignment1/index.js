const container = document.getElementById('container');

let count = -1;

async function getData(){
    const random = Math.floor(Math.random() * 100 + 1);
    const url =`https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=${random}&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=%2BGU04ux5xqM7bA505L%2BHskgdUTKJRirdm1ttr6uWYZHnpYzcV6yAPaupKDoAerYLz14sL2tcLJMOWafom9WcNA%3D%3D`;

    const fetchData = await fetch(url);
    console.log(fetchData);
    const toJson = await fetchData.json();
    console.log(toJson);
    const data = await toJson.response.body.items.item;
    console.log(data);

    count ++;

    {data.map((datas,i)=>{
        const title = datas.galTitle;
        const location = datas.galPhotographyLocation;
        const date = datas.galCreatedtime;  
        const photographer = datas.galPhotographer;
        const keyword = datas.galSearchKeyword;
        const imgUrl = datas.galWebImageUrl;

        const index = i;
        const link = document.createElement('div');
        link.id='list';
        
        const image = document.createElement('img');
        image.src=datas.galWebImageUrl;
        console.log(image.src);

        const text = document.createElement('span');
        text.innerText=`
        ${i+5*count+1}번째 사진
        제목: ${title}
        장소: ${location}`;

        // 더보기 버튼
        const detailButton = document.createElement('button');
        detailButton.innerText='더보기';

        // url의 파라미터로 해당 이미지 데이터 전달
        detailButton.onclick = function() {
            window.open(`detail.html?title=${title}&location=${location}&date=${date}&photographer=${photographer}&keyword=${keyword}&imgUrl=${imgUrl}`);
        };       

        container.appendChild(link);
        link.appendChild(image);
        link.appendChild(text);
        link.appendChild(detailButton);
    })}
}