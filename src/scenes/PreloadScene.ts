import Phaser from 'phaser'

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene')
  }

  preload() {
    this.load.image('bg', 'assets/bg.png')
    this.load.image('ground', 'assets/ground.png')
    this.load.image('carrot', 'assets/food/carrot.png')

    // -- Bunny --
    this.load.image('bunny', 'assets/bunny/bunny.png')
    this.load.spritesheet('bunny-idle', 'assets/bunny/idle.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.spritesheet('bunny-hurt', 'assets/bunny/hurt.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.spritesheet('bunny-death', 'assets/bunny/death.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.spritesheet('bunny-throw', 'assets/bunny/throw.png', {
      frameWidth: 32,
      frameHeight: 32
    })

    // -- Monster --
    this.load.image('monster', 'assets/monster/Bear.png')
    this.load.spritesheet('monster-idle', 'assets/monster/Idle.png', {
      frameWidth: 40,
      frameHeight: 40
    })
    this.load.spritesheet('monster-walk', 'assets/monster/Walk.png', {
      frameWidth: 40,
      frameHeight: 40
    })
    this.load.spritesheet('monster-attack', 'assets/monster/Attack.png', {
      frameWidth: 40,
      frameHeight: 40
    })
  }

  create() {
    this.scene.start('PlayScene')
  }
}
export default PreloadScene
