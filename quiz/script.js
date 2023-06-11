var btn=document.getElementById('btn');
var score=document.getElementById('score');
var totalscore=document.getElementById('totalscore');
var countdown=document.getElementById('countdown');
var count=0;
var scoreCount=0;
var duration=0;
var set=document.querySelectorAll('.set');
var answer=document.querySelectorAll('.set .answer input');

btn.addEventListener('click',function(){
    step();
    duration=10;
})

answer.forEach( function(answerSingle){
    answerSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
            duration=10;
        },500)

        var valid = this.getAttribute("valid");
        if(valid=="valid"){
            scoreCount+=15;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }else{
            scoreCount-=15;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }
    })
})
function step(){
    count+=1;
    for(var i = 0; i < set.length; i++){
        set[i].className='set';
    }
    set[count].className='set active';
    if(count==10){
        btn.style.display='none';
        clearInterval(durationTime);
        countdown.innerHTML=0;
    }
}
var durationTime = setInterval(function(){
    if(duration==10){
        duration=0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML=="10")
    {
        step();
    }
},1000);
