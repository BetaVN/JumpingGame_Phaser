import { GameplayScene } from "./Scene/GameplayScene";
import { GameoverScene } from "./Scene/GameoverScene";
import { LoadingScene } from "./Scene/LoadingScene";
import { BootScene } from "./Scene/BootScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Jumping Game',
    version: '1.0',
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [ BootScene, LoadingScene, GameplayScene, GameoverScene ],
    input: {
      keyboard: true,
      mouse: true,
      touch: true,
      gamepad: false
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 600
        },
        debug: false
      }
    },
    backgroundColor: '#000000',
    render: { pixelArt: false, antialias: true }
  };