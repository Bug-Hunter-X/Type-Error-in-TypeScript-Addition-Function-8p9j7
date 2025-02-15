# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript. The `add` function is defined to accept two numbers as parameters, but the code calls it with a number and a string, leading to a type error.

The `bug.ts` file contains the code with the error, while the `bugSolution.ts` file provides the corrected version.

## Bug
The bug lies in the call to the `add` function.  The function signature expects two numbers, but we're passing a string ("20") as the second argument. TypeScript's type system correctly catches this mismatch.

## Solution
The solution involves ensuring that both arguments passed to `add` are indeed numbers. This can be done via type assertion, type guard, or changing the logic of the program.