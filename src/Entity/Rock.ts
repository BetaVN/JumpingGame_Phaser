import { ObstacleConstructor } from "../Interfaces/ObstacleConstructor";
import { Obstacle } from "./Obstacle"

export class Rock extends Obstacle {
    constructor(param: ObstacleConstructor) {
        super(param)      
    }

    public init() {
        this.body.velocity.x = -180
    }
}