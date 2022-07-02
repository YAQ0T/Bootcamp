/*Exercise 1
And now, your turn

Create two ‘people’ objects, p1 and p2. Each should have the following properties:
name
age
city
Write some code with the following logic:
If the people are the same age
If the people live in the same city
Print “Jill wanted to date Robert”
If they’re not in the same city
Print “Jill wanted to date Robert, but couldn’t”
Note that the only data should be in the objects - in your if conditions, make sure to use the objects’ properties (keys).
*/
let p1={
    name:prompt("P1 name:"),
    age:prompt("P1 age:"),
    city:prompt("P1 city:")
}
let p2={
    name:prompt("P2 name:"),
    age:prompt("P2 age:"),
    city:prompt("P2 city:")
}

if (p1.age==p2.age&&p1.city==p2.city)
{
    console.log("Jill wanted to date Robert")
}
else if (p1.age==p2.age&&p1.city!=p2.city)
{

    console.log("Jill wanted to date Robert, but couldn’t");

}
else
{
    console.log("Sad for them!");
}
