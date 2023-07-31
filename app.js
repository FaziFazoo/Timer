//var
let cond = ()=> true;
let hrInput = document.getElementById("hrs_inp");
let minInput = document.getElementById("min_inp");
let secInput = document.getElementById("sec_inp");

//init_var

let initHrs = "00"
let initMin = "00"
let initSec = "00"

//disp
window.onload =() => {
   document.getElementById("hrs").innerHTML=initHrs;
   document.getElementById("mins").innerHTML=initMin;
   document.getElementById("sec").innerHTML=initSec;

}

//timer function

function start(){
    while (cond()) {
     initSec = secInput;
     initMin = minInput;
     initHrs = hrInput;
     
     initSec = initSec-1;

     

    let timerFunction =()=>{
        document.getElementById('hrs').innerHTML= initHrs;
        document.getElementById('min').innerHTML= initMin;
        document.getElementById('sec').innerHTML= initSec;
        
        initSec = initSec-1;
        if (initSec < 10 && initSec>= 0){
            initSec = "0"+ initSec;
        }
        if (initMin < 10 && initMin>= 0){
            initMin = "0"+ initMin;
        }
        if (initHrs < 10 && initHrs>= 0){
            initHrs = "0"+ initHrs;
        }
        if(initSec === -1){
            initMin = initMin-1;
            if(initMin === -1){
                initHrs = initHrs-1;
                if(initHrs === -1){
                   alert("Timer Finished")
                }
            }
        }
        initSec = initSec-1;
    }
    setInterval(timerFunction,1000);


}}
