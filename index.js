var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSoursce = "images/dice"+randomNumber1+".png";
// console.log(randomImageSoursce);
var image1 = document.querySelector(".img1");
image1.setAttribute("src",randomImageSoursce);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSoursce2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src",randomImageSoursce2);

function winner(){
if(randomNumber1>randomNumber2){
    return "Player 1 won"
}else if(randomNumber1==randomNumber2){
    return "Oops! Play Again";
}else{
    return "Player 2 won"
}
}
var heading =document.querySelector("h1");
heading.innerHTML=(winner());