  
const keys =  document.getElementById('keys');

keys.addEventListener('click',(event)=>{
    playMusic(event.target.id.toUpperCase())
})

document.addEventListener('keydown',event=>{
    playMusic(event.key.toUpperCase())
})
const playMusic = (id) =>{
  document.getElementById(`${id}-sound`).play();
  audio.currentTime = 0;
  setTimeout(()=>{
    document.getElementById(`${id}-sound`).pause();
  },1000)
}

document.addEventListener('keydown',function (event) {
  const audio = document.getElementById(event.key.toUpperCase());
  audio.currentTime = 0;
  const item = document.querySelector(`.${event.key.toUpperCase()}`);
  audio.play();
  item.classList.add('playing');

  setTimeout(()=>{
      item.classList.remove('playing')
  },300);
});