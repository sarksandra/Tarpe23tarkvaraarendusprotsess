/* 
sandra sark
tarpe23
22.10.24
*/


function timeCalculator()
{
    let speed = document.getElementById("speed").value;
    let distance = document.getElementById("distance").value;
    let travelTime = distance / speed;
    document.getElementById("TravelTimeResult").innerHTML = (`${distance}km läbimiseks kiirusel ${speed}km/h kulub ${travelTime} tundi.`); 
    
    return false;
}

 function showPosts()
 {
    let post = document.getElementById("post").value;
    let maxpost = document.getElementById("maxpost").value;
    let pages = post / maxpost
    let floutasnumber=parseInt(pages)
    let leftpage = post % maxpost
    document.getElementById("PostResult").innerHTML = (`${post} postitusele on vaja ${floutasnumber} lehekülge ja ${leftpage} postitust jääb viimasele lehele `);

    return false;
 }

function Watt()
{
    let powerInWatts = document.getElementById("powerInWatts").value;
    let electricityCostPerKWh = document.getElementById("electricityCostPerKWh").value;
    let powerInKWh = powerInWatts / 1000; 
    let costInCents = powerInKWh * electricityCostPerKWh; // senti
    let costInEuros = costInCents / 100; // euro

    document.getElementById("WattResult").innerHTML = (`Serveri töökulu ühe tunni jooksul on ${costInEuros.toFixed(2)} eurot`);

    return false;

}
