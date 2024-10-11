let score = 0;
let pscore = document.querySelector("#score");
let interval;
let dzikflag = false;
const startbtn = document.querySelector("#startbutton");
startbtn.addEventListener("click",start);
const btn = document.querySelector("#dzik");
btn.addEventListener("click",dzik);
function start()
{
    interval = setInterval(incrementscore,1000);
}
function dzik() {
    if (((score%7)==0 || scorestring.includes("7")) && score!=0) {
        dzikflag=true;
    }
}
function checkDzik() {
    if (dzikflag == false){
        console.log(score);
        score = 0;
        pscore.innerHTML=score;
        clearInterval(interval);
        
    }
}
function incdelay() {
    dzikflag=false;
    score+=1;
}
function incrementscore()
{
    
    pscore.innerHTML=score;
    scorestring = score.toString();
    if (((score%7)==0 || scorestring.includes("7")) && score!=0) {
        console.log(dzikflag);
        setTimeout(checkDzik,950);
    }
    console.log(dzikflag);
    setTimeout(incdelay,960);

}



}

