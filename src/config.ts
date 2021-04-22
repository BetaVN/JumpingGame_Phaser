import { GameplayScene } from "./Scene/GameplayScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Jumping Game',
    version: '1.0',
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [ GameplayScene ],
    input: {
      keyboard: true,
      mouse: true,
      touch: true,
      gamepad: false
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    backgroundColor: '#000000',
    render: { pixelArt: false, antialias: true }
  };