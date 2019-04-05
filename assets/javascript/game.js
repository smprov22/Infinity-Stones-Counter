//Things to track (variables)
//value of random number
var randomNum;
//wins
var wins = 0;
//losses
var losses = 0;
//stores previous number
var count = 0;

//value of random number
randomNum = 19 + Math.floor(Math.random() * 102)

//stone counter set to 0
$("#stoneTotal").text();
//random number shows up in appropriate box
$("#randomNum").text(randomNum);
//display wins and losses to start
$("#wins").text(0);
$("#losses").text(0);

//value of each stone
for(var i = 0; i < 4; i++) {

    var stoneVal = 1 + Math.floor(Math.random() * 12);
    //appends random number to each stone
    $(`#stone${i}`).attr({"data-random": stoneVal });
    console.log(stoneVal);
}
    // Make each stone clickable and add their content to "Stone Counter"
    $(".stone").on("click", function() {
        //makes sure the randomly generated number is read as a number
        var number = parseInt($(this).attr("data-random"));
        //adds the number clicked to the stone counter
        count += number;
        console.log(count)
        //adds the count text to the html
        $("#stoneTotal").text(count);
        
        // Determing winner or loser using if/else statement
        //If player goes over the count
        if (count > randomNum) {
            //Display game over text
            $("#gameOverText").text("You lost!!");
            //add to the losses counter
            losses ++
            //Add # of losses to the html  
            $("#losses").text(losses);
            //reset the game
            reset();
        }
        
        //If player equals the count
        else if (count === randomNum) {
            //Display you win text
            $("#gameOverText").text("You win!!");
            //add to the wins counter
            wins ++
            //Add # of wins to the html
            $("#wins").text(wins);
            //reset
            reset();
        }
    })

    
    function reset() {
        //value of each stone
        for(var i = 0; i < 4; i++) {
    
            var stoneVal = 1 + Math.floor(Math.random() * 12);
            $(`#stone${i}`).attr({"data-random": stoneVal });
        }

        //value of random number
        randomNum = 19 + Math.floor(Math.random() * 102)

        //reset stone counter to 0
        count = 0;

        //stone counter text set to 0
        $("#stoneTotal").text(0);
        //random number shows up in appropriate box
        $("#randomNum").text(randomNum);
    }