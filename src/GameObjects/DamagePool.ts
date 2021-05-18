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

      // Set the tween
      var tween = scene.add.tween({
        targets: text,
        props: {
          alpha: { value: 0 },
          x: { value: Phaser.Math.Between(100, 700) },
          y: { value: 100 }
        },
        duration: 1000,
        ease: 'Cubic.easeOut',
        onComplete: (_, targets) => {
          targets[0].setVisible(false);
          targets[0].setActive(false);
        },
        paused: true
      });

      // Hack - append the tween to the text
      (text as any).tween = tween;
      (text as any).id = i;

      // Add the text to the group
      this.add(text);
      scene.add.existing(text);
    }
  }
}