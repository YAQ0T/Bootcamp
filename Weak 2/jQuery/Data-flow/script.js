let name = "<input type = 'text' id = 'name' placeholder='Name' >";
let text2 = "<input type = 'text' id = 'text2' placeholder='Birthday wish' >";
let button = "<input type = 'button' id = 'button' value='Post' >";
let div = "<div class='div' ></div>";
$("body").append(name);
$("body").append(text2);
$("#name").css("margin-right", "10px");
$("#text2").css("margin-right", "5px");

$("body").append(button);
$("body").append(div);
$(".div").css("margin", "5px");

const originalPosts = [];

$("#button").click(function () {
  const posts = {};
  let name = $("#name").val();
  let wish = $("#text2").val();
  posts.name = name;
  posts.wish = wish;
  render(posts);
});
function render(posts) {
  console.log(posts);
  originalPosts.push(posts);
  $(".div").empty();
  for (i of originalPosts) {
    let div = "<div>" + i.name + ": " + i.wish;
    $(".div").append(div);
  }
  console.log(originalPosts);
}
