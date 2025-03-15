/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr)
{
  return wordsArr.sort((a, b) => {
    let vowelsA = 0;
    let vowelsB = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') {
        vowelsA++;
      }
    }
    for (let i = 0; i < b.length; i++) {
      if (b[i] === 'a' || b[i] === 'e' || b[i] === 'i' || b[i] === 'o' || b[i] === 'u') {
        vowelsB++;
      }
    }
    return vowelsA - vowelsB;
  });
}
console.log(sortedByVowels(words));

export { sortedByVowels };
