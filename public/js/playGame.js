// $(document).ready(function() {
//   console.log("ready from playGame.js");
  


// var canvas;
// var ctx;

// //define locations for apples
// var x1 = 49;
// var y1 = 271;

// var x2 = 87;
// var y2 = 277;

// var x3 = 251;
// var y3 = 322;

// var x4 = 308;
// var y4 = 300;

// var x5 = 409;
// var y5 = 305;

// var x6 = 458;
// var y6 = 300;

// var x7 = 509;
// var y7 = 258;

// var x8 = 680;
// var y8 = 317;

// var x9 = 735;
// var y9 = 337;


// // Create the canvas and set the canvas size
// // var canvas;
// var WIDTH = 650;
// var HEIGHT = 455;
// var img = new Image();   // Create new img element
// img.src = '../images/backImage.jpg'; // Set source path

// var dragok = false;
// img.style.width = WIDTH;
// img.style.height = HEIGHT;
// var gameCanvas = document.getElementById("gameCanvas");


// // Make the apple images
// var appleImg = new Image();
// var appleImg2 = new Image();
// var appleImg3 = new Image();
// var appleImg4 = new Image();
// appleImg.src = "../images/Apple_Pin.PNG";
// appleImg2.src = "../images/Apple_Pin.PNG";
// appleImg3.src = "../images/Apple_Pin.PNG";
// appleImg4.src = "../images/Apple_Pin.PNG";

// var appleX = 0;
// var appleY = 0;
// var appleCount = 0;

// // Make the basket
// var basketImg = new Image();
// var basketBottomImg = new Image();

// // Basket location
// var basketY = 400;
// var basketX = 250

// function init() {
//  canvas = document.getElementById("gameCanvas");
//  console.log(canvas)
//  ctx = canvas.getContext("2d");
//  return setInterval(draw, 15);
// }

// function rect(x,y,w,h) {

//  ctx.beginPath();
//  ctx.rect(x,y,w,h);
//  ctx.closePath();
//  ctx.fill();
// }


// function clear() {
//  ctx.clearRect(0, 0, WIDTH, HEIGHT);

// }


// function draw() {
//  clear();
//  basketImg.src = "../images/basket.png";
//  basketBottomImg.src = "../images/basket_bottom.png";
//  ctx.fillStyle = "#444444";
//  ctx.drawImage(gameCanvas, 0, 0);

//  ctx.drawImage(basketImg, basketX, basketY);

//  // Draw the apples on the trees
//  ctx.drawImage(appleImg, x1 - 18, y1 - 10);
//  ctx.drawImage(appleImg, x2 - 18, y2 - 10);
//  ctx.drawImage(appleImg, x3 - 18, y3 - 10);
//  ctx.drawImage(appleImg, x4 - 18, y4 - 10);
//  ctx.drawImage(appleImg, x5 - 18, y5 - 10);
//  ctx.drawImage(appleImg, x6 - 18, y6 - 10);
//  ctx.drawImage(appleImg, x7 - 18, y7 - 10);
//  ctx.drawImage(appleImg, x8 - 18, y8 - 10);
//  ctx.drawImage(appleImg, x9 - 18, y9 - 10);

//  // Draw the apples in the basket
//  ctx.drawImage(appleImg, 322, 445 - 10);
//  ctx.drawImage(appleImg, 280, 444 - 10);
//  ctx.drawImage(appleImg, 287, 444 - 10);
//  ctx.drawImage(appleImg, 369, 446 - 10);
 
//  ctx.drawImage(basketBottomImg, basketX, basketY);
// }

// function myMove(e){
	
// 	if (dragok){
// 		x1 = e.pageX - canvas.offsetLeft;
// 		y1 = e.pageY - canvas.offsetTop;
// 	}

// 	// if (x1 > 260 && x1 < 445 &&  y1 > 448){
// 	// // fund_card();
//  // 	// alert("You win!")
//  // 	// <input type="button" 
// 	//  //   value="Simulate Game Won - Fund Card Now!" 
// 	//  //   onclick="fund_card();"/>
 	
//  // }
// }

// function mouseDown(e){
// 	if (e.pageX < x1 + 15 + canvas.offsetLeft && e.pageX > x1 - 15 +
// 		canvas.offsetLeft && e.pageY < y1 + 15 + canvas.offsetTop &&
// 		e.pageY > y1 -15 + canvas.offsetTop){
// 		x1 = e.pageX - canvas.offsetLeft;
// 		y1 = e.pageY - canvas.offsetTop;
// 		dragok = true;
// 		canvas.onmousemove = myMove;
// 	}
// }

// function myUp(){
//  dragok = false;
//  canvas.onmousemove = null;
//  	$("#score").html("Score: <strong>5</strong>")
//  	$("#win_msg").html("<strong>You Win!</strong> Click to redeem your Gyft!")
//  	$("#win_msg").on("click", function() {
//  		fund_card()
//  	})
// }

// function crashWith(otherobj) {
// 			var myleft = this.x;
// 			var myright = this.x + (this.width);
// 			var mytop = this.y;
// 			var appleBottom = this.y + (this.height);
// 			var otherleft = otherobj.x;
// 			var otherright = otherobj.x + (otherobj.width);
// 			var othertop = otherobj.y;
// 			var otherbottom = otherobj.y + (otherobj.height);
// 			var crash = true;
// 			if ((mybottom < othertop) ||
// 					(mytop > otherbottom) ||
// 					(myright < otherleft) ||
// 					(myleft > otherright)) {
// 				crash = false;
// 			}
// 			return crash;
// 		}

// init();
// canvas.onmousedown = mouseDown;
// canvas.onmouseup = myUp;

// });
