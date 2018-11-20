/* Function to pick team based on random # generator */
var teams = ['Ms-Pac Man: Team Blinky', 'Ms-Pac Man: Team Clyde', 'Donkey Kong: Team Barrel', 'Donkey Kong: Team Hammer', 'Space Invaders', 'Dig Dug'];


function pickTeam() {
    /* Event listener for button click */
    $('#pickform').on('submit', function(event){
        event.preventDefault();
        var randomTeam = teams[Math.floor(Math.random()*teams.length)];
        console.log('Your team is '+randomTeam);
    });
};

$(pickTeam);