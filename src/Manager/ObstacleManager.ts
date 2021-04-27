import { Utils } from "../Utils/Utils"
import { Constants } from "../Constants/Constants"
import { Obstacle } from "../Entity/Obstacle"
import { GameplayScene } from "../Scene/GameplayScene"

export class ObstacleManager {
    private obstacleList: Obstacle[]
    private currentObstacleCooldown: number
    private currentScene: GameplayScene
    
    constructor(currentScene: GameplayScene) {
        this.currentObstacleCooldown = 0
        this.obstacleList = []
        this.currentScene = currentScene
    }

    public reset() {
        this.currentObstacleCooldown = 0
        this.obstacleList = []
    }

    public obstacleGeneration() {
        this.currentObstacleCooldown++
        if (this.currentObstacleCooldown == Constants.ObstacleConstants.MaxFramePerObstacle) {
            var isFlying = Utils.getRndNumber(0, 100) > 50 ? true : false 
            var size = isFlying ? 70 : Utils.getRndNumber(40, 70)
            let param = { scene: this.currentScene, isFlying: isFlying, size: size }
            var newObstacle = new Obstacle(param)
            this.obstacleList.push(newObstacle)
            this.currentObstacleCooldown = Utils.getRndNumber(0, Math.floor(Constants.ObstacleConstants.MaxFramePerObstacle * 0.2))
        }
    }

    public removeInvalidObstacle() {
        if (this.obstacleList.length == 0) {
            return
        }
        this.obstacleList.forEach((obstacle) => {
            if (obstacle.isVisible() < -100) {
                obstacle.destroy()
                let index = this.obstacleList.indexOf(obstacle)
                this.obstacleList.splice(index, 1)
            }
        })
    }

    public update() {
        this.obstacleGeneration()
        this.removeInvalidObstacle()
    }
}