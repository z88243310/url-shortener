function generateRandomCode() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []
  collection.push(...lowerCaseLetters)
  collection.push(...upperCaseLetters)
  collection.push(...numbers)

  let randCode = ''
  for (let i = 0; i < 5; i++) {
    randCode += collection[Math.floor(Math.random() * collection.length)]
  }

  return randCode
}



module.exports = generateRandomCode
