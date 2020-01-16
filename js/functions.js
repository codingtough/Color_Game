
// Fonction qui déclenche toutes les actions du jeu
function init() {
	// Choix du mode de jeu
	setupModeButtons();
	// Réglages principaux pour le bon fonctionnement du jeu
	setupSquares();
	// Reset - Initialisation du jeu
	reset();

}

// Mode de jeu
function setupModeButtons() {
	// Pour chacun des boutons "Mode"
	for(var i = 0; i < modeButtons.length; i++) {
		// Ajouter un évenement au click sur chacun des boutons a chaque tour de boucle
		modeButtons[i].addEventListener("click", function(){
			// Supprimer la classe 'selected' sur le premier bouton
			modeButtons[0].classList.remove("selected");
			// Supprimer la classe 'selected' sur le deuxième bouton
			modeButtons[1].classList.remove("selected");
			// Ajouter la classe 'selected sur le bouton sélectionné
			this.classList.add("selected");
			// Initialisation du nombres de carrés selon le mode choisi
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			// Initialisation du jeu lors de la sélection du mode de jeu
			reset();

		});
	}
}

// Fonctionnement du jeu
function setupSquares() {
	//Pour chaque carré
	for(var i = 0; i < squares.length; i++) {
		// Ajouter un évenement au click sur chacun des carrés à chaque tour de boucle
		squares[i].addEventListener("click", function(){
			// Stocker la couleur sur le carré cliqué
			var clickedColor = this.style.background;
			// Comparer la couleur cliqué à la couleur sélectionné au hasard par le jeu
			// Si la couleur clické correspond à la couleur choisi par l'ordi alors
			if(clickedColor === pickedColor) {
				// Affichage du message "Correct!" dans la zone d'affichage
				messageDisplay.textContent = "Correct!";
				// Modification du texte du bouton
				resetButton.textContent = "Play Again?";
				// Changement de la couleur de tous les carrés par la couleur cliqué (la bonne couleur)
				changeColors(clickedColor);
				// Changement de la couleur du titre par la couleur cliqué
				h1.style.background = clickedColor;
			//SINON	
			} else {
				// Disparition du carré en choisissant la couleur de l'arrière plan des carrés
				// Ainsi donner l'illusion que le carré a disparu
				this.style.background = "#232323";
				// Affichage du message "Try Again!" dans la zone d'affichage
				messageDisplay.textContent = "Try Again!";

			}
		});
	}
}


// Mise à jour du jeu
function reset(){
	// Générer des couleurs au hasard en fonction du mode jeu (3 ou 6) et les stocker dans un tableau
	colors = generateRandomColors(numSquares);
	// Choisir une couleur au hasard parmi les couleurs générés précédement et la stocker dans une variable
	pickedColor = pickColor();
	// Afficher le texte de la couleur à trouver (en rgb())
	colorDisplay.textContent = pickedColor;
	// Modification du texte du bouton
	resetButton.textContent = "New Colors";
	// Vider la zone d'affichage des messages
	messageDisplay.textContent = "";
	// Changer la couleur des carrés par les valeurs généré et stocker dans le tableau "colors"
	//Pour chaque carrés
	for(var i = 0; i < squares.length; i++){
		// Si une couleur existe (=== true) dans mon tour de boucle
		if(colors[i]){
			// Le carré passe en display 'block' donc apparait
			squares[i].style.display = "block";
			// Le carré prend la couleur correspondant à l'index du tour de boucle et en même temps à l'index du tableau "colors"
			squares[i].style.background = colors[i];
		//SINON
		} else {
			// le carré n'apparait pas
			squares[i].style.display = "none";

		}
	}
	// Mise à jour du background par défaut du Titre
	h1.style.background = "steelblue";
}

// Changement des couleurs des carrés
function changeColors(color) {
	// Boucle à travers tous les carrés
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		// Changer la couleur de chaque carré par la couleur donnée en paramètre
		squares[i].style.background = color;

	}
}

// Sélection d'une couleur
function pickColor() {
	// Stocker un chiffre au hasard ne dépassant pas la longueur du tableau colors (3 ou 6)
	var random = Math.floor(Math.random() * colors.length);
	// Retourner une couleur au hasard dans le tableau "colors" grace à l'index stocker dans la variable "random"
	return colors[random];
}

// Générer une couleur au hasard
function generateRandomColors(num) {
	// Déclaration d'un tableau
	var arr = [];
	// Répéter l'action un nombre de fois passé en paramètres
	for(var i = 0; i < num; i++){
		// Prendre une couleur au hasard et la stocker dans le tableau "arr"
		arr.push(randomColor());
	}
	// Retourner le tableau "arr"
	return arr;
}

// Processus de création d'une couleur
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	// Retourner la couleur en assemblant les 3 variables
	return "rgb(" + r + ", " + g + ", " + b + ")";
}