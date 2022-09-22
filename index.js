window.onload = choosePic;

var myPix = new Array("images/dice1.png","images/dice2.png","images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");

function choosePic() {
    var randomNumber1 = Math.floor(Math.random() * myPix.length);
    var randomNumber2 = Math.floor(Math.random() * myPix.length);
    document.getElementById("picture1").src = myPix[randomNumber1];
    document.getElementById("picture2").src = myPix[randomNumber2];

    if (myPix[randomNumber2] > myPix[randomNumber1]) {
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    }

    else if (myPix[randomNumber1] > myPix[randomNumber2]) {
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    }

    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }

}


console.log(randomNumber1)

