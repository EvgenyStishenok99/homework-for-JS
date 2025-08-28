// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
const number_one = 45
const number_two = 412
const number_three = 1235


function findLargest(num1, num2, num3) {
  if(num1 > num2 && num1 > num3) {
    return num1
  }
  else if (num2 > num1 && num2 > num3) {
    return num2
  }
  else {
    return num3
  }
}

const result = findLargest(number_one, number_two, number_three)
console.log(result)
