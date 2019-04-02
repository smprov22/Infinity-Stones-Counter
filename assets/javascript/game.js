$(document).ready(function() {

    //Things to track (variables)
        //value of random number
    var randomNum;
        //value of stones added together
    var stoneCounter = 0;
        //wins
    var wins;
        //losses
    var losses;

    //value of each stone
    var blueStone = 1 + Math.floor(Math.random() * 12);
    $("#blueStone").attr({"data-random": blueStone});
    var greenStone = 1 + Math.floor(Math.random() * 12);
    $("#greenStone").attr({"data-random": greenStone});
    var redStone = 1 + Math.floor(Math.random() * 12);
    $("#redStone").attr({"data-random": redStone});
    var yellowStone = 1 + Math.floor(Math.random() * 12);
    $("#yellowStone").attr({"data-random": yellowStone});

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
    //display wins and losses to start
    $("#wins").text(0);
    $("#losses").text(0);
    
    
    function reset() {
        //value of each stone
        var blueStone = 1 + Math.floor(Math.random() * 12);
        $("#blueStone").attr({"data-random": blueStone});
        var greenStone = 1 + Math.floor(Math.random() * 12);
        $("#greenStone").attr({"data-random": greenStone});
        var redStone = 1 + Math.floor(Math.random() * 12);
        $("#redStone").attr({"data-random": redStone});
        var yellowStone = 1 + Math.floor(Math.random() * 12);
        $("#yellowStone").attr({"data-random": yellowStone});

        //value of random number
        randomNum = 19 + Math.floor(Math.random() * 102)

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
    $("#blueStone").on("click", function() {
        // console.log($(this).attr("data-random"));
            var newTotal = (blueStone + stoneCounter);
                $("#stoneTotal").text(newTotal);
    })

    $("#greenStone").on("click", function() {
        // console.log($(this).attr("data-random"));
            var newTotal = (greenStone + stoneCounter);
                $("#stoneTotal").text(newTotal);
    })

    $("#redStone").on("click", function() {
        // console.log($(this).attr("data-random"));
            var newTotal = (redStone + stoneCounter);
                $("#stoneTotal").text(newTotal);
    })

    $("#yellowStone").on("click", function() {
        // console.log($(this).attr("data-random"));
            var newTotal = (yellowStone + stoneCounter);
                $("#stoneTotal").text(newTotal);
    })



    //Add value of stone to "Stone Counter" total when clicked


    //Compare value of "Random Number" to "Stone Counter" to see if they match

    //If they match, user wins, if the value of stone counter is greater than the value of the random number, they lose.

    //MAIN PROCCESS
    //-------------------------------------------	
    //Initiates the Code
})       