const question = document.querySelector('.question');
const theme = document.querySelector('.theme');

const popup = document.querySelector('.popup');
const color = document.querySelectorAll('.fa-tint');
const shadow = document.querySelector('.shadow');

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const erase = document.querySelector('.erase');
const archiveBtn = document.querySelector('.archiveBtn');
const archives = document.querySelector('.archives');

const container = document.querySelector('.container');
const time = document.querySelector('.time');
const batons = document.querySelector('.buttons');

let seconds=0;
let minutes=0;
let countTime;
let i=0


console.log(countTime);
batons.addEventListener('click', e =>{
   let f = e.target.closest('button').classList.value;
   switch(f){
      case('play'):
      clearInterval(countTime);
      countTime = setInterval(() => {
         seconds++;
         if(seconds<10){
         time.textContent = `${minutes}:0${seconds}`;
      }else{
         time.textContent = `${minutes}:${seconds}`;
      } if(seconds==59){
         minutes++;
         seconds=-1
      }
      }, 1000);
      break;
      case('pause'):
      clearInterval(countTime);
      break;
      case('stop'):
      clearInterval(countTime);
      let fulltime;
      if(seconds<10){
         fulltime=`${minutes}:0${seconds}`;
      }else{
         fulltime=minutes + ':' + seconds;
      }
      if(time.textContent!='0:00'){
      document.querySelector('.time2').textContent = `Last time: ${fulltime}`;
      i++;
      let li = document.createElement('p');
      let text = document.createTextNode(`Pozycja ${i} :          ${fulltime}`)
      li.appendChild(text);
      archives.appendChild(li);
      time.textContent='0:00';
      seconds=0;
      minutes=0;
      }
      break;
      case('erase'):
      seconds=0;
      minutes=0;
      i=0;
      time.textContent = `${minutes}:0${seconds}`;
      archives.innerHTML = '';
      break;
      case('archiveBtn'):
      archives.classList.toggle('active');
      break;
}});














theme.addEventListener('click', ()=>{
   popup.classList.add('active');
   shadow.classList.add('active');
   popup.addEventListener('click', e=>{
     container.setAttribute('class', 'container');
     container.classList.add(e.target.closest('span').classList.value);
     popup.classList.remove('active');
     shadow.classList.remove('active');
   })

})

// document.addEventListener('click', e=>{
//    console.log(e.target.closest('button'))
// })