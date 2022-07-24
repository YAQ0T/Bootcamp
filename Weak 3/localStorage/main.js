let wisdom = [];
let counter = 0;
class click {
  constructor() {}
  subment(iteam) {
    let textObj = {};

    $("ul").append(`<li id='${iteam.counter}'>${iteam.text}</li>`);
    textObj.text = iteam.text;
    if (counter != 0 && counter != 1) {
      textObj.counter = counter;
      counter++;
    } else {
      textObj.counter = counter;
      counter++;
    }

    wisdom.push(textObj);
    if (wisdom.length % 2 == 0) {
      localStorage.wisdom = JSON.stringify(wisdom);
    }
  }
}
let Go = new click();
$("#button").on("click", function () {
  text = $("#text").val();
  let iteam = {};
  iteam.text = text;
  Go.subment(iteam);
});
$("#clear").on("click", function () {
  localStorage.clear();
});
refreshPage = JSON.parse(localStorage.wisdom || "[]");
$(".container").on("click", "li", function () {
  let id = $(this).closest("li").attr("id");
  for (i in refreshPage) {
    if (refreshPage[i].counter == id) refreshPage.splice(i, 1);
  }
  $(this).remove();
  localStorage.wisdom = JSON.stringify(refreshPage);
});

if (refreshPage.length != 0) {
  console.log(refreshPage);
  refreshPage.forEach((iteam) => {
    Go.subment(iteam);
  });
  if (refreshPage.length != 2) {
    counter = refreshPage[refreshPage.length - 1].counter;
    counter++;
  }
}
