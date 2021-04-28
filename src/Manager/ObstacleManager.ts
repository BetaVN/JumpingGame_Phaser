import { Utils } from "../Utils/Utils"
import { Constants } from "../Constants/Constants"
import { Obstacle } from "../Entity/Obstacle"
import { GameplayScene } from "../Scene/GameplayScene"
import { parseCommandLine } from "typescript"
import { FlyingFlame } from "../Entity/FlyingFlame"
import { Rock } from "../Entity/Rock"

export class ObstacleManager {
    private obstacleList: Phaser.Physics.Arcade.Group
    private currentObstacleCooldown: number
    private currentScene: GameplayScene
    
    constructor(currentScene: GameplayScene) {
        this.currentObstacleCooldown = 0
        this.currentScene = currentScene
        this.obstacleList = this.currentScene.physics.add.group()
    }

    public obstacleGeneration() {
        this.currentObstacleCooldown++
        if (this.currentObstacleCooldown == Constants.ObstacleConstants.MaxFramePerObstacle) {
            let isFlying = Utils.getRndNumber(0, 100) > 50 ? true : false 
            let size = isFlying ? 70 : Utils.getRndNumber(40, 70)
            let posY = isFlying ? Constants.ObstacleConstants.BasePosY - size/2 - 200 : Constants.ObstacleConstants.BasePosY - size/2 - 1
            let texture = isFlying ? "flameSprite" : "rockSprite"
            let param = {
                scene: this.currentScene,
                x: Constants.ObstacleConstants.BasePosX + size,
                y: posY,
                texture: texture,
                isFlying: isFlying,
                size: size
            }
            if (isFlying) {
                var newObstacle = new FlyingFlame(param)
            }
            else {
                var newObstacle = new Rock(param)
            }
            this.obstacleList.add(newObstacle)
            this.currentScene.add.existing(newObstacle)
            newObstacle.init()
            this.currentObstacleCooldown = Utils.getRndNumber(0, Math.floor(Constants.ObstacleConstants.MaxFramePerObstacle * 0.2))
        }
    }

    public removeInvalidObstacle() {
        var obstacles = this.obstacleList.getChildren()
        obstacles.forEach((obstacle) => {
            if (obstacle.body.position.x < - 100) {
                this.obstacleList.remove(obstacle, true, true)
            }
        })
    }

    public getObstacleList() {
        return this.obstacleList
    }

    public update() {
        this.obstacleGeneration()
        this.removeInvalidObstacle()
    }
}