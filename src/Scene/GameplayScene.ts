import { Constants } from "../Constants/Constants"
import { Background } from "../Core/Background"
import { Player } from "../Entity/Player"
import { ScoreManager } from "../Manager/ScoreManager"

export class GameplayScene extends Phaser.Scene {
    private player: Player
    private obstacleManager: any
    private scoreManager: ScoreManager
    private background: Background
    private inputStatus: boolean
    private platform: Phaser.GameObjects.TileSprite

    constructor() {
        super({
            key: "Gameplay",
        })
    }

    init() {

    }

    preload() {
        this.load.spritesheet("playerSprite", "assets/images/playerSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.spritesheet("rockSprite", "assets/images/rockSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.spritesheet("flameSprite", "assets/images/flameSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.image("backgroundImage", "assets/images/background.png")
        this.load.image("platform", "assets/images/platform.png")
    }

    create() {
        this.platform = this.add.tileSprite(0, 585, 800, 15, "platform").setOrigin(0, 0)
        this.background = new Background(this.add.tileSprite(0, 0, 800, 600, "backgroundImage").setOrigin(0, 0))
        var playerConstructor = {
            sprite: this.physics.add.sprite(Constants.PlayerConstants.BasePosX, Constants.PlayerConstants.BasePosY, "playerSprite"),
            scene: this
        }
        this.player = new Player(playerConstructor)
        this.scoreManager = new ScoreManager(this.add.text(700, 30, '00000', { fontSize: '20px Arial', color: "#000000", fontStyle: 'bold' }))
        this.input.on("pointerdown", function(pointer: Phaser.Input.Pointer) {
            this.inputStatus = true
            console.log("ping")
        })
        
    }

    update() {
        this.player.getInput(this.inputStatus)
        this.background.update()
        this.player.update()
        this.scoreManager.update()
        this.inputStatus = false
    }
}