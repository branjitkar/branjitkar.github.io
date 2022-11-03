/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* 1: max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

/* 2: max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}
console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

// 3: takes a character and checks if it is a vowel
function isVowel(a) {
  return ["a", "e", "i", "o", "u"].includes(a);
}
console.log(
  "Expected output of isVowle('e') is true  " +
    myFunctionTest(true, isVowel("e"))
);
console.log(
  "Expected output of isVowle('n') is false  " +
    myFunctionTest(false, isVowel("n"))
);

// 4: sums all numbers in an array of numbers
function sum(arr) {
  let sum = arr.reduce((s, num) => s + num, 0);
  return sum;
}
console.log(
  "Expected output of sum([4,10,12.5]) is 26.5  " +
    myFunctionTest(26.5, sum([4, 10, 12.5]))
);

// 4: mulitpies all numbers in an array of numbers
function multipy(arr) {
  let sum = arr.reduce((s, num) => s * num, 1);
  return sum;
}
console.log(
  "Expected output of multipy([4,10,12.5]) is 500  " +
    myFunctionTest(500, multipy([4, 10, 12.5]))
);

// 5: reverses a string
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(
  "Expected output of reverse('turtles') is 'seltrut'  " +
    myFunctionTest("seltrut", reverse("turtles"))
);

// 6: returns the length of the longest word from an array of words
function findLongestWord(strArr) {
  return strArr.reduce(
    (longest, word) => (longest < word.length ? word.length : longest),
    0
  );
}
console.log(
  "Expected output of findLongestWord(['turtles', 'apple', 'cat']) is 7  " +
    myFunctionTest(7, findLongestWord(["turtles", "apple", "cat"]))
);

// 7: returns the array of words with length greater than i from an array of words
function filterLongWords(strArr, i) {
  return strArr.filter((str) => str.length > i);
}
console.log(
  "Expected output of filterLongWords(['turtles', 'apple', 'cat'], 4) is [\"turtles\",\"apple\"]  " +
    myFunctionTest(
      '["turtles","apple"]',
      JSON.stringify(filterLongWords(["turtles", "apple", "cat"], 4))
    )
);
