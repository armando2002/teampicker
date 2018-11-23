/* Function to pick team based on random # generator */
/* Set key value pair for each team in the array set to requested # of people in team, once array reaches 0, remove the team from the available selection */


var teams = ['Ms-Pac Man: Team Blinky', 'Ms-Pac Man: Team Clyde', 'Donkey Kong: Team Barrel', 'Donkey Kong: Team Hammer', 'Space Invaders', 'Dig Dug'];
var list = {};

// counts # of players by # of times pick team clicked
var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    };


// add functionality to choose random team based on remaining spots in team

// if length of team is <1, remove the team from the array

// event listner for button click to Pick Team
 document.getElementById("pickbtn").addEventListener("click", function(event) {
    event.preventDefault();
    // choose team
    var randomTeam = teams[Math.floor(Math.random()*teams.length)];
    $('#team').html("Your team is "+randomTeam);
    // unhide player
    var x = document.getElementById("player");
    x.style.display = "block";
    // unhide show current list
    var y = document.getElementById("showlist");
    y.style.display = "block";
    // add player # and randomTeam to object, currently the clicks variable is showing as a string
    Object.assign(list, {[clicks]: randomTeam});
    // update list in html
    $('#list').html(list);
 });

// event listener for Show Current List button click
 document.getElementById("showlist").addEventListener("click", function(event) {
    event.preventDefault();
    // hide team
    var x = document.getElementById("team");
    x.style.display = "none";
    // hide player
    var x = document.getElementById("player");
    x.style.display = "none";
    // hide show list
    var y = document.getElementById("showlist");
    y.style.display = "none";
    // hide pick team button
    var x = document.getElementById("pickbtn");
    x.style.display = "none";
    // unhide close list button
    var y = document.getElementById("closelist");
    y.style.display = "block";
    // show list
    var y = document.getElementById("list");
    y.style.display = "block";
 });

// event listener for hide Close Current List
document.getElementById("closelist").addEventListener("click", function(event) {
    event.preventDefault();
    // show team
    var x = document.getElementById("team");
    x.style.display = "block";
    // show player
    var x = document.getElementById("player");
    x.style.display = "block";
    // show show list button
    var y = document.getElementById("showlist");
    y.style.display = "block";
    // show pick team button
    var y = document.getElementById("pickbtn");
    y.style.display = "inline-block";
    // hide close list button
    var y = document.getElementById("closelist");
    y.style.display = "none";
    // hide list
    var y = document.getElementById("list");
    y.style.display = "none";
});
