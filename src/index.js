const ref = { start : document.querySelector("button[data-start]"),
stop : document.querySelector("button[data-stop]"),
 body : document.querySelector(`body`)
};
let timerId= null;


ref.start.addEventListener("click", startgo);
ref.stop.addEventListener("click", stopgo);



function startgo () {
  ref.start.disabled = true;
   timerId = setInterval(bodyGround, 1000)
   console.log(timerId);

};



function stopgo () {
  clearInterval(timerId)
  ref.start.disabled = false;

};


function bodyGround (){

ref.body.style.backgroundColor  =  getRandomHexColor()
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };
