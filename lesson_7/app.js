// 1. Создать функцию которая выводит время 
// в html и обновляет значения каждую секунду. 
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.


const hor = document.getElementById("h");
const sec = document.getElementById("s");
const min = document.getElementById("m");
hor.style.color = "forestgreen";
hor.style.fontSize = "3em";
min.style.color = "orangered";
min.style.fontSize = "3em";
sec.style.color = "darkred";
sec.style.fontSize = "3em";

function watches() { 
  const now = new Date();
  if(now.getHours() < 10) {
    hor.innerHTML = "0"+ now.getHours() + ":";
  } else {
    hor.innerHTML = now.getHours() + ":"; 
  }
  if(now.getMinutes() < 10) {
    min.innerHTML = "0"+ now.getMinutes() + ":";
  } else {
    min.innerHTML = now.getMinutes() + ":"; 
  }
  if(now.getSeconds() < 10 ) {
    sec.innerHTML = "0"+ now.getSeconds();
  } else {
    sec.innerHTML = now.getSeconds(); 
  }
} 

setInterval(watches, 1000)


// Часы до нового года 

const d = document.getElementById("d2");
const h = document.getElementById("h2");
const m = document.getElementById("m2");
const s = document.getElementById("s2");

function calculateRemainingTime() {
  const now = new Date();
  const comingYear = new Date().getFullYear() + 1;
  const comingDate = new Date(`Jan 1, ${comingYear} 00:00:00`);

  const remainingTime = comingDate.getTime() - now.getTime();
 
  d.innerHTML =  Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  h.innerHTML = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  m.innerHTML = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  s.innerHTML = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  return remainingTime;
}


setInterval(calculateRemainingTime, 1000)


// Огни (не относится к заданию)

const sequence = ['red', 'yellow', 'green', 'yellow'];
const circle = document.getElementsByClassName("circle");
let j = 0; 
function changeColor() {
  (function(j) {      
    for(let i = 0; i < circle.length; i++) {
      circle[i].style.background = sequence[j];
    circle[i].classList.toggle('bright')    
  }
}(j))  
j++
if (j === sequence.length) j = 0 
}
setInterval(changeColor, 1000)

  





