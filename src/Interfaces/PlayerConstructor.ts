import { GameplayScene } from "../Scene/GameplayScene";

export interface PlayerConstructor {
    sprite: Phaser.Physics.Arcade.Sprite,
    scene: GameplayScene
  }