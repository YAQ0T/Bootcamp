let boughtTesla = false
const yearOfTeslaPurchase = 2016
let isUSCitizen = true
let currentYear = 2018
let Tage=0
if(boughtTesla&&isUSCitizen)
{
    Tage=currentYear-yearOfTeslaPurchase
    if(Tage>=4)
    {
        let upgrade = prompt("Whold you like to upgrade your Tesla?")

    }
    else
    {
        let satisfied =prompt("Are you satisfied with your car?")

    }



}
else if(boughtTesla&&(!isUSCitizen))
{
    let movetous=prompt("Would you like to move to US?")

}
else
{
    let buyone=prompt("Are you intersted in buying Tesla?")
}