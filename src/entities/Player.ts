import { GameScene } from '../scenes/GameScene'

export class Player extends Phaser.Physics.Arcade.Sprite {
  scene: GameScene
  constructor(scene: GameScene, x: number, y: number) {
    super(scene, x, y, 'bunny')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.init()
  }
  init() {
    this.setOrigin(0, 1)
      .setScale(3)
      .setDepth(1)
      .setBodySize(20, 30)
      .setOffset(5, 2)

    this.registerAnimations()
    this.idle()
  }

  update() {}

  idle() {
    this.play('bunny-idle', true)
  }

  die() {
    this.play('bunny-hurt', true)
    setTimeout(() => {
      this.play('bunny-death', true)
    }, 500)
  }

  throw() {
    this.play('bunny-throw', true)
    setTimeout(() => {
      this.play('bunny-idle', true)
    }, 500)
  }

  registerAnimations() {
    this.anims.create({
      key: 'bunny-idle',
      frames: this.anims.generateFrameNames('bunny-idle'),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'bunny-hurt',
      frames: this.anims.generateFrameNames('bunny-hurt'),
      frameRate: 12,
      repeat: 3
    })
    this.anims.create({
      key: 'bunny-death',
      frames: this.anims.generateFrameNames('bunny-death'),
      frameRate: 6,
      repeat: 0
    })

    this.anims.create({
      key: 'bunny-throw',
      frames: this.anims.generateFrameNames('bunny-throw'),
      frameRate: 6,
      repeat: 0
    })
  }
}
