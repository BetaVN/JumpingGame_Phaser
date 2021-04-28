import { ObstacleConstructor } from "../Interfaces/ObstacleConstructor";
import { Obstacle } from "./Obstacle";

export class FlyingFlame extends Obstacle {
    constructor(param: ObstacleConstructor) {
        super(param)
    }

    public init() {
        this.play("flyingObstacle")
        this.body.gravity.y = - 600
        this.body.velocity.x = -180
    }
}