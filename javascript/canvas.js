var canvas = document.querySelector("#screen")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var state = {
  santa: {
    x: canvas.width / 2,
    y: canvas.height *2/3,
  },
  presents: {
    x: 100,
    y: 50,
    speed: 5,
  }
};

function drawBackground (ctx,background) {
  if (!background.complete) {
    setTimeout(function(){
      drawBackground(ctx,background);
    }, 150)
    return
  }
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

var background = new Image();
background.src = '../lazySantaProject/images/elements/background_web.png'

// function clearCanvas(e) {
//     ctx.fillStyle = "MidnightBlue";
//     ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
// }

function drawSanta (ctx,image) {
  if (!image.complete) {
    setTimeout(function(){
      drawSanta(ctx,image);
    }, 150)
    return
  }
  ctx.drawImage(image, state.santa.x, state.santa.y, 150, 150);
}

var image = new Image();
image.src = '../lazySantaProject/images/elements/santa_catching.png'


//Santa moving with arrow keys

function santaMoving(e) {
    if (e.code==="ArrowLeft") {state.santa.x-=5;
    } else if(e.code==="ArrowRight") {state.santa.x+=5;
    }
    drawBackground();
    drawSanta(ctx,image);
  };
body.addEventListener("keydown", santaMoving);

// draw Presents

var presentImage = new Image()
presentImage.src = '../lazySantaProject/images/elements/present_pink.png'


function drawPresent (ctx, presentImage) {
  if (!presentImage.complete) {
    setTimeout(function(){
      drawPresent(ctx,presentImage);
    }, 100)
    return
  }
  ctx.drawImage(presentImage, state.presents.x, state.presents.y, 50, 50);
}
drawPresent(ctx,presentImage);
//Presents falling

function presentFall () {
    state.presents.y+=state.presents.speed
};


function animate() {
    drawBackground(ctx, background);
    drawPresent(ctx, presentImage);
    drawSanta(ctx, image);
    presentFall();
};

setInterval(animate, 50);
