const dicerollSound = new Audio("diceGameAudio/dice-rolling-sound.mp3");


let player1="player1"
let player2="player2"

// ye name dalne ka function hai

function editName() {

    player1 =prompt("enter playe1 name");
    player2 =prompt("enter playe2 name");

    if (player1.length<1 || player2.length<1){
        alert("Please enter a  valid name")
        return;
    }

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;   
}

// ye diceolling ka function hai

function rollTheDice() {

    var randomPhase = Math.floor(Math.random() * 6) + 1;
    dicerollSound.play()
    var dice1 = "images/" + "dice" + randomPhase + ".png";  // yeha par hum log jo dice me sare images hai usko select kar rahe hai
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", dice1);


    

    var randomPhase = Math.floor(Math.random() * 6) + 1;
    dicerollSound.play()
    var dice2 = "images/" + "dice" + randomPhase + ".png";  // yeha par hum log jo dice me sare images hai usko select kar rahe hai
    var img1 = document.querySelector(".img2");
    img1.setAttribute("src", dice2);


    if(dice1 > dice2){
        document.querySelector("h1.win").innerHTML = `${player1 } win`;  
    }

    else if (dice1 < dice2){
        document.querySelector("h1.win").innerHTML = `${player2} win`;
    }

    else{
        document.querySelector("h1.win").innerHTML = "Draw";
    }
}



