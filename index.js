//for img1
var n=Math.floor(Math.random()*6)+1;

var randimg="dice"+n+".png";

var randsrc="d/images/"+randimg;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randsrc);


//for 2 img
var n1=Math.floor(Math.random()*6)+1;

var randimg1="dice"+n1+".png";

var randsrc1="d/images/"+randimg1;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randsrc1);

//for showing the result
if(n>n1)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(n1>n)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";

}
else
{
    document.querySelector("h1").innerHTML="Tie";

}


