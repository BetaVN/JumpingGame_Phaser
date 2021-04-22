import { ObstacleConstructor } from "../Interfaces/ObstacleConstructor";

export class Obstacle{
    private isFlying: boolean
    private currentScene: Phaser.Scene
    private sprite: Phaser.GameObjects.Sprite

    constructor(param: ObstacleConstructor) {
        this.currentScene = param.scene
        this.sprite = param.sprite
        this.isFlying = param.isFlying
    }

}