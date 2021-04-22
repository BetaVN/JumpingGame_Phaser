import { Constants } from "../Constants/Constants"

export class ScoreManager {
    private score: number
    private currentFrame: number
    private scoreText: Phaser.GameObjects.Text

    constructor(scoreText: Phaser.GameObjects.Text) {
        this.score = 0
        this.currentFrame = 0
        this.scoreText = scoreText
    }

    public reset() {
        this.score = 0
        this.currentFrame = 0
    }

    public update() {
        this.currentFrame++
        if (this.currentFrame == Constants.GameConstants.FramePerScore) {
            this.score++
            this.currentFrame = 0
        }
        this.scoreText.setText((100000 + this.score).toString().substring(1))
    }

    public getScore() {
        return this.score
    }
}