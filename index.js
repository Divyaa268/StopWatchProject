const clock = document.querySelector(".clockTime");

let second = 0;
let intervalId;


const startWatch = () =>
{
    intervalId = setInterval(() => 
    {
        second++;
        console.log(second);
    }, 1000)
}; 

const stopWatch = () =>
{
    clearInterval(intervalId);
}; 