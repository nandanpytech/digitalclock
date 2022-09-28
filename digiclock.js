const start=document.querySelector('.start');
const end=document.querySelector('.end');
const reset=document.querySelector(".reset");
const hour=document.querySelector(".hours")
const min=document.querySelector(".minutes");
const sec=document.querySelector(".secs")

let hours=0;
let minutes=0;
let secs=0;
let interval;
start.addEventListener("click",function(){
    interval=setInterval(function(){
        if(secs<59){
            secs+=1;
            sec.innerHTML=sec<10?"0"+secs:secs
        }else{
            secs=0;
            if(minutes<59){
                minutes++;
                min.innerHTML=minutes<10?"0"+minutes:minutes
            }else{
                minutes=0
                if(hours<24){
                    hours++;
                    hour.innerHTML=hours<10?"0"+hours:hours
                }else{
                    hours=0;
                }

            }
        }
      
    },1)
   
})

end.addEventListener("click",function(){
    clearInterval(interval)
})

reset.addEventListener("click",function(){
    location.reload()
})
