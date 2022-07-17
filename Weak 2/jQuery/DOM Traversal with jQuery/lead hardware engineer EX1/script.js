let computersDataId = [];
$(".generator").on("click", function () {
  console.log($(this).closest(".processor").attr("id"));
  let computerDataIdInObject = {};
  computerDataIdInObject.cmp_id = $(this).closest(".computer").attr("data-id");
  console.log(computerDataIdInObject);
  console.log($(this).closest(".computer").find(".BUS").text());
});
$(".validator").on("click", function () {
  console.log($(this).closest(".computer").find(".generator").text());
  console.log($(this).closest(".computer").find(".MB").text());
  let span = $(this).closest(".computer").find("span");
  span = span[0].textContent + " " + span[1].textContent;
  console.log(span);
});
