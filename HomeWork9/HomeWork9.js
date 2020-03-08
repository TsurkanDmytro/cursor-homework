let squares = document.querySelector('.bigSquare');
function generateBlocks() {
  for (let i = 0; i < 25; i++) {
    let littleSquare = document.createElement('div');
    littleSquare.className = 'blocks';
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    littleSquare.style.width = '50px';
    littleSquare.style.height = '50px';
    littleSquare.style.background = `rgb(${r},${g},${b})`;
    squares.append(littleSquare);
  }
}

function removeBlocks() {
  let allBlocks = document.querySelectorAll('.blocks');
  for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].remove();
  }
}


function generateBlocksInterval() {
  removeBlocks();
  let interval = setInterval(() => {
    removeBlocks();
    generateBlocks();
  }, 1000);
  return interval;
}

generateBlocksInterval();
