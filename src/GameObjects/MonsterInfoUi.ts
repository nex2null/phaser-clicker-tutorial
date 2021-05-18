import { Monster } from "./Monster";

export class MonsterInfoUi extends Phaser.GameObjects.Container {

  // Properties
  monsterNameText: Phaser.GameObjects.Text;
  monsterHealthText: Phaser.GameObjects.Text;

  // Constructor
  constructor(scene: Phaser.Scene) {
    super(scene);

    // Add this container to the scene
    scene.add.existing(this);

    // Create the text for the monster name
    this.monsterNameText = new Phaser.GameObjects.Text(scene, 0, 0, '', {
      font: '48px Arial Black',
      strokeThickness: 4,
      color: '#fff',
      stroke: '#000'
    });

    // Create the text for the monster health
    this.monsterHealthText = new Phaser.GameObjects.Text(scene, 0, 80, '', {
      font: '32px Arial Black',
      strokeThickness: 4,
      color: '#ff0000',
      stroke: '#000'
    });

    // Add the texts to our container
    this.add(this.monsterNameText);
    this.add(this.monsterHealthText);
  }

  // Update text
  updateText(monster: Monster) {
    this.monsterNameText.text = monster.info.name;
    this.monsterHealthText.text = monster.currentHealth.toString();
  }
}