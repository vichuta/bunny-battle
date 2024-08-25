import { GameScene } from '../scenes/GameScene'

export class Monster extends Phaser.Physics.Arcade.Sprite {
  scene: GameScene
  constructor(scene: GameScene, x: number, y: number) {
    super(scene, x, y, 'monster')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.init()
  }
  init() {
    this.setOrigin(1, 1)
      .setScale(4)
      .setDepth(1)
      .setBodySize(27, 32)
      .setOffset(11, 8)

    this.registerAnimations()
    this.idle()
  }

  update() {}

  idle() {
    this.play('monster-idle', true)
  }

  walk() {
    this.play('monster-walk', true)
  }
  attack() {
    this.play('monster-attack', true)
  }

  registerAnimations() {
    this.anims.create({
      key: 'monster-idle',
      frames: this.anims.generateFrameNames('monster-idle'),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'monster-walk',
      frames: this.anims.generateFrameNames('monster-walk'),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'monster-attack',
      frames: this.anims.generateFrameNames('monster-attack'),
      frameRate: 4,
      repeat: 0
    })
  }
}
