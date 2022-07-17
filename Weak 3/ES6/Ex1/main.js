let usersinfo = users.map((user) => {
  return { Name: user.name, companyName: user.company.name };
});
console.log(usersinfo);
//-----------------------ex2
let userZipCode = users.filter((user) => {
  return user.address.zipcode[0] == 5;
});
console.log(userZipCode);
//----------------------ex3
let userZipCodeWithId = users
  .filter((user) => {
    return user.address.zipcode[0] == 5;
  })
  .map((user) => {
    return user.id;
  });
console.log(userZipCodeWithId);
//-------------------ex4
let userNameStartWithC = users
  .filter((user) => {
    return user.name.charAt(0) == "C";
  })
  .map((user) => {
    return user.name;
  });
console.log(userNameStartWithC);
//---------------------ex5
let userLiveInSouthChristy = users.every(
  (user) => user.address.city == "South Christy"
);
console.log(userLiveInSouthChristy);
//--------------------ex6
let userWithSpacificSuite = users.find((user) => {
  return user.address.suite == "Apt. 950";
});
console.log(userWithSpacificSuite.company.name);
//----------------------ex7
let sortUser = function (users) {
  users.forEach((user) => {
    console.log(
      `${user.name} lives in ${user.address.city} , and owns the company ${user.company.name}`
    );
  });
};

console.log(sortUser(users));
