export class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Boot"
        })
    }

    init() {

    }

    preload() {
        this.load.image("loadingBarOutline", "assets/images/loadingBarOutline.png")
        this.load.image("loadingBarFill", "assets/images/loadingBarFill.png")
    }

    create() {
        this.scene.start("Loading")
    }

    update() {

    }
}