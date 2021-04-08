const btn = document.querySelector('.optionsBtn')
const form = document.querySelector(".form")
const empty = document.querySelector('.empty')
//time operations
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const hour = document.querySelector('#hour')
const minutes = document.querySelector('#minutes')
const submitBtn = document.querySelector('.submit')
const resetBtn = document.querySelector('.reset')
const warnMsg = document.querySelector('.warning')
const occasion = document.querySelector('#occasion')

//Time Output
const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutesLeft = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const title = document.querySelector('h1')

//Setting a Date
let dateNow;
setInterval(() => {
    dateNow = new Date();
}, 1000);

//MISC FUNCTIONS

const resetValue = () => {
    warnMsg.style.visibility = "hidden";
    occasion.value = "";
    warnMsg.textContent = "a";
    day.value = dateNow.getDate();
    month.value = dateNow.getMonth();
    year.value = dateNow.getFullYear();
    hour.value = dateNow.getHours();
    minutes.value = dateNow.getMinutes();
}
const turnClasses = () =>{
    btn.classList.toggle('active');
    form.classList.toggle('active');
    empty.classList.toggle('active');
    resetValue();
}

//CHECKING IF Date Exist
const daysInMonth = (m, y) => {
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
            case 8 : case 3 : case 5 : case 10 :
                return 30;
                default :
                return 31
            }
        };
const isValidDate=(d, m, y, h, mins)=>{
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y) && h>=0 && h<24 && mins>=0 && mins<60;
};



        //Setting Timer
        
let counting;
const countTime = () =>{
    if(isValidDate(day.value, month.value, year.value, hour.value, minutes.value)){ //If true - Set timer
        let destDate = new Date(year.value, month.value, day.value, hour.value, minutes.value, dateNow.getSeconds());
        let diffDate = destDate.getTime() - dateNow.getTime();
        //INTERVAL TO CUNT A TIME LEFT AND STOP At 0
        if(diffDate>=1000){
            clearInterval(counting);
            counting = setInterval(() => {
                let diffDate = destDate.getTime() - dateNow.getTime();
                days.textContent = Math.floor(diffDate / 86400000);
                hours.textContent = Math.floor((diffDate % 86400000)/ 3600000);
                minutesLeft.textContent = Math.floor(((diffDate % 86400000) % 3600000) / 60000);
                seconds.textContent = Math.floor((((diffDate % 86400000) % 3600000) % 60000)/1000);
                if(diffDate<=999){
                    clearInterval(counting);
                } // TURN OFF IF LESS THAN 0
            }, 1000);
            // ADDING TITLE TEXT
            if(occasion.value.length >= 1){
                title.textContent = occasion.value + " in:";
            }else{
                title.textContent = "Event starts in:";
            }
            turnClasses();
            // WARNINGS IF SOMETHING WENT WRONG 
        }else{
            warnMsg.style.visibility = "visible";
            warnMsg.textContent = "There's nothing to count... It's already a history.";
        }
    }else{
        warnMsg.style.visibility = "visible";
        warnMsg.textContent = "Date doesn't exist. Check what may be wrong.";
    }
}

//TURNING FUNCTIONS On
resetBtn.addEventListener('click', e=>{
    e.preventDefault();
    resetValue();
})
submitBtn.addEventListener('click', e=>{
    e.preventDefault();
    countTime();
})