/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + arr[i];
  }

  return result;
}
console.log(doubleEachCharacter("ззззззззз"));