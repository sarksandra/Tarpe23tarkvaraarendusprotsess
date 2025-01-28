/*
Sandra Sark
Tarpe23
22.10.24
*/

let temperatuur = 20; 

if (temperatuur > 25) {
    console.log("Väga kuum ilm!")
} else if (temperatuur >= 15) {
    console.log("Mõnus temperatuur")
} else {
    console.log("Jahe ilm")
}

let kasutajanimi = "h"
console.log(`Sisestage enda kasutajanimi : ${kasutajanimi}`)
let lubatud = (kasutajanimi == "admin") ? "Tere, administraator!":"Tere, Külaline!";
console.log(lubatud)


let vanus = 33
let piletituup = ["täispilet", "sooduspilet"];
if(vanus <= 18){
    console.log(`${piletituup[0]} hind 10`)
}
else if(vanus => 18 && vanus <= 65){
    console.log(`${piletituup[0]} hind 20`)
}
else if(vanus >= 65){
    console.log(`${piletituup[0]} hind 15`)
}
if(vanus <= 18){
    console.log(`${piletituup[1]} hind 8`)
}
else if(vanus => 18 && vanus <= 65){
    console.log(`${piletituup[1]} hind 15`)
}
else if(vanus >= 65){
    console.log(`${piletituup[1]} hind 8`)
}





