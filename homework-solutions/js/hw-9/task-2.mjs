/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. 
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) 
{if (typeof character.name === 'string' && typeof character.age === 'number') {
  characters.push(character);
}
else {
  throw new Error('Invalid input');
}}
addCharacter({ name: 'Wilma', age: 30 });
console.log(characters);


function getCharacter(name) {
  return characters.find((character) => character.name === name);
}
console.log(getCharacter('Barney'));

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('Invalid input');
  }
  return characters.filter((character) => character.age >= minAge);
}
//Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
  if (typeof name !== 'string' || typeof newCharacter !== 'object' || newCharacter === null) {
    throw new Error('Invalid input');
  }

  const character = getCharacter(name);

  if (!character) {
    throw new Error(`Character with name "${name}" not found`);
  }

  Object.assign(character, newCharacter);
}
//Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
  const index = characters.findIndex((character) => character.name === name);

  if (index === -1) {
    throw new Error(`Character with name "${name}" not found`);
  }

  characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
