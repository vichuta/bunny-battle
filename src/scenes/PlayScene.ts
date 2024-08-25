import { Monster } from '../entities/Monster'
import { Player } from '../entities/Player'
import { GameScene } from './GameScene'

type Position = {
  x: number
  y: number
}

class PlayScene extends GameScene {
  background: Phaser.GameObjects.Image
  ground: Phaser.GameObjects.TileSprite
  player: Player
  monster: Monster

  food: Phaser.Physics.Arcade.Image
  startPositionItem: Position

  stopMarker: number[]
  indexMarker: number

  answerText: Phaser.GameObjects.Text

  constructor() {
    super('PlayScene')
  }

  create() {
    this.startPositionItem = {
      x: 120,
      y: 285
    }

    this.createEnvironment()
    this.createPlayer()

    this.answerText = this.add.text(100, 100, 'Your Answer :', {
      fontSize: '32px'
    })

    // Event listener to display the submitted answer
    document.getElementById('submitAnswer').addEventListener('click', () => {
      let userAnswer = document.getElementById(
        'playerAnswer'
      ) as HTMLInputElement
      console.log('User Answer: ', userAnswer.value)

      // Update the game based on the answer (e.g., show it in the game)
      this.answerText.setText('Your Answer: ' + userAnswer.value)
      // ตรวจคำตอบ
      this.handleGameWithAnswer(userAnswer.value)
    })
    this.stopMarker = [150, 250, 350, 450, 550]
    this.indexMarker = 4

    this.physics.add.overlap(this.monster, this.food, () => {
      this.food
        .setVelocityX(0)
        .setAlpha(0)
        .setPosition(this.startPositionItem.x, this.startPositionItem.y)
    })
  }

  handleGameWithAnswer(answer: any) {
    if (answer === 'carrot') {
      console.log('Correct answer!')
      this.bunnyAttack()
    } else {
      console.log('Incorrect answer, try again.')
      this.monsterWalking()
    }
  }

  createEnvironment() {
    this.background = this.add.image(0, 0, 'bg').setOrigin(0, 0).setScale(2.1)
    this.ground = this.add
      .tileSprite(0, this.gameHeight as number, this.gameWidth, 32, 'ground')
      .setOrigin(0, 1)
      .setScale(2.5)

    this.food = this.physics.add
      .image(this.startPositionItem.x, this.startPositionItem.y, 'carrot')
      .setScale(1.3)
      .setAngle(-45)
      .setFlipX(true)
      .setAlpha(0)
  }

  createPlayer() {
    // this.player = this.add.image(0, 0, 'bunny')
    this.player = new Player(this, 50, this.gameHeight - 80)
    this.monster = new Monster(this, this.gameWidth - 40, this.gameHeight - 80)
  }

  // -- function for Bunny ---
  bunnyAttack() {
    this.player.throw()
    setTimeout(() => {
      this.food.setAlpha(1)
      this.food.setVelocityX(300)
    }, 400)
  }

  // -- function for Monster --
  monsterWalking() {
    if (this.indexMarker >= 0) {
      this.monster.walk()
      this.monster.setVelocityX(-75)
    } else {
      this.monster.attack()
      setTimeout(() => {
        this.player.die()
        this.monster.idle()
      }, 1000)
    }
  }

  update() {
    // console.log(this.indexMarker)
    if (this.monster.body.x <= this.stopMarker[this.indexMarker]) {
      this.monster.idle()
      this.monster.setVelocityX(0)
      this.indexMarker = this.indexMarker - 1
    }
  }
}

export default PlayScene
