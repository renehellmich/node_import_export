import { data } from "./data.js";
import { functions } from "./functions.js";

console.log("Data:", data);
console.log("Over 100k :", functions.sortOver100(data));
console.log("Under 100k :", functions.sortUnder100(data));