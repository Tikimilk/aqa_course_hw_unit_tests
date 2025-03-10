/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  return typeof word === 'string' 
    ? word.toLowerCase() === word.toLowerCase().split('').reverse().join('') 
    : false;
}
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  return typeof sentence === 'string' && sentence.trim() !== '' 
    ? sentence.split(/\s+/).filter(word => word.length === Math.max(...sentence.split(/\s+/).map(word => word.length))) 
    : []; 
}

export { isPalindrom, findLongestWords };
