// Write a function which takes two numbers and returns their sum

// Step 1: Understand the problem
/*
1. Can I restate the problem in my own words
"implement addition"

2. What are the inputs that go into the problem
- ints?
- floats?
- what about string for large numbers?

3. What are the outputs that should come from the solution to the problem
- int? float? string?

4. Can the outputs be determined from the inputs? In other words, is there enough information available to answer the problem? Sometimes you may need to start solving to know this.
- yes but what about edge cases?

5. How should i label the important pieces of data that are a part of the problem
function name, input names, any variables/constants?

*/

// Write a function which takes in a string and returns counts of each character in the string

// Step 2: explore concrete examples
// charCount('aaaa'); // {a: 4}
// charCount('hello'); // {h:1, e:1, l:2, o:1}

// ('my phone number is 187990'); // blank space? numbers?
// ('Hello hi'); // ignore casing?

// charCount(''); //empty case?
// chatCount(2); //invalid case?

// // Step 3: break it down
// function charCount(str) {
//   // do something
//   // return an object with keys that are lowercase alphanumeric characters in the string
// }

// function charCount(str) {
//   // make object to return at end
//   // loop over string, for each character...
//   //if the char is a number/letter AND is a key in object, add one to count
//   //if the char is number/letter AND is not in object, add it and set value to 1
//   //if character is something else (space, period, etc.) dont do anything
//   // return object at end
// }

// // Step 4: Solve/Simplify
// function charCount(str) {
//   // make object to return at end
//   var result = {};
//   // loop over string, for each character...
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     //if the char is a number/letter AND is a key in object, add one to count
//     if (result[char] > 0) {
//       result[char]++;
//     }
//     //if the char is number/letter AND is not in object, add it and set value to 1
//     else {
//       result[char] = 1;
//     }
//   }
//   //if character is something else (space, period, etc.) dont do anything

//   // return object at end
//   return result;
// }

// Step 5: Look back and refactor
// function charCount(str) {
//   // make object to return at end
//   var result = {};
//   // loop over string, for each character...
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     //if the char is a number/letter AND is a key in object, add one to count
//     //if character is something else (space, period, etc.) dont do anything
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       }
//       //if the char is number/letter AND is not in object, add it and set value to 1
//       else {
//         result[char] = 1;
//       }
//     }
//   }

//   // return object at end
//   return result;
// }

function charCount(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

charCodeAt(0);

console.log(charCount('Hello there bob123!'));
