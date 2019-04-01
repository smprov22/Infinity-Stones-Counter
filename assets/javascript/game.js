//Things to track (variables)
    //value of each stone
var blueStone = "";
var greenStone = "";
var redStone = "";
var yellowStone = "";
    //value of random number
var randomNum = 0;
    //value of stones added together
var stoneCounter = 0;
    //wins
var wins = 0;
    //losses
var losses = 0;



//Start game and Reset, things to be changed each time the game is restarted
function reset() {
    //value of each stone
    blueStone = 1 + Math.floor(Math.random() * 12);
    greenStone = 1 + Math.floor(Math.random() * 12);
    redStone = 1 + Math.floor(Math.random() * 12);
    yellowStone = 1 + Math.floor(Math.random() * 12);
    //value of random number
    randomNum = 19 + Math.floor(Math.random() * 102)

    //stone counter set to 0
    $("#stoneTotal").html(0);
    //random number shows up in appropriate box
    $("#randomNum").text(randomNum);
}

function startGame() {
    //value of each stone
    blueStone = 1 + Math.floor(Math.random() * 12);
    greenStone = 1 + Math.floor(Math.random() * 12);
    redStone = 1 + Math.floor(Math.random() * 12);
    yellowStone = 1 + Math.floor(Math.random() * 12);
    //value of random number
    randomNum = 19 + Math.floor(Math.random() * 102)
    
    //check values of each generated number
    console.log(blueStone);
    console.log(greenStone);
    console.log(redStone);
    console.log(yellowStone);
    console.log(randomNum);
    
    //stone counter set to 0
    $("#stoneTotal").text(0);
    //random number shows up in appropriate box
    $("#randomNum").text(randomNum);
}



//HTML Changes each round
    //Change the value of random number each round
    //Change value of Stone Counter as each stone is clicked
    //Change value of wins and losses after each round
    //Have "You Win" or "You lose" text come up upon completion of each round

//Make each stone clickable and add their content to "Stone Counter"
    
function addStones(userClick) {
    $("infStone").on("click", function() {


    })
}



//Add value of stone to "Stone Counter" total when clicked


//Compare value of "Random Number" to "Stone Counter" to see if they match

//If they match, user wins, if the value of stone counter is greater than the value of the random number, they lose.

//MAIN PROCCESS
//-------------------------------------------	
//Initiates the Code
startGame ()