const url = "https://51afae29-2814-499c-a7ab-1842f10713b5.mock.pstmn.io/testapi/first";

const requestOptions = {
  method: 'POST',
  redirect: 'follow'
};

async function getData() {
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();
