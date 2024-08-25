import Phaser from 'phaser'
import PreloadScene from './scenes/PreloadScene'
import PlayScene from './scenes/PlayScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 700,
  height: 400,
  pixelArt: true,
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: [PreloadScene, PlayScene]
}

const phaserGameInstance = new Phaser.Game(config)
export default phaserGameInstance
