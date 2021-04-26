import { GameplayScene } from "../Scene/GameplayScene";

export interface ObstacleConstructor {
    scene: GameplayScene,
    isFlying: boolean,
    size: number
}