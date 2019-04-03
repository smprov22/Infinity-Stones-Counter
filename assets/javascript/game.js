$(document).ready(function() {

    //Things to track (variables)
        //value of random number
    var randomNum;
        //wins
    var wins = 0;
        //losses
    var losses = 0;
        //stores previous number
    var previousNum = 0;

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
    $("#stoneTotal").text();
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

        //reset stone counter to 0
        previousNum = 0;

        //stone counter text set to 0
        $("#stoneTotal").text(0);
        //random number shows up in appropriate box
        $("#randomNum").text(randomNum);
    }

    //Make each stone clickable and add their content to "Stone Counter"
    $("#blueStone").on("click", function() {
        var number = parseInt($(this).attr("data-random"));
        previousNum += number;
        console.log(previousNum)
        $("#stoneTotal").text(previousNum);

        if (previousNum > randomNum) {
            $("#gameOverText").text("You lost!!");
            losses ++
            $("#losses").text(losses);
            reset();
        }
        
        else if (previousNum === randomNum) {
            $("#gameOverText").text("You win!!");
            wins ++
            $("#wins").text(wins);
            reset();
        }

    })

    $("#greenStone").on("click", function() {
        var number = parseInt($(this).attr("data-random"));
        previousNum += number;
        console.log(previousNum)
        $("#stoneTotal").text(previousNum);

        if (previousNum > randomNum) {
            $("#gameOverText").text("You lost!!");
            losses ++
            $("#losses").text(losses);
            reset();
        }
        
        else if (previousNum === randomNum) {
            $("#gameOverText").text("You win!!");
            wins ++
            $("#wins").text(wins);
            reset();
        }
    })

    $("#redStone").on("click", function() {
        var number = parseInt($(this).attr("data-random"));
        previousNum += number;
        console.log(previousNum)
        $("#stoneTotal").text(previousNum);
       
        if (previousNum > randomNum) {
            $("#gameOverText").text("You lost!!");
            losses ++
            $("#losses").text(losses);
            reset();    
        }
        
        else if (previousNum === randomNum) {
            $("#gameOverText").text("You win!!");
            wins ++
            $("#wins").text(wins);
            reset();
        }
    })

    $("#yellowStone").on("click", function() {
        var number = parseInt($(this).attr("data-random"));
        previousNum += number;
        console.log(previousNum)
        $("#stoneTotal").text(previousNum);

        if (previousNum > randomNum) {
            $("#gameOverText").text("You lost!!");
            losses ++
            $("#losses").text(losses);
            reset();
        }
        
        else if (previousNum === randomNum) {
            $("#gameOverText").text("You win!!");
            wins ++
            $("#wins").text(wins);
            reset ();
        }
    })

})       