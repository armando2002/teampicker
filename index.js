/* Function to pick team based on random # generator */
/* Set key value pair for each team in the array set to requested # of people in team, once array reaches 0, remove the team from the available selection */


var teams = ['Ms-Pac Man: Team Blinky', 'Ms-Pac Man: Team Clyde', 'Donkey Kong: Team Barrel', 'Donkey Kong: Team Hammer', 'Space Invaders', 'Dig Dug'];


function pickTeam() {
    /* Event listener for button click */
    $('#pickform').on('submit', function(event){
        event.preventDefault();
        /* unhide player */
        var x = document.getElementById("player");
        x.style.display = "block";
        var randomTeam = teams[Math.floor(Math.random()*teams.length)];
        $('#team').html("Your team is "+randomTeam);
    });
};

var clicks = 0;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    };

$(pickTeam);