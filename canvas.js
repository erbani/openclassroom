window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
    //C'est ici que l'on placera tout le code servant à nos dessins.
    //On n'oublie pas de récupérer le canvas et son context.


context.beginPath();//On démarre un nouveau tracé

context.moveTo(0, 300);//On se déplace au coin inférieur gauche

context.lineTo(150, 0);

context.lineTo(300, 300);

context.lineTo(0, 300);

context.stroke();//On trace seulement les lignes.

context.closePath();
context.fillStyle = "orange"; // Définition de la couleur de remplissage
context.fill();
//corps de maison
context.beginPath();//On démarre un nouveau tracé

context.moveTo(0, 300);//On se déplace au coin inférieur gauche

context.lineTo(0, 500);

context.lineTo(300, 500);

context.lineTo(300, 300);

context.lineTo(0, 300);

context.fill();//On trace seulement les lignes.

context.closePath();

context.fillStyle = "lightblue"; // Définition de la couleur de remplissage
context.fill();

//On n'oublie pas de récupérer l'objet canvas et son context.

context.beginPath(); //On démarre un nouveau tracé.
context.arc(100, 100, 50, 0, Math.PI*2); //On trace la courbe délimitant notre forme
context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
context.closePath();
context.fillStyle = "blue"; // Définition de la couleur de remplissage
context.strokeStyle = "black"; // Définition de la couleur de contour
context.lineWidth = 2;
context.fill();
context.stroke();          // Application du contour

context.beginPath();      // Début d'un autre chemin
context.moveTo(50,250);
context.lineTo(100,300);
context.lineTo(250,300);
context.lineTo(300,250);
context.lineTo(50,250);
context.fillStyle = "peru";
context.strokeStyle = "black"; // Définition de la couleur de contour
context.lineWidth = 2;         // Définition de la largeur de ligne
context.fill();            // Application du remplissage
context.stroke();          // Application du contour

//mat
context.beginPath();
context.moveTo(450,500);
context.lineTo(450,150);
context.strokeStyle = "peru";
context.lineWidth = 10;
context.fill();
context.stroke();

//ligne
context.beginPath();
context.moveTo(500,550);
context.lineTo(500,200);
context.lineTo(650,200);
context.lineWidth = 10;
context.lineJoin = "mitter";
context.lineCap = "round";
context.stroke();

}
