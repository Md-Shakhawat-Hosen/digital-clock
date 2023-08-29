const date = new Date();

console.log (date.toString().split(' ')[4].split(':'))


const second = document.getElementById('second');
const minId = document.getElementById('min');
const hourId = document.getElementById('hour');

 let time = date.toString().split(" ")[4].split(":")[2];

 let min = date.toString().split(" ")[4].split(":")[1];

 let hour = date.toString().split(" ")[4].split(":")[0];


const intervalId = setInterval(() => {
    time = parseInt(time) + 1
    // min = parseInt(min) + 1;
    second.innerText = time < 10 ? '0'+time: time;
    
    if (time === 60) {
        time = 0;
        min = parseInt(min) + 1;
    }
    if (parseInt(min) === 60) {
         min = 0;
         hour = parseInt(hour) + 1
    }
    if (hour === 24) {
        hour = 0;
    }

    minId.innerText = min < 10 ? "0"+parseInt(min) : min;
    
    hourId.innerText = hour < 10 ? '0'+parseInt(hour): hour;
    
   
    
}, 1000);

