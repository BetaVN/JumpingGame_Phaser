import { GameplayScene } from "../Scene/GameplayScene";

export interface ObstacleConstructor {
    scene: GameplayScene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture
    frame?: string | number
    isFlying: boolean,
    size: number
}