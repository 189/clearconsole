import clearConsole from "../src/clearconsole";

console.log("1");
console.log("2");
console.log("3");
console.log("4");

clearConsole();

setTimeout(() => {
  console.log("done");
}, 30000);
