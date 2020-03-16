const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* Task 1 
Создайте функцию getMyTaxes.call(country, salary) -> number; – которая считает сколько налогов вы заплатите как IT-специалист в какой-либо стране. 
Функция должна вызываться через call и работать с данными через this */

function getMyTaxes(salary) 
{
  let result = salary * this.tax;
  return result;
}
console.log("Function 1:")
console.log(getMyTaxes.call(ukraine, 5000));
console.log(getMyTaxes.call(latvia, 5000));
console.log(getMyTaxes.call(litva, 5000));

/* Task 2 
Создайте функцию getMiddleTaxes.call(country) -> number; – которая считает сколько в среднем налогов платят IT-специалистсы в каждой стране. 
(tax * middleSalary). Функция должна вызываться через call и работать с данными через this */

function getMiddleTaxes() 
{
  let result = this.middleSalary * this.tax;
  return result;
}
console.log("Function 2:")
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

/* Task 3 
Создайте функцию getTotalTaxes.call(country) -> number; – которая считает сколько всего налогов платят IT-специалистсы в каждой стране. 
(tax * middleSalary * vacancies). Функция должна вызываться через call и работать с данными через this */

function getTotalTaxes() 
{
  let result = this.middleSalary * this.tax * this.vacancies;
  return result;
}
console.log("Function 3:")
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

/* Task 4 
Создайте функцию getMySalary(country) – которая будет писать в консоль объект вида: 
{ salary: number, taxes: number, profit: number } каждые 10 секунд. Значения salary – 
генерируйте случайным образом в диапазоне 1500-2000. taxes – расчитывается в зависимости от от выбранной страны и значения salary.
profit = salary - taxes; */

function getMySalary(country) 
{
  let result = {};
  result.salary = Math.floor(1500 + Math.random() * (2000 + 1 - 1500));
  result.taxes = Math.floor(this.tax * result.salary);
  result.profit = result.salary - result.taxes;
  return result;
}

setInterval(() => console.log(getMySalary(ukraine)), 10000);
console.log("Function 4:")
