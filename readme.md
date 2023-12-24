JS Array Methods:
*****************
1- Array length:
returns the length of an array.
2- Array toString():
converts an array to a string of (comma separated) array values.
3- Array join():
joins all array elements into a string.
4- Array pop():
removes the last element from an array and returns it's value.
5- Array push():
adds a new element to an array (at the end).
6- Array shift():
removes the first array element and "shifts" all other elements to a lower index. method returns the value that was "shifted out".
7- Array unshift():
adds a new element to an array (at the beginning), and returns the new array length.
8- Array Length:
represents the number of elements in that array. 
9- Array delete:
Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array.
10- Array concat():
creates a new array by merging (concatenating) existing arrays.
11- Flattening an Array:
creates a new array with sub-array elements concatenated to a specified depth.
12- Array splice():
Can be used to add new items to an array.
It returns an array with the deleted items.
The first parameter defines the position where new elements should be added.
The second parameter (0) defines how many elements should be removed.
The rest of the parameters define the new elements to be added.
You can use splice() to remove elements without leaving "holes" in the array
13- Array slice():
slices out a piece of an array into a new array. It creates a new array. It does not remove any elements from the source array. The method then selects elements from the start argument, and up to (but not including) the end argument.
14- Array toString():
JavaScript automatically converts an array to a comma separated string when a primitive value is expected. returns a string representing the specified array and its elements. 

*****************************************************************************************

Control Flow Statements:
***********************

In JavaScript, there are three main types of control flow statements:

    if/else statements
    switch statements
    loops.

1- If/Else Statements:
The if…else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

2- Switch Statements:
Switch statements are used to execute a block of code based on the value of a variable or expression.

3- Loops:
Loops are used to execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScript: for loops and while loops.

    1- For Loops:
    A for loop repeats until a specified condition evaluates to false.

    2- While Loops:
    A while loop simply repeats itself while something is true. Theoretically a while loop can loop forever. It continues until the condition is false. So you have to make sure your condition changes to false to stop the loop.

    3- Do…While Loop:
    The do…while loop will first execute the code, then continue while the condition remains true.

What’s the difference between == and === in if statements?
The == operator checks equality with type conversion, whereas === checks equality without type conversion, often referred to as “strict equality.”    

*****************************************************************************************

Functions:
*********

A JavaScript function is a block of code designed to perform a particular task. It's executed when "something" invokes it (calls it).
A function is composed of a sequence of statements called the function body. Values can be passed to a function as parameters, and the function will return a value.
Functions are first-class objects, they can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

With functions you can reuse code.
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.

When JavaScript reaches a return statement, the function will stop executing.

*Local Variables:

    Variables declared within a JavaScript function, become LOCAL to the function.
    Local variables can only be accessed from within the function.
    A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.

* Parameters:

We can pass arbitrary data to functions using parameters.

When a value is passed as a function parameter, it’s also called an argument.

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).

The rest parameter allows representing an indefinite number of arguments as an array.
Destructuring allows unpacking elements from arrays, or properties from objects, into distinct variables.

* The this keyword refers to the object that the function is accessed on — it does not refer to the currently executing function, so you must refer to the function value by name, even within the function body. The arrow function syntax does not have access to arguments or this.