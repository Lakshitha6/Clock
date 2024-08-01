
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hourTime = date.getHours();
    let MiniteTime = date.getMinutes();
    let SecTime = date.getSeconds();

    let hourotation = 30*hourTime + MiniteTime/2;
    let mRotation = 6*MiniteTime;
    let sRotation = 6*SecTime;

    hour.style.transform = `rotate(${hourotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);

// Call function to display time immediately when page refresh
displayTime()

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.querySelector('.hour').textContent = hours;
    document.querySelector('.min').textContent = minutes;
    document.querySelector('.sec').textContent = seconds;
}

setInterval(updateTime, 1000);

updateTime();