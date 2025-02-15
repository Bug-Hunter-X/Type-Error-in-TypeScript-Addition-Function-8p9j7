function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20); // Correct: both arguments are numbers

//Alternative solution if you need to handle string input
function addString(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a; 
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

let result2 = addString(10, "20"); // Correct: handles string input