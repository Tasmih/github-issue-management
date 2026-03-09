1️⃣ What is the difference between var, let, and const?

 Var, let, and const are used to declare variables in Java scripts. Even though they are similar, they are used in different ways.
We can understand them using three things: scope, declaring and updating, and initialization.

Scope

Var:
var is the old way of declaring variables in JavaScript. A var variable can be global or local depending on where it is declared. If it is declared outside a function, it can be used anywhere. If it is declared inside a function, it can only be used inside that function.

Let:
let can be global or block scoped. If it is declared outside a block, it can be used globally. But if it is declared inside a block { }, it can only be used inside that block.

Const:
const can also be global or block scoped. If it is declared outside a block, it is global. If it is declared inside a block { }, it can only be used inside that block.

Declaring and Updating 

Var:
var variables can be updated and redeclared.

Let:
Variables declared with let cannot be redeclared, but their value can be updated.

Const:
A const variable cannot be changed after it is declared.

Initialization

Var:
With var, we can declare a variable without giving it a value. Later we can assign a value.

Let:
let is similar to var. We can declare a variable without a value and assign it later.

Const:
const is different. We must give it a value when declaring because it cannot be changed later.

2️⃣ What is the spread operator (...)?

The spread operator ... is used to expand the elements of an array or object. It helps us copy, combine, or add elements easily.

let fruits = ["Mango", "Banana"];
let more = ["Apple", "Guava"];

let all = [...fruits, ...more, "Pineapple"];


Outcome 
 all = ["Mango", "Banana", "Apple", "Guava", "Pineapple"]

3️⃣ What is the difference between map(), filter(), and forEach()?

map()
The map() method loops through each element of an array, changes the elements, and returns a new array. The original array does not change.

filter()
The filter() method loops through an array and keeps only the elements that match a condition. It returns a new array.

forEach()
The forEach() method runs a function on each element. It performs an action like printing or updating, but does not return a new array.

4️⃣ What is an arrow function?

Arrow Function is the shorter and simpler way to write functions in JavaScript.

const greet = () => "Hello, world!";

5️⃣ What are template literals?

Template literals are used to create strings easily in JavaScript.They use backticks  ``  instead of quotes "".
We  can insert variables inside the string using ${}.

