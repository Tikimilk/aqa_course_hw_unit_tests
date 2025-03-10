/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  return arr.flat(); 
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
    function devideBy(sentence) {
      return sentence
      .split(/\s+/)
      .map((el, i) => {
        return i === 0 ? el.toLowerCase() : el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      })
      .join('_');
  }
    
    console.log(devideBy('I am super engineer'));


/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */ 

    // так и не отработал тест
// function fibonacci(n) {
//   if (n <= 1) {
//     return n; 
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
//   if (n > 21) {
//     return 'Error'; 
//   }
// }
// console.log(fibonacci(8)); 

function fibonacci(n) {
  let firstValue = 0;
  let secondValue = 1;
  let result;
  for (let i = 2; i <= n; i++) {
    result = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = result;
  }
  return n === 0 ? firstValue : n === 1 ? secondValue : result;
}

export { mergeArrays, fibonacci, devideBy };

