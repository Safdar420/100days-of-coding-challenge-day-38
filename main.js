//  Q no 112 
// const countries =new Map<string,string>();
// countries.set("USA", "Washington,D.C.");
// countries.set("France", "Paris");
// countries.set("Japan","Tokoyo");
// console.log(countries);
var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
//  Q no 113
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(countries);
