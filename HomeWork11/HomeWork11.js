
const timeDelay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }
  const getNewSymbol = () => {
    return new Promise((resolve) => {
        const sign = `${Date.now()}`.slice(-5);
        resolve(String.fromCharCode(sign));
    });
  }
  
  async function getRandomChinese(length, time){
    let str = [];
    while(str.length < length){
      str = [...str, await getNewSymbol()];
      await timeDelay(time);
    } 
    return console.log(str.join(""));   
  } 
  getRandomChinese(4, 50);
  
  