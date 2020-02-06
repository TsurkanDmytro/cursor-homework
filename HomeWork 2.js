const N = parseInt(prompt("Вкажіть ціле число N"),10);

console.log( "Число N : ", N);

console.log(Number.isInteger(N));

const M = parseInt(prompt("Вкажіть ціле число M"),10);

console.log( "Число M : ", M);

console.log(Number.isInteger(M));

let answer = confirm("Чи враховувати парні числа?");

console.log("answer : ", answer);

let sum = 0;

if(answer) {
  for (let i=N; i<M+1; i++) 
  {sum+=i;}
} else if (answer == false && (N%2==0)) {for (let i = N+1; i<M+1; i+=2) 
  {sum+=i;}
} else {for (let i = N; i<M+1; i+=2)
  {sum+=i;}
}

document.writeln("Сума всіх чисел = " + sum);