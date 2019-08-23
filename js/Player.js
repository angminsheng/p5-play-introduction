class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 4;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y, 30, 30);
    this.sprite.addAnimation("drive", playerAnimation);
    this.sprite.scale = 0.5;
    this.sprite.setCollider(
      "rectangle",
      0,
      0,
      this.sprite.width / 2,
      this.sprite.height / 2
    );
    // this.sprite.debug = true;
  }

  draw() {
    this.keyIsDown();
  }

  keyIsDown() {
    if (keyIsDown(37)) {
      this.sprite.rotation -= 3;
    }
    if (keyIsDown(39)) {
      this.sprite.rotation += 3;
    }
    if (keyIsDown(38)) {
      this.sprite.position.x += sin(this.sprite.rotation) * this.velocity;
      this.sprite.position.y -= cos(this.sprite.rotation) * this.velocity;
    }

    if (keyIsDown(37) || keyIsDown(38) || keyIsDown(39)) {
      if (!policeSiren.isPlaying()) {
        policeSiren.play();
      }
    }

    if (!keyIsDown(37) && !keyIsDown(38) && !keyIsDown(39)) {
      policeSiren.pause();
    }
  }
}
