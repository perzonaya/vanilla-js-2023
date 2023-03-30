const images = [ "iu-abovethetime.jpg", "iu-blueming.jpg","iu-cover.jpg","iu-lilac.jpg","iu-lovepoem.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//javascript에서 만든것을 html에 추가하는 것을 해보자 랜덤이미지를 html에 추가해주자
//append는 가장 뒤에 prepend는 가장 앞에
document.body.appendChild(bgImage);