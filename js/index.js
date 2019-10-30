// Your code goes here
const imgList = document.querySelectorAll("img");
const btnList = document.querySelectorAll(".btn")
const bus = imgList[0];
const map = imgList[1];
const boat = imgList[2];
const ocean = imgList[3];
const header = document.querySelector(".main-navigation")
const btnOne = btnList[0];
const btnTwo = btnList[1];
const btnThree = btnList[2];
const logo = document.querySelector(".logo-heading");
const body = document.querySelector("body");
const nav = document.querySelectorAll("a");

nav.addEventListener("click", (event) => {
    event.preventDefault();
  })
body.addEventListener("click", (event) => {
 body.style.backgroundColor="red";
  event.stopPropagation();
})
bus.addEventListener("mouseenter", () =>{
    bus.style.transform ="scale(2)";
    bus.style.transition ="all 0.3s";
})
bus.addEventListener("mouseleave", ()=>{
    bus.style.transform = "scale(1)";
    bus.style.transition = "all 0.3s";
})
map.addEventListener("dblclick", ()=>{
    map.src = "img/hheader.jpg";
})
logo.addEventListener("select", () =>{
    logo.fontSize = "5rem";
})
header.addEventListener("scroll", () =>{
    header.style.backgroundColor="red"
})
btnOne.addEventListener("mousedown", ()=>{
    btnOne.style.backgroundColor="red";
})
btnTwo.addEventListener("mouseover", ()=>{
    btnTwo.style.backgroundColor="green";
})
btnTwo.addEventListener("mouseout", () =>{
    btnTwo.style.backgroundColor="yellow";
})
btnThree.addEventListener("mouseup", () =>{
    btnThree.style.backgroundColor="purple";
})
