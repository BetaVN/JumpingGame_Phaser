import { Constants } from "../Constants/Constants";
import { ObstacleConstructor } from "../Interfaces/ObstacleConstructor";
import { GameplayScene } from "../Scene/GameplayScene";

export class Obstacle{
    private isFlying: boolean
    private currentScene: GameplayScene
    private sprite: Phaser.Physics.Arcade.Sprite

    constructor(param: ObstacleConstructor) {
        this.currentScene = param.scene
        this.isFlying = param.isFlying

        if (!this.isFlying) {
            this.sprite = this.currentScene.physics.add.sprite(Constants.ObstacleConstants.BasePosX + param.size, Constants.ObstacleConstants.BasePosY - param.size/2 - 1, "rockSprite")
            this.sprite.scaleX = param.size / this.sprite.width
            this.sprite.scaleY = param.size / this.sprite.height
            this.currentScene.physics.add.collider(this.sprite, this.currentScene.getPlatform())
            this.sprite.setVelocityX(-180)
        }
        else {
            this.sprite = this.currentScene.physics.add.sprite(Constants.ObstacleConstants.BasePosX + param.size, Constants.ObstacleConstants.BasePosY - param.size/2 - 200, "flameSprite")
            this.sprite.scaleX = param.size / this.sprite.width
            this.sprite.scaleY = param.size / this.sprite.height
            this.sprite.play("flyingObstacle")
            this.sprite.setGravity(0, -600)
            this.sprite.setVelocityX(-180)
        }
        this.currentScene.physics.add.collider(this.sprite, this.currentScene.getPlayer().getPlayerSprite(), this.currentScene.getGameoverCallback())
    }

    public isVisible() {
        return this.sprite.x
    }

    public getNewObstacle(isFlying: boolean, size: number) {
        
    }

    public destroy() {
        this.sprite.destroy()
    }
}