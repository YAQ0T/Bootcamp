let StringFormatter = function () {
  let capitalize = (name) => {
    console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
  };
  let skewerCase = (name) => {
    for (i in name) {
      if (name[i] == " ") {
        console.log(
          name.slice(0, i) + "-" + name.slice(parseInt(i) + 1, name.length)
        );
      }
    }
  };

  return {
    capitalizeFirst: capitalize,
    skewerCase: skewerCase,
  };
};

const formatter = StringFormatter();

formatter.capitalizeFirst("dorothy"); //should print Dorothy
formatter.skewerCase("blue box"); //should print blue-box
