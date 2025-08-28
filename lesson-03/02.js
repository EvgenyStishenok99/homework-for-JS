// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
const myNumber = 112
function isEven(number) {
  if (number % 2 === 0) {
    return true

  }
  else  {
    return false

  }
  }

  const result = isEven(myNumber)
console.log(result)