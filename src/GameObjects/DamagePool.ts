export class DamagePool extends Phaser.GameObjects.Group {

  // Constructor
  constructor(scene: Phaser.Scene) {

    // Initialize
    super(scene);
    scene.add.existing(this);

    // Setup game objects
    for (var i = 0; i < 50; i++) {

      // Create a new text
      var text = new Phaser.GameObjects.Text(scene, 0, 0, '1', {
        font: '64px Arial Black',
        strokeThickness: 4,
        stroke: '#000',
        color: '#fff'
      });

      // The text does not exist to start
      text.setActive(false);
      text.setVisible(false);

      // Add the text to the group
      this.add(text);
      scene.add.existing(text);
    }
  }
}