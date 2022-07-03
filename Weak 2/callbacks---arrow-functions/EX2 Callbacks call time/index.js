const returnTime = function (time) {
  alert("The current time is: " + time);
};

let getTime = (tT) => {
  tT(new Date());
};

getTime(returnTime);
