// You are given a secret message you need to decipher. Here are the things you need to know to decipher it: For each word:
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)

function decipherThis(str) {
  const words = str.split(' ')
  const result = words.map(word => {
    const code = parseInt(word)
    const length = code.toString().length
    const firstLet = String.fromCharCode(code)
    let newWord = firstLet + word.slice(length)
    if (word.length === length) return newWord
    
    const array = newWord.split('')
    const secondLet = newWord[1]
    const lastLet = newWord[newWord.length - 1]
    array[1] = lastLet
    array[newWord.length - 1] = secondLet
    
    return array.join('')
  })
  
  return result.join(' ')
};

// You're saying good-bye your best friend , See you next happy year .
// Happy Year is the year with only distinct digits , (e.g) 2018
function nextHappyYear(year){
  let numSet = new Set();
  while(numSet.size!==4){
    //resetting Set to size=0 in order to prepare for next year++
    numSet = new Set();
    year++
    let newArr = year.toString().split('').map(Number);
    newArr.map(x=>numSet.add(x));
  }
  //this is my fave line :)
  return parseInt([...numSet].join(''));
}
// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper 
// no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, 
//   and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the 
// monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
function findScreenHeight(width, ratio) {
  let colon = ratio.indexOf(':');
  let top = ratio.slice(0, colon);
  let bottom = ratio.slice(colon+1);
  let height = (width*bottom)/top;
  return(`${width}x${height}`);
}
// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, 
// only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and 
// it is the product of the first n prime numbers.
function numPrimorial(n) {
    let i = 1;
    let counter = 2;
    while (n != 0) {
        if (isPrime(counter)) {
            i *= counter;          
            n--;
        }
        counter++;
    }
    return i;
}
//create function to check if number is prime first
function isPrime(m) {
      for (var j = 2; j < m; j++) {
          if (m % j == 0) {
              return false;
           }
      }
      return true;
}
// Check if a given input is a valid triangle number. Return true if it is, false if it is not (note that any non-integers, 
// including non-number types, are not triangle numbers). You are encouraged to develop an effective algorithm: test cases include really big numbers.
function isTriangleNumber(number) {
  if (number < 0) return false
  if (number === 0) return true;
  let sum=0;
  for(let i=1; i<=number; i++){
    sum+=i;      
    if(sum===number){       
      return true; 
    }
  }
  return false;
}

// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of 
// list should equal the closest prime number.
function minimumNumber(numbers){
  let sum = numbers.reduce((a,b)=>a+b);
  let minNum = 0;
  for(let i=2; i<sum; i++){
    if((sum)%i===0){
      sum++
      minNum++
      //reset i so we can loop through next number
      i=2;
    }
  } 
  return minNum;
}
// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.
function validParentheses(parens){
  //data structure used : stack
  let valid = [];
  for(let i=0; i<parens.length; i++){
    if(parens[0]===')')return false;
    if(parens[i]==='('){
      valid.push(parens[i]);
    }
    else if(valid.length===0 && parens[i]===')')return false;
    else {
      valid.pop();
    }
  }
  return (valid.length === 0);
}

// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 
// It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.
// Modern Roman numerals are written by expressing each digit separately starting with the left 
// most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
// 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
class RomanNumerals {
  // using static for utility functions
  static numerals() {
    return [
      { numeral: 'M', value: 1000 },
      { numeral: 'CM', value: 900 },
      { numeral: 'D', value: 500 },
      { numeral: 'CD', value: 400 },
      { numeral: 'C', value: 100 },
      { numeral: 'XC', value: 90 },
      { numeral: 'L', value: 50 },
      { numeral: 'XL', value: 40 },
      { numeral: 'X', value: 10 },
      { numeral: 'IX', value: 9 },
      { numeral: 'V', value: 5 },
      { numeral: 'IV', value: 4 },
      { numeral: 'I', value: 1 },
    ];
  }
  
  static toRoman(n) {
    let result = '';
    for (const { numeral, value } of this.numerals()) {
      while (n >= value) {
        result += numeral;
        n -= value;
      }
    }  
    return result;
  }
  
  static fromRoman(s) {
    let result = 0; 
    for (const { numeral, value } of this.numerals()) {
      while (s.startsWith(numeral)) {
        result += value;
        s = s.replace(numeral, '');
      }
    }  
    return result;
  }
}

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, 
// the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return 
// the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
function findNb(m) {
  var sum = 0;
  var i = 1;
  while (sum <m) {
    sum = sum + Math.pow(i, 3);
    i++;
  }
  if (sum === m) {
    return (i-1);
  } else {
    return -1;
  }
}
