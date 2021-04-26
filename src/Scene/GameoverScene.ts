export class GameoverScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Gameover"
        })
    }

    init() {
        
    }

    preload() {

    }

    create(data: any) {
        this.add.rectangle(400, 300, 800, 600, 0xfcba03)
        this.add.text(300, 100, "Game Over", { font: '40px Arial', color: '#000000' })
        this.add.text(340, 175, "Score: " + data.score, { font: '20px Arial', color: '#000000' })
        this.add.text(270, 500, "Click the screen to play again", { font: '20px Arial', color: '#000000' })
        this.input.on("pointerdown", this.switchToGameplay.bind(this))
    }

    update() {

    }

    public switchToGameplay() {
        this.scene.start("Gameplay")
    }
}