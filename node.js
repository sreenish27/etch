const container = document.querySelector("#container");
let slider = document.querySelector("#slider");
slider.type = "range"
slider.min=1;
slider.max=64;
slider.value = 64;
slider.addEventListener("input", function(e){
 console.log(this.value);
})
container.appendChild(slider);

for (let i = 1;i<4097 ; i++){
 const box = document.createElement("div");
 box.classList.add("whiteboxsmall");
 container.appendChild(box);
 }
const elements = document.querySelectorAll(".whiteboxsmall");

function color_mode(){
 elements.forEach(function(element){
  element.addEventListener("mouseover", function(e){
   bg_color = document.querySelector(".btn1");
   color = bg_color.value;
   element.style.backgroundColor = color;
  })
 }) 
}
function rainbow_mode(){
 elements.forEach(function(element){
  element.addEventListener("mouseover", function(e){
   color = randColor();
   element.style.backgroundColor = color;
  })
 }) 
}
function randColor(){
 var letters = "0123456789ABCDEF";
 var lag = "#";
 for (let i=0; i<6; i++){
  index = Math.floor(Math.random()*letters.length)
  lag = lag + letters[index];
 }
 return lag;
}
function removeTransition(e){
 if(e.propertyName != "transform"){
  this.class.remove("clicked");
 }
}
buttons = document.querySelectorAll("#click");
buttons.forEach(function(button){
 button.addEventListener("click", function(e){
  if (button.textContent == "Clear"){
   button.classList.add("clicked");
   elements.forEach(function(element){
    element.style.backgroundColor = "white";
   })
  }
  else if (button.textContent == "Eraser"){
    button.classList.add("clicked");
    element.style.backgroundColor = "white";
  }
  else if(button.textContent == "Color Mode"){
   button.classList.add("clicked");
   color_mode();
  }
  else if(button.textContent == "Rainbow Mode"){
   button.classList.add("clicked");
   rainbow_mode();
  }
  else{
   console.log("nothing");
  }
 }) 
 })
buttons.forEach(button => button.addEventListener("transitioned",removeTransition));
console.log(buttons);
