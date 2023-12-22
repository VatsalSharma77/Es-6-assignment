let countNumber = document.getElementById('countNumber');
let count = 0;
let number;
let start_stop = document.getElementById('start_stop');

function StartStop(){
    if (number) {
        clearInterval(number);
        number = null;
        start_stop.innerText="Start";
      }
       else {
        number = setInterval(increment, 1000);
        start_stop.innerText="Stop";
      
       }
}




function increment(){
    count++;
    countNumber.innerHTML = count;
}

function decrement(){
    count--;
    countNumber.innerHTML = count;
}