import { Stack } from "./stack";

let stack = new Stack<number | undefined>;

let arr = new Stack<number | undefined>()
arr.container = [1, 2, 3, 4, 5, 6]
let n = arr.size();
for (let i = 0; i < n; i++) {
    stack.push(arr.container.shift());
}

console.log(stack.container);

for (let i = 0; i < n; i++) {
    arr.push(stack.pop());
}
console.log(arr);
