let variable = "foo"; // this is a string
variable = 0; // variable is reassigned as a number
variable = false; // variable is reassigned as a boolean
variable = 0.1; // variable is reassigned as a number

let foo = variable + 12; // variable (0.1) + 12 results in 12.1
foo = foo + " this is twelve and "; // string concatenation
foo = foo + 0; // further string concatenation
console.log(foo); // Outputs: "12.1 this is twelve and 0"

const foo2 = "11"; // a string
console.log("With subtraction: ", foo2 - 2); // Subtracting converts "11" to a number, resulting in 9
console.log("With addition: ", foo2 + 2); // Adding concatenates "11" with "2", resulting in "112"

function addATrueNumber(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  // Fixed the error construction to use the correct message and avoid confusion
  throw new Error(
    "One of the inputs is not a number. Both inputs must be of type 'number'.",
  );
}

try {
  const aTrueNumber = addATrueNumber(12, 12);
  console.log(aTrueNumber); // Outputs: 24

  // This will throw an error since the second argument is a string
  const notATrueNumber = addATrueNumber(12, "12");
} catch (error) {
  console.error("Error caught:", error.message);
}
