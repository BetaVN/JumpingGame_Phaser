export class LoadingScene extends Phaser.Scene {
    private loadingBarOutline: Phaser.GameObjects.Image
    private loadingBarFill: Phaser.GameObjects.Image
    private loadingText: Phaser.GameObjects.Text
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
        this.loadingBarOutline = this.add.image(400, 400, "loadingBarOutline")
        this.loadingBarFill = this.add.image(400, 400, "loadingBarFill").setCrop(0, 0, 2, 86)
        this.loadingText = this.add.text(370, 375, "0 %", { font: "30px Arial", fontStyle: 'bold', color: "#FFFFFF"})
        this.load.spritesheet("playerSprite", "assets/images/playerSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.spritesheet("rockSprite", "assets/images/rockSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.spritesheet("flameSprite", "assets/images/flameSprite.png", { frameWidth: 48, frameHeight: 48 })
        this.load.image("backgroundImage", "assets/images/background.png")
        this.load.audio("jumpSound", "assets/sounds/jump.mp3")
        this.load.audio("landingSound", "assets/sounds/land.mp3")
        this.load.image("platform", "assets/images/platform.png")
        for (let i = 0; i < 998; i++) {
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
        this.loadingBarFill.setCrop(0, 0, (this.loadingProgress / 1006) * 486, 86)
        this.loadingText.setText(Math.floor(this.loadingProgress / 1006 * 100).toString() + " %")
    }

    private onCompleteLoading() {
        this.add.text(270, 500, "Click the screen to start the game", { font: '20px Arial', color: '#000000' })
        this.input.on("pointerdown", this.switchToGameplay.bind(this))
    }

    private switchToGameplay() {
        this.scene.start("Gameplay")
    }
}