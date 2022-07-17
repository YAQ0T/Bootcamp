$("button").click(function () {
  console.log($(this).closest("body").find(".container").find("p").text());
});
