//  Q no 112 

const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); 
countries.set("France", "Paris"); 
countries.set("Japan", "Tokyo"); 

console.log(countries);
//  Q no 113

function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
      console.log(`The capital of Canada is ${countries.get("Canada")}`);
    } else {
      console.log("Canada is not in the Map.");
    }
  }
  logCapitalOfCanada(countries);
  
// Q no 114
  const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});