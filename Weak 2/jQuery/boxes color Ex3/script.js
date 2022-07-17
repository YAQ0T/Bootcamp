const box = "<div class='box'></div>";
let x = 0;
$("body").append(box);
$("body").append(box);
// $(".box").hover(
//   function () {
//     In(this);

//     console.log(x);
//   }
//   //   function () {
//   //     Out(this);

//   //     console.log(x);
//   //   }
// );
$(".box").mouseenter(function () {
  if (x != 0) Out($(".box"));
  In(this);
  x = 1;
});
let Out = (elment) => {
  $(elment).css("background-color", "red");
};
let In = (elment) => {
  $(elment).css("background-color", "#8e44ad");
};
let wait = () => {};
