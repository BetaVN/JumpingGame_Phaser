import { PlayerConstructor } from "../Interfaces/PlayerConstructor"
import { Constants } from "../Constants/Constants"

export class Player {
    private sprite: Phaser.GameObjects.Sprite
    private jumping: boolean
    private descending: boolean
    private inputStatus: boolean
    private currentScene: Phaser.Scene

    constructor(param: PlayerConstructor) {
        this.sprite = param.sprite
        this.currentScene = param.scene
        this.sprite.scaleX = Constants.PlayerConstants.Width / this.sprite.width
        this.sprite.scaleY =Constants.PlayerConstants.Height / this.sprite.height
        this.currentScene.anims.create({
            key: "walking",
            frames: this.currentScene.anims.generateFrameNumbers("playerSprite", { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1
        })
        this.currentScene.anims.create({
            key: "jumping",
            frames: this.currentScene.anims.generateFrameNumbers("playerSprite", { start: 1, end: 1 }),
            frameRate: 1,
            repeat: -1
        })
        this.sprite.play("walking")
        this.jumping = false;
        this.descending = false;
        this.inputStatus = false; 
    }

    public reset() {
        this.jumping = false
        this.descending = false
        this.inputStatus = false
    }

    public setInputStatus(newInputStatus: boolean) {
        this.inputStatus = newInputStatus
    }

    public update() {
        if (this.inputStatus) {
            // if (this.jumping) {
            //     if (!this.descending) {
            //         this.descending = true
            //         //Duck code here
            //     }
            // }
            // else {
            //     this.jumping = true
            //     //Jump code here
            // }
        }
        //Reset jumping and descending on ground touch
        this.inputStatus = false
    }

    public getInput(inputStatus: boolean) {
        this.inputStatus = inputStatus
    }
}