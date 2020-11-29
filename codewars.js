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
