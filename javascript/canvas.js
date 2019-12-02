var canvas = document.querySelector("#screen")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var state = {
  santa: {
    x: canvas.width / 2,
    y: canvas.height *2/3,
  },
  presents: {
    x: randomPosition(1, canvas.width),
    y: 50,
    speed: 3,
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
    checkCollisions();
};

setInterval(animate, 40);


function checkCollisions(){
    if (
      state.presents.y >= state.santa.y &&
      state.presents.y < canvas.height &&
      state.presents.x < state.santa.x+190 &&
      state.presents.x > state.santa.x-190)
      {console.log("present caught")
      // death()
  } };
