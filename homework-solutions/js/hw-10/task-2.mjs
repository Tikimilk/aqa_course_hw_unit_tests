/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
function countOccurrences(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Первый аргумент должен быть массивом");
  }

  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
}
console.log(countOccurrences(numbers, 1));
console.log(countOccurrences(numbers, 2));
export { countOccurrences };
