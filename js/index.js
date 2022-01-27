window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    addImgRoad();
    addCar();
  }
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function addImgRoad () {
  imgRoad = new Image();
  imgRoad.src = "../images/road.png";
  ctx.drawImage(imgRoad, 0, 0, 500, 700)
}

function addCar () {
  imgCar = new Image();
  imgCar.src = "../images/car.png";
  ctx.drawImage(imgCar, 225, 600, 50, 100)
}
/* 
document.addEventListener('keydown', (e) => {
  if (e.code = "ArrowLeft") {
    Movement.speedLeft += 1;
  } else if (e.code = "ArrowRight") {
    Movement.speedRight += 1;
  }
})

document.addEventListener('keyup', () => {
  Movement.speedLeft = 0;
  Movement.speedRight = 0;
})

class Movement {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    this.speedLeft = speedLeft;
    this.speedRight = speedRight;
  }
  moveLeft() {
    return this.left;
  }

  moveRight() {
    return this.right;
  }

  newPos() {
    this.left += this.speedLeft;
    this.right += this.speedRight;
}

update() {
    const ctx = myGameArea.ctx;
    ctx.fillRect(this.left, this.right)
}
}
 */