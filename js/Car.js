class Car {
  constructor(x, y, animation) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.velocity = 2;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y, 30, 30);
    this.sprite.addAnimation("drive", this.animation);
    this.sprite.scale = 0.5;
    this.sprite.mirrorY(-1);
    this.sprite.setCollider(
      "rectangle",
      0,
      0,
      this.sprite.width / 2,
      this.sprite.height / 1.5
    );
    // this.sprite.debug = true;
  }

  draw() {
    this.sprite.position.y += this.velocity;
  }
}
