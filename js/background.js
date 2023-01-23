const images = [ 
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);



// 반응형
function handleWindow(e) {
    const windowWidth = e.target.innerWidth;
    const windowHeight = e.target.innerHeight;
    const broswerRatio = windowWidth / windowHeight;
    const imageRatio = 1920 / 1080;
    if (imageRatio > broswerRatio) {
      container.style.height = "100%";
      container.style.width = `${windowHeight * imageRatio}px`;
      container.style.left = `${(windowWidth - windowHeight * imageRatio) / 2}px`;
      container.style.top = "0";
    } else {
      container.style.height = `${windowWidth / imageRatio}px`;
      container.style.width = "100%";
      container.style.left = "0";
      container.style.top = `${(windowHeight - windowWidth / imageRatio) / 2}px`;
    }
  }
  
  window.addEventListener("resize", handleWindow);
  window.dispatchEvent(new Event("resize")); // 강제로 resize 이벤트 발생 시킴

  