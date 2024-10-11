let score = 0;
let pscore = document.querySelector("#score");
let interval;
let btn = document.querySelector("#dzik");
let dzikflag = false;
let answerinterval;
btn.addEventListener("click",dzik());
function start()
{
    interval = setInterval(incrementscore,1000);
}
function dzik() {
    if (score%7==0 || scorestring.includes("7")) {
        dzikflag=true;
    }
    else {
        dzikflag=false;
    }
    dzikflag=true;

}

function incrementscore()
{
    dzikflag=false;
    score += 1;
    pscore.innerHTML=score;
    scorestring = score.toString();
    if (score%7==0 || scorestring.includes("7")) {
        console.log(dzikflag);
        if (dzikflag == false){
            score = 0;
            clearInterval(interval);
        }
    }


}

