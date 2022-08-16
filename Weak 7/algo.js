/*
[]=>null
[1]=>1
[2]=>2
[1,2]=>2
[1,1,1,1,1,1,1,1,1]=>0



*/

function numBiggerThanPreviousSum(arrayOfInteger) {
  let prevNumSum = 0;
  // edge cases
  // emoty arr
  if (arrayOfInteger.length == 0) return null;
  //array with one integer
  if (arrayOfInteger.length == 1) return arrayOfInteger[0];

  for (let i = 0; i < arrayOfInteger.length; i++) {
    prevNumSum += arrayOfInteger[i];
    //if we couldnt find the value
    if (i + 1 == arrayOfInteger.length) {
      return null;
    }
    if (prevNumSum < arrayOfInteger[i + 1]) return arrayOfInteger[i + 1];
  }
}

console.log(numBiggerThanPreviousSum([-5, -1]));
