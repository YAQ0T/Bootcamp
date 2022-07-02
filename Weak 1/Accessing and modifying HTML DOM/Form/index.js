let Name = document.getElementById("name");
let error = document.getElementById("error");
let submet = document.getElementById("enter");
let salary = document.getElementById("desiredSalary");
let birthday = document.getElementById("bithday");
let phoneNumber = document.getElementById("phoneNumber");
submet.onclick = function () {
  console.log(Name.value.length);
  if (Name.value.length <= 2) {
    error.innerHTML = "name must be more than 2 character";
  } else if (salary.value <= 10000 || salary.value >= 16000)
    error.innerHTML = "Salary must be greater than 10,000 but less than 16,000";
  else if (!birthday.value) {
    error.innerHTML = "birthday must not be empty";
  } else if (phoneNumber.value.length != 10) {
    error.innerHTML = "Phone must be 10 digets";
  } else error.innerHTML = "Done";
};
