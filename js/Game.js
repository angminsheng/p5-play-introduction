class Game {
  constructor() {
    this.player = new Player(WIDTH / 2, HEIGHT / 2);
    this.cars = [];
    this.explosions = [];
  }

  setup() {
    this.player.setup();
  }

  draw() {
    this.player.draw();
    if (frameCount % 300 === 0) {
      carArray.forEach((animation, i) => {
        if (Math.random() < 0.5) {
          let newCar = new Car(i * 100 + 100, -20, animation);
          newCar.setup();
          this.cars.push(newCar);
        }
      });

      // for (let i = 0; i < 10; i++) {
      //   if (Math.random() > 0.5) {
      //     let newCar = new Car(
      //       i * 100 + 100,
      //       -20,
      //       carArray[Math.floor(Math.random() * carArray.length)]
      //     );
      //     newCar.setup();
      //     this.cars.push(newCar);
      //   }
      // }
    }
    this.cars.forEach((car, i) => {
      this.player.sprite.collide(car.sprite, () => {
        car.sprite.remove();
        this.cars.splice(i, 1);
        let explode = new Explosion(
          this.player.sprite.position.x,
          this.player.sprite.position.y
        );

        explode.setup();
      });
    });

    this.explosions.forEach(explosion => explosion.draw());

    this.cars.forEach(car => car.draw());
  }
}
