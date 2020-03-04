/* В этом задании вам необходимо создать класс Student и разрабатывать методы внутри этого класса. */
/* Task 1 У стдентов должны быть следующие свойства: university, course, fullName, они передаются при создании студента(в конструктор). */

class Student {
  marks = [5, 4, 4, 5];
  constructor(university, course, fullName)
  {this.university = university;
    this.course = course;
    this.fullName = fullName;
  }


/* Task 2 
Создайте метод this.getInfo() -> "Студент 1го курса Высшей Школы Мошенничества г.Одесса, Остап Родоманський Бендер", 
метод возвращает совокупную информацию о курсе, учебном заведении и имени студента. */

get getInfo() {
  return console.log ('Студент: ' + this.fullName + '; Університет: ' + this.university + '; Курс: ' + this.course + ';');
}

/* Task 3 
Создайте геттер оценок this.marks, который возвращает массив оценок студента [5, 4, 4, 5] */

set studentMarks(number) {
  if (this.marks === null) {
      return null;
  } else {
      this.marks.push(number);
  }
}

/* Task 4 
Создайте сеттер оценок this.marks = 5, который позволяет поставить оценку студенту. После того, как оценка поставлена, 
геттер должен вернуть массив this.marks -> [5, 4, 4, 5, 5]*/

get getMarks() {
  return console.log(this.marks);
}

/* Task 5
Создайте метод получения среднего балла this.getAverageMark() -> 4.6 */

getAverageMark() {
  if (this.marks == null) {
      return null;
  } else {
      return this.marks.reduce((prevValue, value) => {
          prevValue += value;
          return prevValue;
      }, 0) / this.marks.length;
  }

}

/* Task 6 
создайте метод this.dismiss, который "исключит" студента. После вызова этого метода – ставить студенту оценки
и получать их больше нельзя. (Никаких ошибок, просто возвращается всегда null вместо массива оценок)*/

dismiss() {
  this.marks = null;
  return console.log('студента відраховано!');
}

/* Task 7 
Создайте метод this.recover, который позволит восстановить студента*/

recover() {
  this.marks = [5, 4, 4, 5];
  return console.log('студента відновлено!');
}
}
let dmytro = new Student('LNU Franko', 3, 'Dmytro Tsurkan');
dmytro.getInfo;
dmytro.getMarks;
dmytro.dismiss();
dmytro.getMarks;
dmytro.setMarks = 5;
console.log(dmytro.getAverageMark());
dmytro.recover();


/* Advanced */

/* Создайте новый класс BudgetStudent, который полностью наследует класс Student
Бюджетный студент может получать стипендию с помощью метода this.getScholarship. Получение стипендии сопровождается выводом информации в консоль: Вы получили 1400 грн. стипендии
Метод получения стипендии автоматически вызывается каждые 30 секунд после создания объекта. Подсказка: вызывайте его в constructor
Студент получает стипендию только в том случае, если средний балл у него выше или равен 4.0
Если студент исключен, он не получает стипендию (думаю это было и так очевидно :) ) */

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
      super(university, course, fullName);
      if (parseFloat(this.getAverageMark()) > 4) {
          setInterval(() => {
              this.getScholarship();
          }, 30000);
      }
  }
  getScholarship() {
      if (parseFloat(this.getAverageMark()) > 4){
          return console.log('Ви отримали стипнедію 1250 грн.!');
      } else if(this.marks === null) {
          return console.log('Ви не можете отримати стипендію!');
      }
  }
}

let ivan = new BudgetStudent('Politechnic ', 4, 'Ivan Ivanov ');
ivan.getInfo;
ivan.getMarks;
ivan.getScholarship();