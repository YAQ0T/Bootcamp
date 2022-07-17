function fetch(type, value) {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=" + type + ":" + value,
    success: usedata,
  });
}
fetch("title", "How to Win Friends and Influence People");

function usedata(data) {
  data.items.forEach((element) => {
    console.log(element.volumeInfo.authors);
    console.log(element.volumeInfo.title);
    if (element.volumeInfo.industryIdentifiers) {
      element.volumeInfo.industryIdentifiers.forEach((id) => {
        console.log(id.identifier);
      });
    }
  });
}
