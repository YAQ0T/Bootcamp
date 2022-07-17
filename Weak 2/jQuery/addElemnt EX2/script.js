$(".add").click(function () {
  let text = $(".text").val();
  text = "<li" + " id=elment>" + text + "</li>";
  $(".addElemnt").append(text);
});

$(".parent").on("click", "#elment", function () {
  console.log("hi");
  $(this).remove();
});
