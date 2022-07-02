const downEl = document.getElementById("down");
console.log(downEl);
console.log(downEl.innerHTML);
downEl.innerHTML = "DOWN";

const moveRight = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  left += 15;
  ball.style.left = left + "px";
};

/*
function moveRight() {
  if (!(parseInt(document.getElementById("ball").style.left) > 0))
    document.getElementById("ball").style.left += "15px";
  document.getElementById("ball").style.left =
    parseInt(document.getElementById("ball").style.left) + 15 + "px";
  console.log(parseInt("15px", "px"));
  return document.getElementById("ball").style.left;
}
*/
