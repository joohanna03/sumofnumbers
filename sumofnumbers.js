"use strict";
// function using for loop to sum up numbers in an array
function sumFor(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
console.log('SumFor: ', sumFor([1, 2, 3, 4]));
// function using while loop to sum up numbers in an array
function sumWhile(a) {
    let sum = 0;
    let i = 0;
    while (i < a.length) {
        sum += a[i];
        i++;
    }
    return sum;
}
console.log('sumWhile: ', sumWhile([1, 2, 3, 4]));
// function using recursion to sum up numbers in an array
function sumRecursion(a) {
    if (a.length === 0) {
        return 0;
    }
    return a[0] + sumRecursion(a.slice(1));
}
console.log('sumRecursion:', sumRecursion([1, 2, 3, 4]));
// function using Array functional programming to sum up numbers in an array
function sumTheFunctionalWay(a) {
    return a.reduce((sum, num) => sum + num, 0);
}
console.log('sumTheFunctionalWay: ', sumTheFunctionalWay([1, 2, 3, 4]));
