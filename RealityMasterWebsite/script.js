
function startGame() {

    var game = document.getElementById("game-frame");
    var message = document.getElementById("game-message");

    message.innerHTML = "LOADING REALITYMASTER...";

    game.style.display = "block";

    game.src = "game/index.html";

    game.onload = function() {
        message.innerHTML = "REALITYMASTER IS READY!";
    };

    document.getElementById("game-area").scrollIntoView();
}
