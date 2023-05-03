var play = false;
var score;
var action;
var timeremain;
var correctans;
var hscore;
document.getElementById("start_reset").onclick = 
function(){
    if(play == true)
    {
        location.reload();
        document.getElementById("highscore").innerHTML = hscore
        show("high");
    }
    else{
        play = true;
        score = 0;
       show("Timer");
        timeremain = 60;
        document.getElementById("time").innerHTML = timeremain;
        hide("Game");
        document.getElementById("start_reset").innerHTML = "Reset Game";
        document.getElementById("highscore").innerHTML = hscore
        show("high");
        startcountdown();
        getqa();
    }
}
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick = 
function(){
    if(this.innerHTML == correctans){
        score++;
        document.getElementById("scorevalue").innerHTML = score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct")
        },1000)
        getqa();
    }
    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong")
        },1000)

    }
}
}
function startcountdown(){
    action = setInterval(function(){
        timeremain -= 1;
        document.getElementById("time").innerHTML = timeremain;
        if(timeremain == 0)
        {
            clearInterval(action);
            show("Game");
            document.getElementById("highscore").innerHTML = score
            show("high");
            hscore = score;
            if(hscore <= score)
            {
                show("high")
            }
            else{
                document.getElementById("highscore").innerHTML = score;
                show("high")

            }
            document.getElementById("start_reset").innerHTML = "Start Game";
            document.getElementById("Game").innerHTML = "<p>Game over</p><p>Your Score is "+ score +".</p>";
            hide("Timer");
            hide("correct");
            hide("wrong");
            play = false;
        }
    },1000);
}
function hide(id){
    document.getElementById(id).style.display = "none";
}
function show(id){
    document.getElementById(id).style.display = "block";
}
function getqa()
{
    var x = (1+Math.round(9*Math.random()));
    var y = (1+Math.round(9*Math.random()));
    document.getElementById("ques").innerHTML = x + "x" + y;
    correctans = x*y;
    var correctpos = (1+Math.round(3*Math.random()));
   document.getElementById("box"+correctpos).innerHTML = correctans;
   for(i=1;i<5;i++)
   {
    if(i != correctpos)
    do{
        var wrongans = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))
        document.getElementById("box"+i).innerHTML = wrongans;
    }
    while(wrongans == correctans)
   }


}