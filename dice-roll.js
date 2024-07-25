const dicerollSound = new Audio("diceGameAudio/dice-rolling-sound.mp3");


let player1="player1"
let player2="player2"


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

function rollTheDice() {

    var randomPhase = Math.floor(Math.random() * 6) + 1;
    dicerollSound.play()
    var diceLocation1 = "images/" + "dice" + randomPhase + ".png";
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", diceLocation1);


    var randomPhase = Math.floor(Math.random() * 6) + 1;
    dicerollSound.play()
    var diceLocation2 = "images/" + "dice" + randomPhase + ".png";
    var img1 = document.querySelector(".img2");
    img1.setAttribute("src", diceLocation2);


    if(diceLocation1 > diceLocation2){
        document.querySelector("h1.win").innerHTML = `${player1} Win`;  
    }

    else if (diceLocation1 < diceLocation2){
        document.querySelector("h1.win").innerHTML = `${player2} Win`;
    }

    else{
        document.querySelector("h1.win").innerHTML = "Draw";
    }
}



