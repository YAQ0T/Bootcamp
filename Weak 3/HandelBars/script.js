const source = $("#store-template").html();
const template = Handlebars.compile(source);
const newHTML = template({ item: "bread", price: "15" });
$(".m1").append(newHTML);
