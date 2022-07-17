$(".button").on("click", function () {
  let search = $("#gif").val();
  const xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q=" +
      search +
      "&api_key=x1BmJEM7LPObXwJFuBHaN9piPjO9tfn4&limit=5"
  );
  xhr.done(function (data) {
    console.log(data);
    data.data.forEach((gif) => {
      gifUrl = gif.embed_url;
      $("body").append("<iframe src=" + gifUrl + ">");
    });
    console.log("success got data", data);
  });
});
