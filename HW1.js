const JACKET = 123.965;
const SHIRT = 15.678;
const JEANS = 90.2345;
/* Максимальне число */
const maxSum = Math.max(15.678,123.965,90.2345); 

/* Мінімальне число */
const minSum = Math.min(15.678,123.965,90.2345);

/* Сума всіх товарів */
const clothes = (JACKET+SHIRT+JEANS);
console.log(clothes);

/* Ціла частина вартості товарів */
let sumWithoutCents = (Math.floor(JACKET)+Math.floor(SHIRT)+Math.floor(JEANS));
console.log(sumWithoutCents);

/* Заокруглена сума до сотень */
let roundedSum = Math.ceil(Math.ceil(clothes / 100) * 100);
console.log(roundedSum);
  
/* Чи є сума всіх товарів парним чи непарним числом */
  let booleanValue = (Math.floor(clothes) % 2) == 0;
  console.log(booleanValue);

  /*   if (sumeWithoutCents & 1 ) {  console.log( "непарне" );
  } else {
    console.log("парне" );
  } */

 /* Здача з 500 */
  let restOfMoney = 500 - clothes;
  console.log(restOfMoney);

/* Середнє значення цін */
  let averageSum = (clothes / 3).toFixed(2);
  console.log(averageSum);

/* Випадкова знижка клієнта */
  let clientsDiscount = Math.random() * 100;
  clientsDiscount = Math.round(clientsDiscount);
  console.log(clientsDiscount + ' % ');

/* Сума зі знижкою */
let sumWithDiscount = (clothes * (100 - clientsDiscount)/100).toFixed(2);
console.log(sumWithDiscount);

/* Втрачена вигода з врахуванням знижки */
let moneyDiscount = Math.round(sumWithoutCents - sumWithDiscount);
let earnedMoneyWithDiscount =((sumWithoutCents / 2) - moneyDiscount);
console.log(earnedMoneyWithDiscount);

/* ADVANCED */
document.writeln(`
    Максимальне число: ${maxSum};<br>
    Мінімальне число: ${minSum};<br>
    Cума всіх товарів: ${clothes};<br>
    Ціла частина вартості товарів: ${sumWithoutCents};<br>
    Заокруглена сума до сотень: ${roundedSum};<br>
    Парне чи непарне число: ${booleanValue};<br>
    Здача з 500: ${restOfMoney};<br>
    Середнє значення цін: ${averageSum};<br>
    Випадкова знижка клієнта: ${clientsDiscount}%;<br>
    Сума зі знижкою: ${sumWithDiscount};<br>
    Втрачена вигода: ${earnedMoneyWithDiscount};<br>

`);