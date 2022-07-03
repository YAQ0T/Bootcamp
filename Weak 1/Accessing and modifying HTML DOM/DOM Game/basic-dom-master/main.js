const moveRight = function () {
  const ball = document.getElementById("ball");
  console.log(ball.offsetLeft);
  if (ball.offsetLeft < 402) {
    let left = parseInt(ball.style.left) || 0;
    left += 15;
    ball.style.left = left + "px";
  } else {
    ball.style.left = "7px";
  }
};
const moveLeft = function () {
  const ball = document.getElementById("ball");
  console.log(ball.offsetLeft);
  if (ball.offsetLeft > 18) {
    let left = parseInt(ball.style.left) || 0;
    left -= 15;
    ball.style.left = left + "px";
  } else {
    ball.style.left = "402px";
  }
};
const moveDown = function () {
  const ball = document.getElementById("ball");
  console.log(ball.offsetLeft);
  if (ball.offsetTop < 330) {
    let top = parseInt(ball.style.top) || 0;
    top += 15;
    ball.style.top = top + "px";
  } else {
    ball.style.top = "7px";
  }
};
const moveUp = function () {
  const ball = document.getElementById("ball");
  console.log(ball.offsetTop);
  if (ball.offsetTop > 18) {
    let top = parseInt(ball.style.top) || 0;
    top -= 15;
    ball.style.top = top + "px";
  } else {
    ball.style.top = "331px";
  }
};
document.getElementById("up").onclick = function () {
  moveUp();
};
document.getElementById("down").onclick = function () {
  moveDown();
};
document.getElementById("right").onclick = function () {
  moveRight();
};
document.getElementById("left").onclick = function () {
  moveLeft();
};
document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
  }
});
