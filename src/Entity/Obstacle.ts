import { Constants } from "../Constants/Constants";
import { ObstacleConstructor } from "../Interfaces/ObstacleConstructor";
import { GameplayScene } from "../Scene/GameplayScene";

export class Obstacle extends Phaser.Physics.Arcade.Sprite{
    private isFlying: boolean
    private size: number

    constructor(param: ObstacleConstructor) {
        super(param.scene, param.x, param.y, param.texture, param.frame)
        this.isFlying = param.isFlying
        this.size = param.size
        this.scaleX = param.size / this.width
        this.scaleY = param.size / this.height

        // if (!this.isFlying) {
        //     this.sprite = this.currentScene.physics.add.sprite(Constants.ObstacleConstants.BasePosX + param.size, Constants.ObstacleConstants.BasePosY - param.size/2 - 1, "rockSprite")
        //     this.sprite.scaleX = param.size / this.sprite.width
        //     this.sprite.scaleY = param.size / this.sprite.height
        //     this.currentScene.physics.add.collider(this.sprite, this.currentScene.getPlatform())
        //     this.sprite.setVelocityX(-180)
        // }
        // else {
        //     this.sprite = this.currentScene.physics.add.sprite(Constants.ObstacleConstants.BasePosX + param.size, Constants.ObstacleConstants.BasePosY - param.size/2 - 200, "flameSprite")
        //     this.sprite.scaleX = param.size / this.sprite.width
        //     this.sprite.scaleY = param.size / this.sprite.height
        //     this.sprite.play("flyingObstacle")
        //     this.sprite.setGravity(0, -600)
        //     this.sprite.setVelocityX(-180)
        // }
        // this.currentScene.physics.add.collider(this.sprite, this.currentScene.getPlayer().getPlayerSprite(), this.currentScene.getGameoverCallback())
    }

    public init() {
        
    }
}