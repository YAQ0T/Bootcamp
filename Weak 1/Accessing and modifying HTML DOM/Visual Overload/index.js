let i = 0;
function addElemnt() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "box");
  i += 1;
  i = String(i);
  let Enter = "enterColor(" + i + ")";
  let leave = "leaveColor(" + i + ")";
  newDiv.setAttribute("id", i);
  newDiv.style.backgroundColor = "blue";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";

  newDiv.setAttribute("onmouseenter", Enter);
  newDiv.setAttribute("onmouseleave", leave);
  i = parseInt(i, 10);
  console.log(i);

  const currentDiv = document.getElementById("container");

  document.body.insertBefore(newDiv, currentDiv);
}
let button = document.getElementById("button");

button.onclick = function () {
  addElemnt();
};

function enterColor(i) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById(i).style.backgroundColor = "#" + randomColor;
}
function leaveColor(i) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById(i).style.backgroundColor = "#" + randomColor;
}
