export class LoadingScene extends Phaser.Scene {
    private loadingBar: Phaser.GameObjects.Graphics
    private filler: Phaser.GameObjects.Graphics
    private loadingProgress: number
    constructor() {
        super({
            key: "Loading"
        })
        this.loadingProgress = 0
    }

    init() {

    }

    preload() {
        this.add.rectangle(400, 300, 800, 600, 0xfcba03)
        this.loadingBar = this.add.graphics()
        this.filler = this.add.graphics()
        this.loadingBar.fillStyle(0x919191)
        this.loadingBar.fillRect(150, 350, 500, 100)
        this.filler.fillStyle(0x0004ff)
        this.filler.fillRect(155, 355, 2, 90)
        this.load.spritesheet("playerSprite", "assets/images/playerSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.spritesheet("rockSprite", "assets/images/rockSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.spritesheet("flameSprite", "assets/images/flameSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.image("backgroundImage", "assets/images/background.png")
        this.load.image("platform", "assets/images/platform.png")
        for (let i = 0; i < 1000; i++) {
            this.load.image("placeholder " + i.toString(), "assets/images/platform.png")
        }

        this.load.on("progress", this.updateLoadingBar.bind(this))
        this.load.on("complete", this.onCompleteLoading.bind(this))
    }

    create() {

    }

    update() {

    }

    private updateLoadingBar() {
        this.loadingProgress++
        this.filler.clear()
        this.filler.fillStyle(0x0004ff)
        this.filler.fillRect(155, 355, (this.loadingProgress / 1006) * 490 , 90)
    }

    private onCompleteLoading() {
        this.add.text(270, 500, "Click the screen to start the game", { font: '20px Arial', color: '#000000' })
        this.input.on("pointerdown", this.switchToGameplay.bind(this))
    }

    private switchToGameplay() {
        this.scene.start("Gameplay")
    }
}