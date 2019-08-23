let playerSprite;
let playerAnimation;
let explosionSprite;
let explosionAnimation;
let carAnimation;
let carArray;
let policeSiren;

function preload() {
  // load sprite sheet is used when the sprite image is combined in one image file.
  policeSiren = loadSound("assets/audios/police_siren.mp3");

  carArray = [
    "assets/Topdown_vehicle_sprites_pack/Audi.png",
    "assets/Topdown_vehicle_sprites_pack/Black_viper.png",
    "assets/Topdown_vehicle_sprites_pack/Car.png",
    "assets/Topdown_vehicle_sprites_pack/Mini_truck.png",
    "assets/Topdown_vehicle_sprites_pack/Mini_van.png",
    "assets/Topdown_vehicle_sprites_pack/taxi.png",
    "assets/Topdown_vehicle_sprites_pack/truck.png"
  ].map(imgPath => loadAnimation(imgPath));

  playerAnimation = loadAnimation(
    "assets/Topdown_vehicle_sprites_pack/Police_animation/1.png",
    "assets/Topdown_vehicle_sprites_pack/Police_animation/2.png",
    "assets/Topdown_vehicle_sprites_pack/Police_animation/3.png"
  );

  explosionSprite = loadSpriteSheet("assets/explosion.png", 16, 16, 5);

  explosionAnimation = loadAnimation(explosionSprite);
}
