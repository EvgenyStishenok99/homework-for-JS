/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// function includesElement(myArray, myElement) {
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === myElement) {
//       return true;
//     }
//   }
//   return false;
// }
// function findUniqueElements(arr) {
//   const result = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//
//     if (!includesElement(result, currentElement)) {
//       result.push(currentElement);
//     }
//   }
//
//   return result;
// }


function findCommonElements(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr2.length; i++) {
    // Проверяем, есть ли элемент из arr2 в arr1
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        result.push(arr2[i]);
        break; // Прерываем внутренний цикл после нахождения совпадения
      }
    }
  }

  return result;
}

console.log(findCommonElements( [1, 2, 3], [2, 2, 3, 3]))
