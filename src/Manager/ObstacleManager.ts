import { Utils } from "../Utils/Utils"
import { Constants } from "../Constants/Constants"
import { Obstacle } from "../Entity/Obstacle"

export class ObstacleManager {
    private obstacleList: Obstacle[]
    private currentObstacleCooldown: number
    private currentScene: Phaser.Scene
    
    constructor(currentScene: Phaser.Scene) {
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
            var size = isFlying ? 50 : Utils.getRndNumber(40, 70)
            //let param = { scene: this.currentScene, x: Constants.ObstacleConstants.BasePosX, y: Constants.ObstacleConstants.BasePosY - size, texture: null, isFlying: isFlying }
            //var newObstacle = new Obstacle(param)
            //this.obstacleList.push(newObstacle)
        }
    }
}