/* JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
 
// Declare string variable cheeseType, set to null (no value).
var cheeseType = null;
var inventory = "stilton";
var inStock = false;
// Define while loop that runs while cheeseType is not equal to inStock value
while (inStock == false) {
  // Prompt user for kind of cheese.
  cheeseType = prompt("What cheese would you like?");
  /* Add three conditionals that change based on cheeseType values: if / else if / else */
  // First one, don't have cheddar because "We don't get much call for that around here"
  if (cheeseType == "q") break;
  else if (cheeseType=="cheddar") alert("We don't get much call for that around here.");
  // Middle one, DO have it: "Here's your [cheeseType] cheese"
  else if (cheeseType==inventory) {
    alert("Here is your " +cheeseType+ " cheese, sir.");
    inStock = true;
  }
  // Last one, to all other requests: "Sorry, no."
  else alert("Sorry, no.");
  // Close While Loop Brackets
}
if (cheeseType=="q") alert("You just left the cheese shop");
else alert("Here is your " +cheeseType+ " cheese, sir.");
