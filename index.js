const clock = document.querySelector(".clockTime");

let second = 0;
let minute = 0;
let hour = 0;
let intervalId;


const startWatch = () =>
{
    intervalId = setInterval(() => 
    {
        if(second < 59)
        {
            second++;
        }
        else if(minute > 59)
        {
            hour++;
            minute = 0;
        }
        else
        {
            second = 0;
            minute++;
        }
        
        clock.innerText = `${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`
        // console.log(`${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`);
    }, 1000)
}; 

const stopWatch = () =>
{
    clearInterval(intervalId);
}; 