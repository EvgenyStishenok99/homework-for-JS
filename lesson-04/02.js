/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
import {includesElement} from './01.js'


//findUniqueElements будет использовать глобальную includesElement
// function includesElement(myArray, myElement) {
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === myElement) {
//       return true;
//     }
//   }
//   return false;
// }

function findUniqueElements(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (!includesElement(result, currentElement)) {
      result.push(currentElement);
    }
  }

  return result;
}
const endResult = findUniqueElements([true, true,true,true,true,false, true, false]);
console.log(endResult);