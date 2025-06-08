# Understanding the Call Stack in JavaScript

## What is the Call Stack?

The Call Stack is a data structure used by JavaScript's engine to keep track of function execution. It's literally a stack — like a pile of plates:

- **LIFO**: Last In, First Out  
  The last function called is the first to finish and get removed from the stack.

## Why is it Called a "stack"?

Because it works just like a Stack data structure in programming:

- You **push** function calls onto the stack.
- You **pop** them off when they’re done.

## Example Code

```javascript
const multiply = (x, y) => x * y;
const square = x => multiply(x, x);
const isRightTriangle = (a, b, c) => (square(a) + square(b) === square(c));

isRightTriangle(3, 4, 5);

```
## Call stack flow

```
Call: isRightTriangle(3, 4, 5) → pushed to stack

Calls square(3) → pushed to stack

Calls multiply(3, 3) → pushed to stack

multiply returns 9 → popped off

square(3) returns 9 → popped off

Calls square(4) → pushed to stack

Calls multiply(4, 4) → pushed to stack

multiply returns 16 → popped off

square(4) returns 16 → popped off

square(3) + square(4) = 25

Calls square(5) → pushed to stack

Calls multiply(5, 5) → pushed to stack

multiply returns 25 → popped off

square(5) returns 25 → popped off

25 === 25 → true

isRightTriangle returns true → popped off
```

## Final Output
```
isRightTriangle(3, 4, 5); // true
```