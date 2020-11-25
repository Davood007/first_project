// Count Vowels

const countVowels = (str) => {
  const vowels = 'aeiou'
  let counter = 0

  for (let elem of str) {
    if (vowels.includes(elem.toLowerCase())) {
      counter++
    }
  }

  return counter
}

// Opposite Number

const oppsiteNumber = (number) => {
  return -number
}

// console.log(oppsiteNumber(-5))

// Even Or Odd
const checkEvenOrOdd = (num) => {
  return num % 2 === 0 ? 'Even' : 'Odd'
}

// console.log(checkEvenOrOdd(8))
// checkEvenOrOdd(7)
