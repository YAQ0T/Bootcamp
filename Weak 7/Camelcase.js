/*

"hello case"=>helloCase
"camel case word"=>camelCaseWord
""=>null
"ahmad"=>ahmad;


*/
String.prototype.Camelcase = function () {
  {
    let str = this.valueOf();
    if (str.length == 0) return null;

    str = str.split(" ");
    str[0] = str[0].toLowerCase();
    for (let i = 1; i < str.length; i++) {
      let tempStr = str[i].toLowerCase();
      tempStr = tempStr.split("");
      tempStr[0] = tempStr[0].toUpperCase();
      tempStr = tempStr.join("");

      str[i] = tempStr;
    }
    str = str.join("");
    return str;
  }
};
console.log("ahmad".Camelcase());
