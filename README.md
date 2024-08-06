# README

This is an activity for practicing creating functions. It'll require you to refactor code by wrapping it with functions, adding parameters, and adding some minor error handling.

Follow the instructions in the comments. You can check your code in the spoilers branch.

## Error Handling Notes

In these examples, I've mostly used the `throw new Error()` syntax. This can add some complexity in contrast to simply adding `console.error()` in the **if check**s. The benefit is that when the code is nested in other functions etc, the error can still raise to the top and be useful for debugging. The challenge is that without try/catch error handling, you miss the more elegant message from `console.error()` as well as the code execution is stopped

### Reasons why the code examples are this way

- It'll help you get better at debugging
- It's a better approach in the long term
- It gets you to engage in block scoping with const and let
- It leads you to better habits using try/catch blocks

### Easier Approach with `console.error()`

If the `throw new Error()` syntax is difficult to grasp, start by using `console.error()` in your if checks, and then advance to separating them with try catch blocks etc later

## Code Notes

The spoiler code provided demonstrates the Single Reponsibility Principle (SPR) and is by not means the only way that these solutions can be reached. I've put them together this way so that you can visualize the difference between a **return** and **console.log** which is a common source of bugs for beginner JS developers.

The patterns presented also demonstrate how you can use smaller functions with one another and set default parameters (even with a function).

## Steps

1. Wrap the code in a function
2. Create parameters for variables
3. execute the function and pass the variable value into the function
