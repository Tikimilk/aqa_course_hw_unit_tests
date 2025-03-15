/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const numbers = [5, 2, 7, 3, 8, 1, 6];

function findMissingNumber(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let n = numbers.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - sum;
}

console.log(findMissingNumber(numbers)); 

export { findMissingNumber };
