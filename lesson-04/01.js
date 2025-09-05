/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/
const arr = [1,2,3,4,5]
const elements = 1



export function includesElement(myArray, myElement) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === myElement) {
      return true

    }
  }
 return false
}

 // const full=includesElement(array, elements)
console.log(includesElement(arr, elements))
