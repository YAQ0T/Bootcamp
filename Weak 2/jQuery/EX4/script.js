$("#items").on("click", ".item", function () {
  if ($(this).data().instock == true) {
    console.log("hi");
    let text = "<div>" + $(this).text() + "</div>";
    $("#cart").append(text);
  }
});

let posts = [{ name: "Shoobert" }, { name: "Kayne" }];

for (let post of posts) {
  $("#items").append(`
        <div>${post.name}</div><input type="text" placeholder="say something nice" />
    `);
}

posts.splice(0, 1);
