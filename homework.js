// Problem 1
// declare a variable called fruit
// assign your variable the value 6
// console log your variable

let fruit = 6;
console.log(fruit);

//Problem 2 
// write a function called product that accepts two numbers and 
// logs the product in the console and then
// returns the answer when you multiply them both together
// call that function on the numbers 4 & 689 to test it

function product(num1, num2) {

    let product = num1 * num2;
    console.log(product);
    return product;
}

product(4, 689);

// Problem 3
// write a function called evens that takes an array of numbers, removes 
// all the numbers that are odd and returns a new array with only the even numbers
// remember that even numbers have a remainder of 0 when you divide them by 2
// call your function on this array of numbers [4, 37, 18, 29, 52, 103, 22]

//function even(array) {
//  let array = [4, 37, 18, 29, 52, 103, 22]

// return

function evens(num) {
    const newArray = [];
    for (let i = 1; i < num; i++) {
        if (i % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}
let testNumber = [4, 37, 18, 29, 52, 103, 22]
//expectedoutput:[4, 18, 52, 22]





//Problem 4
// write a function called five that takes a word and prints it in the console
// five times
// call your function on the word "pineapple" to test it

function repeat (string,times) {
let output = "";
for (let i=0; i<times;i++) {output += string;}
return output;}

repeat("pineapple",5); 
//expected output: ["pineapple","pineapple","pineapple","pineapple","pineapple"]



//Problem 5
// write a function called shortWords that takes an array of words and then
// returns a new array with only the words that are 3 letters long or less
// call your function on this array ["basin", "pit", "cheese", "bun", "river"]

function shortWordsRevised(array) {
    let arrayLength = array.length;
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {

        if (array[i].length <= 3) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

let testArray = ["basin", "pit", "cheese", "bun", "river"];
//expected output: ["pit", "bun"]
console.log(shortWordsRevised(testArray))
