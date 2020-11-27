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
