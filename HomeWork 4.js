const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];



/* Task 1 Разбейте студентов на пары(парень + девушка) для работы над проектом. У вас должен получиться вложенный массив с
парами студентов: [["Саша", "Лена"], [..], [...]]; */



  function getPair(students) {
     return [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]]
        ];
      }
      const pair = getPair(students);
    
    console.log(pair);

/* Task2 Сопоставьте пары из предыдущего задания и темы проектов, над которым студенты будут работать. Должен получиться
вложенный массив вида: [["Саша и Лена", "Теория автоматов"], [...], [...]] */



function getThemes(pair, themes) {
  let pairThemes = [];
  for (let i = 0; i < pair.length; i++) {
      pairThemes[i] = [pair[i].join(" + "), themes[i]];
  }
  return pairThemes;
}
const pairsWithThemes = getThemes(pair, themes);

console.log(pairsWithThemes);



/* Task 3  Сопоставьте оценки(marks) со студентом(students): [["Саша", 4], [...], [...]] */


function getStudentsMarks(students, marks) {
  let studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks[i] = [students[i], marks[i]];
  }
  return studentsMarks;
}
const getMarks = getStudentsMarks(students, marks)

console.log(getMarks);


/* Task 4  Поставьте каждой паре случайную оценку(от 1 до 5) за проект(тут функция будет нечистой, 
  но не должна мутировать массив): [["Саша и Лена", "Теория автоматов", 5], [...], [...]] */

  function getRandomMarks(pairsWithThemes){
    let pairMarks = [];
    for (let i = 0; i < pair.length; i++) {
        pairMarks[i] = pairsWithThemes[i].concat(Math.floor(Math.random() * 5) + 1);
    }
    return pairMarks;
}
const pairMarks = getRandomMarks(pairsWithThemes);

console.log(pairMarks);



document.writeln(` <b>1 // Студенти по парах:</b> ${pair.join(" ; ")}.<br>`)
document.writeln(` <b>2 // Пари - Теми:</b> ${pairsWithThemes.join(" ; ")}.<br>`)
document.writeln(` <b>3 // Оцінки студентів:</b> ${getMarks.join(" ; ")}.<br>`)
document.writeln(` <b>4 // Оцінки студентів:</b> ${pairMarks.join(" ; ")}.<br>`)