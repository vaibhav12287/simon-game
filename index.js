var colors = ["red","yellow","blue","green"];

var randomColor = [];

var UserColor = [];

var started = false;

var Level = 0;

var w = parseInt(window.innerWidth);

if (w<1000){
    $("#level-heading").text("Press Any where to Start");
    $("body:not(.btn)").click(function() {
        if(!started){
        $("#level-heading").text("Level "+Level);
        nextSequence();
        started = true;}
    });
    function startOver(){
        var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            $("#level-heading").text("Game-over! Touch anywhere to start");
            setTimeout(function() {
                $("body").removeClass("game-over");
            },1000 );
        randomColor = [];
        UserColor = [];
        started = false;
        Level = 0;
    }
    
}

else{
    $(document).keypress(function() {
        if(!started){
        $("#level-heading").text("Level "+Level);
        nextSequence();
        started = true;}
    });
    function startOver(){
        var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            $("#level-heading").text("Game-over! Press any Key to start");
            setTimeout(function() {
                $("body").removeClass("game-over");
            },1000 );
        randomColor = [];
        UserColor = [];
        started = false;
        Level = 0;
    }
    
}




$(".btn").click(function() {
    var colorCilcked = $(this).attr("id");
    UserColor.push(colorCilcked);
    animation(colorCilcked);
    makeSound(colorCilcked);
    checkAnswer(UserColor.length-1);
});

function nextSequence(){
    UserColor = []
    Level++;
    $("#level-heading").text("Level "+Level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = colors[randomNumber];
    randomColor.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

function animation(e){
    $("#"+e).addClass("pressed");
    setTimeout(function(){ 
    $("#"+e).removeClass("pressed"); }, 100);
}

function checkAnswer(q){
    if(randomColor[q] == UserColor[q]){
        console.log("success");
    if(randomColor.length == UserColor.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);}}
    else{
        startOver();
        console.log("wrong Answer");
    }
}

function makeSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

// function startOver(){
//     var audio = new Audio("sounds/wrong.mp3");
//         audio.play();
//         $("body").addClass("game-over");
//         $("#level-heading").text("Game-over! Press any Key to start");
//         setTimeout(function() {
//             $("body").removeClass("game-over");
//         },1000 );
//     randomColor = [];
//     UserColor = [];
//     started = false;
//     Level = 0;
// }
