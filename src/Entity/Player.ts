import { PlayerConstructor } from "../Interfaces/PlayerConstructor"
import { Constants } from "../Constants/Constants"
import { GameplayScene } from "../Scene/GameplayScene"

export class Player {
    private sprite: Phaser.Physics.Arcade.Sprite
    private jumping: boolean
    private descending: boolean
    private inputStatus: boolean
    private allowGroundCheck: boolean
    private currentScene: GameplayScene

    constructor(param: PlayerConstructor) {
        this.sprite = param.sprite
        this.currentScene = param.scene
        this.sprite.scaleX = Constants.PlayerConstants.Width / this.sprite.width
        this.sprite.scaleY =Constants.PlayerConstants.Height / this.sprite.height
        this.sprite.setBounce(0)
        this.sprite.setCollideWorldBounds(true)
        this.currentScene.physics.add.collider(this.sprite, this.currentScene.getPlatform(), this.jumpingCheck.bind(this))
        this.sprite.play("walking")
        this.jumping = false;
        this.descending = false;
        this.inputStatus = false; 
        this.allowGroundCheck = false;
    }

    public reset() {
        this.jumping = false
        this.descending = false
        this.inputStatus = false
        this.allowGroundCheck = false
    }

    public setInputStatus(newInputStatus: boolean) {
        this.inputStatus = newInputStatus
    }

    public update() {
        if (this.inputStatus) {
            if (this.jumping) {
                if (!this.descending) {
                    this.descending = true
                    this.sprite.setVelocityY(1000)
                }
            }
            else {
                this.sprite.play("jumping")
                this.jumping = true
                this.allowGroundCheck = true
                this.sprite.setVelocityY(-500)
                this.currentScene.sound.play("jumpSound")
            }
        }
        this.inputStatus = false
    }

    private jumpingCheck() {
        if (this.allowGroundCheck) {
            this.sprite.play("walking")
            this.jumping = false
            this.descending = false
            this.allowGroundCheck = false
            this.currentScene.sound.play("landingSound")
        }
    }

    public getPlayerSprite() {
        return this.sprite
    }
}