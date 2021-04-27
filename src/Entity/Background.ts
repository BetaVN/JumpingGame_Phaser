export class Background {
    private currentBackground: Phaser.GameObjects.TileSprite
    
    constructor(currentBackground: Phaser.GameObjects.TileSprite) {
        this.currentBackground = currentBackground
    }

    update() {
        this.currentBackground.tilePositionX += 3
    }
}