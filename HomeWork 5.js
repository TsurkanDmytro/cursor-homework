/*  TASK 1: 
Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел. В функции есть параметры: 
length - длина массива, min – минимальное значение целого числа, max – максимальное значение целого числа. Пример: 
getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] */

  function getRandomArray(lenght, min, max) {
    let array = [];
    for (let i = 0; i < lenght; i++) {
        array[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return array;
}
console.log(getRandomArray(12, 1, 50));

/*  TASK 2:
Создайте функцию getModa(...numbers) – которая вычисляет моду всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
Пример: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2 */


function getModa(...numbers) {
    let arguments = [...numbers];
    let moda = [];
  
    arguments.map((el, i) => {
      let allNumbers = arguments.filter(num => num === arguments[i]);
      if (allNumbers.length > moda.length && (el ^ 0) === el) {
        moda = allNumbers;
      }
    });
    console.log(moda[0]);
  }
  getModa(5.5, 8.1, 8.5, 8, 8, 3);
 

/*  TASK 3:
 Создайте функцию getAverage(...numbers) – которая считает среднее арифметическое всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
Пример: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */


function getAverage(...numbers) {
    let arguments = [...numbers];
    let count = arguments.length;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      (arguments[i] ^ 0) === arguments[i] ? (sum += arguments[i]) : (count -= 1);
    }
    return sum / count;
  }
  
  console.log(getAverage(5, 38, 22, 61.5, 1.8, 2, 26, 84, 57, 87, 69, 3.7, 56, 5,));


/*  TASK 4:
  Создайте функцию getMedian(...numbers) – которая считает медиану всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
Пример: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Пример: getMedian(1, 2, 3, 4) –> 2.5 Пример: getMedian(1, 2, 3, 4, 5) –> 3 */


function getMedian(...numbers) {
    const myNumbers = [...numbers];
    const length = myNumbers.length;
    const sortedNumbers = myNumbers.sort((a, b) => a - b);
    let result;
    if (length % 2 !== 0) {
        result = sortedNumbers[Math.floor(length / 2)];
    } else {
        result = (sortedNumbers[length / 2] + sortedNumbers[length / 2 - 1]) / 2;
    }
    return result;
  }
  
  console.log(getMedian(11, 8, 5, 9, 3, 5, 5));

 /*  TASK 5:
   Создайте функцию filterEvenNumbers(...numbers) – которая фильтрует четные числа переданные как аргументы функции
  Пример: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */


  function filterEvenNumbers(...numbers) {
    const filteredNumbers = numbers.filter(number => {
        if (number%2!=0) {
            return number;
        }
    });
    return filteredNumbers;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

/*  TASK 7:
 Создайте функцию getDividedByFive(...numbers) – которая отфильтрует все элементы в массиве и оставит только те, которые делятся нацело на 5
Пример: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */



function getDividedByFive(...numbers) {
    const filteredNumbers = numbers.filter(element => {
        if (element%5==0) {
            return element;
        }
    });
    return filteredNumbers;
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

/*  TASK 8:
 Создайте функцию replaceBadWords(string) – которая 1) разобьет фразу на слова, 2) заменит плохие слова на звездочки (*). 
При решении этого задания необходимо разбить массив на слова с помощью функции .split(" "), после чего массив необходимо будет склеить .join(" ") 
Плохие слова: shit и fuck. Предусмотрите возможность расширять список этих слов в будущем.
Пример: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Пример: replaceBadWords("Holy shit!") -> "Holy ****!" 
Пример: replaceBadWords("It's bullshit!") -> "It's bull****!" */


function replaceObsceneWords(string) {
    let obsceneWords = ['shit', 'fuck'];
    let arrayWords = string.split(' ');
    for(let i = 0; i < obsceneWords.length; i++) {
        arrayWords = arrayWords.map((value) => {
            return value.replace(obsceneWords[i], '*'.repeat(obsceneWords[i].length));
        });
    }
    return arrayWords.join(' ');
}
console.log(replaceObsceneWords('Are you fucking kidding? That is a shit!'));
