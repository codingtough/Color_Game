// Déclaration des variables utiles pour l'application
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


// Lorsque le document HTML a été complètement chargé
document.addEventListener("DOMContentLoaded", function() {
	// Lancement de l'applcation
	init();

	// Evenement au click sur le bouton Reset ou Play
	resetButton.addEventListener("click", function() {
		// Déclenchement de l'initialisation du jeu au click
		reset();
	});

});