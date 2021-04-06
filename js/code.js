var player_name = prompt("What is your name ?");
while (player_name === "") {
    player_name = prompt("You can't play without name, please type your name");
}

var your_score = 0;
var comp_score = 0;

document.getElementById("score-div").innerHTML = player_name + " "+your_score+" : "+comp_score+" Computer";
document.getElementById("personal-label").innerHTML = player_name +"'s choice";

function win() {
    document.getElementById("you-div").style.backgroundColor = "#83ff98";
    document.getElementById("comp-div").style.backgroundColor = "#ff9090";
    your_score++;
}

function lose() {
    document.getElementById("comp-div").style.backgroundColor = "#83ff98";
    document.getElementById("you-div").style.backgroundColor = "#ff9090";
    comp_score++;
}

function draw() {
    document.getElementById("comp-div").style.backgroundColor = "#fff";
    document.getElementById("you-div").style.backgroundColor = "#fff";
}

function compare() {
    
    var choices_array = ["Rock","Scissor","Paper"];
    var computer_choice = choices_array[Math.floor(Math.random() * 3)]+"";
    var your_choice = document.getElementById("choice-input").value+"";
    your_choice = your_choice.toUpperCase();
    
    if(your_choice === ""){
        confirm("You didn't choose anything");
    }else{

    if((your_choice == "R" && computer_choice == "Rock") || (your_choice == "S" && computer_choice == "Scissor") || ( your_choice == "P" && computer_choice == "Paper")){
        draw();
    }else if((your_choice == "R" && computer_choice == "Scissor") || (your_choice == "S" && computer_choice == "Paper") || ( your_choice == "P" && computer_choice == "Rock")){
        win();
    }else{
        lose();
    }
    document.getElementById("computers-choice-display").innerHTML = computer_choice;
    document.getElementById("score-div").innerHTML = player_name + " "+your_score+" : "+comp_score+" Computer";
}
    
}


