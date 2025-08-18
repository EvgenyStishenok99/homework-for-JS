/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let firstNumber = 1;
let sum =0;
while (firstNumber <= 20 ) {
  if (firstNumber % 2 !== 0)
  {sum += firstNumber;}

  firstNumber++;

}
console.log(sum);
