/*
Remember the reservations code?
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}
The above code is a reservation system where people can claim their reservations when they arrive.
Use an input element to get the name, and put all your logic in a checkReservation function.
The function should be invoked when you click a button:
If the reservation exists and is unclaimed, welcome the user.
If the reservation exists and is already claimed, inform the user about the situation
If there is no reservation, tell the user there is nothing under their name
Use ‘Bob’ and ‘Ted’ to test your code:
When you test Bob, it should say “Welcome, Bob”
When you test Ted, it should say “Hmm, someone already claimed this reservation”
If you try a different name, it should say “You have no reservation”
It should work like this, but prettier:
Note that to extract text from an input, you should use .value instead of .innerHTML
*/

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function checkReservation() {
  let name = document.getElementById("name");
  if (reservations[name.value] == undefined)
    console.log("there is nothing under ur name");
  else {
    if (reservations[name.value].claimed == true)
      console.log("Hmm, someone already claimed this reservation");
    else console.log("Wellcome " + name.value);
  }
}

document.getElementById("button").onclick = function () {
  checkReservation();
};
