import { Constants } from "../Constants/Constants"
import { Background } from "../Core/Background"
import { Player } from "../Entity/Player"
import { ObstacleManager } from "../Manager/ObstacleManager"
import { ScoreManager } from "../Manager/ScoreManager"

export class GameplayScene extends Phaser.Scene {
    private player: Player
    private obstacleManager: ObstacleManager
    private scoreManager: ScoreManager
    private background: Background
    private inputStatus: boolean
    private platform: Phaser.Physics.Arcade.StaticGroup
    private gameoverCallback: any

    constructor() {
        super({
            key: "Gameplay",
        })
        this.gameoverCallback = this.switchToGameover.bind(this)
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
        this.platform = this.physics.add.staticGroup();
        this.platform.create(400, 592, "platform")

        this.anims.create({
            key: "walking",
            frames: this.anims.generateFrameNumbers("playerSprite", { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1
        })
        this.anims.create({
            key: "jumping",
            frames: this.anims.generateFrameNumbers("playerSprite", { start: 1, end: 1 }),
            frameRate: 1,
            repeat: -1
        })
        this.anims.create({
            key: "flyingObstacle",
            frames: this.anims.generateFrameNumbers("flameSprite", { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1
        })

        this.background = new Background(this.add.tileSprite(0, 0, 800, 600, "backgroundImage").setOrigin(0, 0))

        var playerConstructor = {
            sprite: this.physics.add.sprite(Constants.PlayerConstants.BasePosX, Constants.PlayerConstants.BasePosY - 10, "playerSprite"),
            scene: this
        }
        this.player = new Player(playerConstructor)

        this.obstacleManager = new ObstacleManager(this)
        this.scoreManager = new ScoreManager(this.add.text(700, 30, '00000', { fontSize: '20px Arial', color: "#000000", fontStyle: 'bold' }))
        this.input.on("pointerdown", this.processInput.bind(this))
        
    }

    update() {
        this.player.setInputStatus(this.inputStatus)
        this.obstacleManager.update()
        this.background.update()
        this.player.update()
        this.scoreManager.update()
        this.inputStatus = false
    }

    public getPlatform() {
        return this.platform
    }

    public getPlayer() {
        return this.player
    }

    private processInput() {
        this.inputStatus = true
    }

    private switchToGameover() {
        this.scene.start("Gameover", { score: this.scoreManager.getScore()})
    }

    public getGameoverCallback() {
        return this.gameoverCallback
    }
}