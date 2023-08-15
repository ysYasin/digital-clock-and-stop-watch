const milisecond = document.getElementById('milisecond')
const second = document.getElementById('second')
const minute = document.getElementById('minute')
let mili = 0;
let sec = 0;
let min = 0;
// idies
let miliSiD;
let secondId;
let minuteID;
//
const miliForMili = 100;
const miliForSec = 1000;
const miliForMinute = miliForSec * 60;
//
function msecondFunc() {
    miliSiD = setInterval(() => {
        ++mili
        if (mili <= 100) {
            milisecond.innerText = `${mili = (mili < 10) ? '0' + mili : mili}`

        } else {
            mili = 0;
        }
    }, miliForMili);
}
// second function
function secondFunc() {
    // Seconds

    secondId = setInterval(function () {
        ++sec
        if (sec <= 60) {
            second.innerText = `${sec = (sec < 10) ? '0' + sec : sec}`

        } else {
            sec = 0;
        }
    }, miliForSec)
}
//munites function
function minutesFunction() {
    minuteID = setInterval(function () {
        ++min
        if (min <= 60) {
            minute.innerText = `${min = (min < 10) ? '0' + min : min}`

        } else {
            min = 0;
        }
    }, miliForMinute)
}
const startbtn = document.getElementById('startBtn');
startbtn.addEventListener('click', function () {
    clearInterval(miliSiD);    // Clear existing intervals
    clearInterval(secondId);
    clearInterval(minuteID);

    msecondFunc();
    secondFunc();
    minutesFunction();

})
// resume btn
const resumeBtn = document.getElementById('resumeBtn');
resumeBtn.addEventListener('click', function () {
    clearInterval(minuteID);
    clearInterval(secondId);
    clearInterval(miliSiD);
    startbtn.innerText = 'RESTART'
})
//
const stopbtn = document.getElementById('stopbtn');
stopbtn.addEventListener("click", function () {
    location.reload();
})
// digital clock
function setInnerText(id, value) {
    const getID = document.getElementById(id)
    const getValue = getID.innerText = value
    return getValue
}
setInterval(() => {
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    // am pd
    // if (h > 12) {
    //     am = pm
    // }
    // 24 to 12
    if (h > 12) {
        h = '0' + h - 12
    }
    // adding 0 before number if number <10
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    // placing on dom
    setInnerText('hour', h)
    setInnerText('minutes', m)
    setInnerText('seconds', s)
})