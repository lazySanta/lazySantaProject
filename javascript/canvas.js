var state = {
  positions: [],
};

var canvas = document.querySelector("#screen")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function clearCanvas(e) {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}


var x=50;
var y=350;

function draw (ctx,image) {
  if (!image.complete) {
    setTimeout(function(){
      draw(ctx,image);
    }, 100)
    return
  }
  ctx.drawImage(image, x, y, 100, 100);
}

var image = new Image();
image.src = '../lazySantaProject/images/temporarySanta.jpg'
draw(ctx,image);

function santaMoving(e) {
    if (e.code==="ArrowLeft") {x-=5;
    } else if(e.code==="ArrowRight") {x+=5;
    }
    clearCanvas();
    draw(ctx,image);
  };
body.addEventListener("keydown", santaMoving);
