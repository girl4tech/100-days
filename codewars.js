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
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040
function solve(s){
  if(s.length%2 == 1) return -1;
  let count = 0, num = 0;
  for(let i=0;i<s.length;i++) {
    if(s[i] == '(') count++;
    else if (s[i] == ')') {
      if(count > 0) count--;
        else {
          count++;
          num++;
        }
    }
  }
  num += count>>1;
  return num;
} 
// https://www.codewars.com/kata/564057bc348c7200bd0000ff
function thirt(n) {
   const sequence=[1, 10, 9, 12, 3, 4]
   let sum=n;
   while(1){
       let temp=sum
       // convert given num to digits array and reverse to multiply correct pairs
       sum=sum.toString().split``.reverse().join``.split``.map((value,index)=>{
         value=value*sequence[index%6]
         return value
       }).reduce((a,b)=>a+b,0)
     //ensure it is stationary 
       if (sum===temp){break}
     }
   return sum
}
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
function isPangram(string){
  //refactor with ascii values instead
  let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                 'u', 'v','w', 'x', 'y', 'z'];
  let uppercase = ['A', 'B','C','D','E','F',
                 'G','H','I','J','K','L','M','N','O','P','Q','R',
                 'S','T','U','V','W','X','Y','Z'];
  for(let i=0; i<lowercase.length; i++){
    if(!string.includes(lowercase[i]) && !string.includes(uppercase[i])){
      return false;
    }
  }
  return true;
}
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/javascript
var maxSequence = function(arr){
  var maxSum = 0;
  var currentSum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    
    if (currentSum <= 0) {
      currentSum = 0;
    }
    maxSum = Math.max(maxSum, currentSum);
  }  
  return maxSum;
}

// https://www.codewars.com/kata/5ce399e0047a45001c853c2b
function partsSums(ls) {
  let result = [];
  result.push(ls.reduce((a, b) => a + b, 0));
  for ( i = 0; i < ls.length; i++){
      result.push((result[result.length-1]) - ls[i] );
  };
  return result
}
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a
function productFib(prod){
  let n = 0, np = 1;  
  while(n*np < prod) {
    np = n + np;
    n = np - n;
  }
  return [n, np, n*np === prod];
}
// https://www.codewars.com/kata/55143152820d22cdf00001bb
function number9(n){
  let count = 0;
  for (let i = 1; i <= n; i *= 10){
    let curr = Math.floor(n / i);
    count += Math.floor( curr / 10) * i;
    if( curr % 10 === 9)
      count += (n % i) + 1;
  };
  return count;
};

// https://www.codewars.com/kata/5fc4349ddb878a0017838d0f
let redKnight = (N, P) => [((N+P)%2 ? 'Black' : 'White'), P*2]; 

// https://www.codewars.com/kata/58a6568827f9546931000027/javascript
function numberOfCarries(a, b) {
 let res = 0;
  let carr = 0;
  
  while (a+b){
    carr = +(a % 10 + b % 10 + carr > 9);
    res += carr ;
    
    a = a / 10 | 0 ;
    b = b / 10 | 0 ;
  }
  return res ;
}

// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b
function splitInteger(num, parts) {
  let res = Array.apply(null, Array(parts)).map(function() { return Math.floor(num / parts); });
  for (var i = 0; i < (num % parts); i++) { res[i]++; }
  return res;
} 

// https://www.codewars.com/kata/52210226578afb73bd0000f1/javascript
function electrons_around_the_cores( dices ){
  return dices.reduce((a, b) => a + (b & 1? b - 1: 0), 0);
}

// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/solutions/javascript
function chooseBestSum(t, k, ls) {
  let biggestCount = 0, recurseTowns = function(townsSoFar, lastIndex) {
    townsSoFar = townsSoFar || [];
    if (townsSoFar.length === k) {
      let sumDistance = townsSoFar.reduce((a,b)=>a+b);
      if (sumDistance <= t && sumDistance > biggestCount)
        biggestCount = sumDistance;
      return;
    }
    for (var i = lastIndex + 1 || 0; i < ls.length; i++)
      recurseTowns(townsSoFar.concat(ls[i]), i);
  }
  recurseTowns();
  return biggestCount || null;
} 

// https://www.codewars.com/kata/588fe9eaadbbfb44b70001fc
function readZalgo(zalgotext) {
  return zalgotext.replace( /[^\w.,!? ]/g, "" );
}

// https://www.codewars.com/kata/55be10de92aad5ef28000023/javascript
function checkchoose(m, n) {
  let x = 1;
  for (let i = 1; i < n; i++) {
    x = Math.round(x * (n + 1 - i) / i)
    if (x == m) 
      return i;
  }
  return -1;
}

// https://www.codewars.com/kata/59128363e5bc24091a00006f/javascript
let theJanitor = word => [...'abcdefghijklmnopqrstuvwxyz'].map(l=>{
    let a = word.indexOf(l), b = word.lastIndexOf(l);
    return a === -1 ? 0 : b - a + 1;
}); 

// https://www.codewars.com/kata/5ac739ed3fdf73d3f0000048/javascript
const Not = A => A(False)(True);
const And = A => B => A(B)(A);
const Or = A => B => A(A)(B);
const Xor = A => B => A(Not(B))(B);

// https://www.codewars.com/kata/58ce8725c835848ad6000007
function potatoes(p0, w0, p1) {
  return Math.floor(w0 * (100 - p0) / (100 - p1))
}

// https://www.codewars.com/kata/5fc7caa854783c002196f2cb/javascript
function speedify(s) {
  let arr = Array(s.length+26).fill(' ');
  [...s].forEach((char,ind)=>arr[ind+char.charCodeAt()-65]=char);
  return arr.join('').trimRight();
} 

// https://www.codewars.com/kata/5547cc7dcad755e480000004/javascript
function removeNb (n) {
  let results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
} 

// https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x){
  let a = x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]
   return a.length*6; 
}

// https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9/javascript
function burner(c, h, o) {
  let water = Math.floor(Math.min(h/2,o));
  o = o - water
  h = h - water * 2
  let co2 = Math.floor(Math.min(c,o/2)), methane = Math.floor(Math.min(c,h/4))
  return [water, co2, methane];
} 

// https://www.codewars.com/kata/52f5424d0531259cfc000d04/javascript
function sortByBit(array) {
  return array.reduce(function(n, i) {
    return n | (1 << i)
  }, 0)
} 

// https://www.codewars.com/kata/55a29405bc7d2efaff00007c/javascript
function going(n) {
    let result =1, a = 1;
    for(let i=0; i < n-1; i++) {
      a = a/(n-i);
      result = result+a;
    }
    return Math.floor(result*1000000)/1000000;
} 
