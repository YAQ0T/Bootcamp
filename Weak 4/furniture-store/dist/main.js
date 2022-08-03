$("#search").on("click", function () {
  $(".info").empty();
  let input = $("#name").val();
  $.get(`priceCheck/${input}`, function (price) {
    console.log(price);
    $(".info").append(price.price);
  });
});
$("#buy").on("click", function () {
  let input = $("#name").val();
  $.get(`buy/${input}`, function () {});
});
