const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // getHours()에는 padStart를 사용할 수 없다. because it is number
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //Web에 접속하자마자 바로 적용되게 하려고 함수 한번 호출
setInterval(getClock, 1000);
