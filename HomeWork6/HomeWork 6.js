const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


/*  Task 1 
Cоздайте функцию getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - 
которая возвращает список предметов для конкретного студента. Обратите внимание – название 
предмета необходимо возвращать с большой буквы, а _ – заменить на пробел */



function getSubjects(student){
  let result = [];
  student = Object.keys(student.subjects);
  student = student.map((subject)=>{
  if(subject.includes("_")){
      subject = subject.replace("_", " ");
  }
  result = subject[0].toUpperCase();
  subject = subject.slice(1);
  subject = result.concat(subject);

  return subject;
});
  return student;
}

console.log(getSubjects(students[0]));


/*  Task 2 
Создайте функцию getAverageMark(students[0]) --> 3.79 – которая вернёт среднюю оценку 
по всем предметам для переданного студента НЕ МАССИВА СТУДЕНТОВ. Оценку округлите до 2ого знака. 
Можно использовать функции написанные в предыдущих домашних заданиях :) */

function getAverageMark(student){
  student = Object.values(student.subjects);
  student = student.map((subject)=>{
      return (subject.reduce((acc, mark)=> acc + mark) / subject.length);
  }); 
  return (student.reduce((sum, EachSubjectMark)=> sum + EachSubjectMark) / student.length).toFixed(2);
}

console.log(getAverageMark(students[0]));


/*  Task 3  
Создайте функцию getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
которая возвращает информацию общего вида по переданному студенту (вам пригодится функция из предыдущего задания). 
Должна быть выведена информация: курс, имя, средняя оценка. */

function getStudentInfo(students) {
  let result = [];
  let averageMark = getAverageMark(students);
  result.course = students.course;
  result.name = students.name;
  result.averageMark = averageMark;
  return result;
};

console.log(getStudentInfo(students[0])); 


/*  Task 4
Создайте функцию getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – которая возвращает имена студентов в алфавитном порядке. */

  function getStudentsNames(students) {
    let res = [];
    for(let i = 0; i<students.length; i++) {
        res.push(students[i].name);
    }
    return res.sort();
  }

  console.log(getStudentsNames(students));
  

/*  Task 5 
Создайте функцию getBestStudent(students) --> "Anton" – которая возвращает лучшего студента из списка по показателю средней оценки. */



function getBestStudent(obj) {
  let bestStud = "";
  let avarage = 0;
  for (let i = 0; i < obj.length; i++) {
      x = getAverageMark(obj[i]);
      if (parseFloat(x) > parseFloat(avarage)) {
          avarage = x;
          bestStud = obj[i].name;
      }
  }
  return bestStud;
}

console.log("Найкращий студент - " + getBestStudent(students))



/*  Task 6 
Создайте функцию calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – которая возвращает объект, 
в котором ключи это буквы в слове, а значения – количество их повторений. */ 


function calculateWordLetters(word) {
  let letterCount = {};
  for(let i = 0; i<word.length ; i++) {
    letterCount[word[i]] = 0;
      for(let j = 0; j < word.length ; j++) {
          if (word[i]==word[j]){
            letterCount[word[i]] += 1;}
      }
  }
  return letterCount;
}

console.log(calculateWordLetters("абракадабра"));



