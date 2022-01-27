window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    addImgRoad();
  }
};

const obstacles = [];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function addImgRoad () {
  imgRoad = new Image();
  imgRoad.src = "../images/road.png";
  ctx.drawImage(imgRoad, 0, 0, 500, 700)
}

class Car {
  constructor() {
    this.x = 225;
    this.y = 600;

    const imgObj = new Image();
    imgObj.addEventListener('load', () => {
      this.img = imgObj;
      this.draw();
    });
    imgObj.src = "../images/car.png"
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 100)
  }
}

const car = new Car();

document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowLeft") {
    car.moveLeft();
  } else if (e.code === "ArrowRight") {
    car.moveRight();
  }
  updateCanvas();
})

function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  addImgRoad();
  car.draw();
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