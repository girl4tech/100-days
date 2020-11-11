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
