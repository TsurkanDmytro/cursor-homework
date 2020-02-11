/* =Завдання 1= 
(Создать функцию getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе. 
Примеры: 1236 -> 6, 987 -> 9, 385 -> 8) */

function getMaxDigit(number) {
  let arrOfDigits = [];
  let maxDigits = 0;
  arrOfDigits = number.toString().split("");
  for (let i = 0; i < arrOfDigits.length; i++) {
    if (maxDigits < arrOfDigits[i]) {
      maxDigits = arrOfDigits[i];
    }
  }
  return maxDigits;
}

console.log(getMaxDigit(33525));

/* =Завдання 2= 
(Создать функцию, которая вычисляет степень числа. Не используя Math.pow и **. Используйте цикл) */

function getExpon(num, exp) {
  let res = 1;
  for (let i = 0; i < exp; i++) {
    res *= num;
  }
  return res;
}

console.log(getExpon(8, 3));

/*=Завдання 3= 
(Создать функцию, которая форматирует имя, делая первую букву заглавной.
("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);) */

function getCapitalizedName(name) {
  let changedName = "";
  let firstLetter = name.substr(0, 1).toUpperCase();

  changedName = firstLetter + name.toLowerCase().slice(1);
  return changedName;
}

console.log(getCapitalizedName("dmYTRo"));

/* =Завдання 4= 
(Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы.
(Налог = 18% + 1.5% -> 19.5%). Пример: 1000 -> 805) 
 */

const taxCounter = mySalary => parseInt(mySalary * 0.805);

console.log(taxCounter(14200));

/* =Завдання 5= 
(Создать функцию, которая возвращает случайное целое число в диапазоне от N до M.
Пример: <сode>getRandomNumber(1, 10) -> 5) */

const getRandomNumber = (N, M) => {
    return Math.floor(Math.random() * (M - N + 1)) + N;
  }

  console.log(getRandomNumber(4,17));

/* =Завдання 6= 
(Создать функцию, которая считает сколько раз определенная буква повторяется в слове.
Пример: countLetter("а", "Асталависта") -> 4) */

const countLetter = (letter, str) => {
    const changedStr = new RegExp(letter.toLowerCase(), 'g');
    return str.toLowerCase().match(changedStr).length;
  }

  console.log(countLetter("о", "самообороноспособность"));
  

/* =Завдання 7= 
(Создайте функцию конвертиующую доллары в гривны и наоборот в зависимости от наличия символа $ или UAH в строке. 
Пример: convertCurrency("100$") -> 2500 грн. или convertCurrency("2500UAH") -> 100$
Учтите, другие валюты не конвертируются, нужно выводить ошибку, а так же регистр uah не имеет значения.)*/

function exchange(str) {
  let convDolToHrn = str.search(/\$/i);
  let convHrnToDol  = str.search(/UAH/i);
  if (convDolToHrn  >= 0) {
    let amoundInHrn = (parseInt(str) * 25).toFixed(2);
    return amoundInHrn;
  } else if (convHrnToDol >= 0) {
    let amoundInDol = (parseInt(str) / 25).toFixed(2);
    return amoundInDol;
  } else {
    return "Нажаль, ми обмінюємо лише $ та UAH";
  }
}

console.log(exchange('100$'));

/* =Завдання 8= 
(Создайте функцию генерации случайного пароля (только числа), длинна устанавливается пользователем 
или по умолчанию = 8 символам.
Пример: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124)*/


function makePassword(length = 8) {
  let password = "";
  if (length === 0) {
    return "Пароль повинен містити не меньше одного символа!";
  }
  for (let i = 1; i <= length; i++) {
    password += Math.floor(Math.random() * 10);
  }
  return password;
}

console.log(makePassword(6));


/* =Завдання 9= 
(Создайте функцию, которая удаляет все буквы из предложения. Пример: deleteLetters('a', "blablabla") -> "blblbl") */


const deleteLetters = (letter, str) => {
    const changedStr = new RegExp(letter, 'g');
    return str.replace(changedStr, '');
  }

console.log(deleteLetters("о", "самообороноспособность"));

/* =Завдання 10= 
(Создайте функцию, которая проверяет является ли слово палиндромом.
Пример: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false) */


function isPalindrome(newWord) {
    let checkWord = newWord.toLowerCase() == newWord.toLowerCase().split().reverse().join();
    return checkWord;
}

console.log(isPalindrome('ШАЛАШ'));


/* =Завдання 11= 
(Создайте функцию, которая удалит из предложения буквы, которые встречаются более 1 раза.
Пример: deleteDuplicateLetter("Бисквит был очень нежный") -> "сквтлчьжй") */


function deleteDuplicateLetter(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (result.toLowerCase().indexOf(str[i])<0) {
            result = result+str[i];
        } 
        else { continue; }
    }
    return result;
}

console.log(deleteDuplicateLetter("Бисквит был очень нежный"));