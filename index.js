const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const icon = document.querySelector(".visual i");
const colors = [
  "#182825",
  "#016FB9",
  "#22AED1",
  "#6D8EA0",
  "#AFA98D",
  "#B80C09"
];
const musicKeys = ['a','s','d','j','k','l'];


const music = (index) => {
  sounds[index].currentTime = 0;
  sounds[index].play();

  pads[index].classList.add("active");

  icon.style.color = colors[index];
  icon.classList.add("animate");
  
  icon.addEventListener("animationend", () => {
    icon.classList.remove("animate");
    pads[index].classList.remove("active");
  });
}


document.addEventListener("keyup", e => {
  const key = e.key;
  const pressedKey = musicKeys.indexOf(key);

  if(pressedKey > -1){
    music(pressedKey);
  }
});

pads.forEach((pad, index) => {
  pad.addEventListener("click", () => music(index));
});
