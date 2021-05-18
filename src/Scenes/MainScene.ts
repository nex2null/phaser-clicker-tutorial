import 'Phaser';
import forestBackImage from '../assets/parallax_forest_pack/layers/parallax-forest-back-trees.png';
import forestLightsImage from '../assets/parallax_forest_pack/layers/parallax-forest-lights.png';
import forestMiddleImage from '../assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png';
import forestFrontImage from '../assets/parallax_forest_pack/layers/parallax-forest-front-trees.png';
import aerocephalImage from '../assets/allacrost_enemy_sprites/aerocephal.png';
import arcanaDrakeImage from '../assets/allacrost_enemy_sprites/arcana_drake.png';
import aurumDrakueliImage from '../assets/allacrost_enemy_sprites/aurum_drakueli.png';
import batImage from '../assets/allacrost_enemy_sprites/bat.png';
import daemarboraImage from '../assets/allacrost_enemy_sprites/daemarbora.png';
import deceleonImage from '../assets/allacrost_enemy_sprites/deceleon.png';
import demonicEssenceImage from '../assets/allacrost_enemy_sprites/demonic_essence.png';
import duneCrawlerImage from '../assets/allacrost_enemy_sprites/dune_crawler.png';
import greenSlimeImage from '../assets/allacrost_enemy_sprites/green_slime.png';
import nagarudaImage from '../assets/allacrost_enemy_sprites/nagaruda.png';
import ratImage from '../assets/allacrost_enemy_sprites/rat.png';
import scorpionImage from '../assets/allacrost_enemy_sprites/scorpion.png';
import skeletonImage from '../assets/allacrost_enemy_sprites/skeleton.png';
import snakeImage from '../assets/allacrost_enemy_sprites/snake.png';
import spiderImage from '../assets/allacrost_enemy_sprites/spider.png';
import stygianLizardImage from '../assets/allacrost_enemy_sprites/stygian_lizard.png';
import { Monster, monsterInfos } from '../GameObjects/Monster';

export class MainScene extends Phaser.Scene {

  // Properties
  monsterText: Phaser.GameObjects.GameObject;
  currentMonster: Monster;
  monsters: Phaser.GameObjects.Group;

  //
  // Constructor
  //
  constructor() {
    super({ key: 'MainScene' });
  }

  //
  // Handle scene preload
  //
  preload(): void {
    this.load.image('forest-back', forestBackImage);
    this.load.image('forest-lights', forestLightsImage);
    this.load.image('forest-middle', forestMiddleImage);
    this.load.image('forest-front', forestFrontImage);
    this.load.image('aerocephal', aerocephalImage);
    this.load.image('arcana_drake', arcanaDrakeImage);
    this.load.image('aurum_drakueli', aurumDrakueliImage);
    this.load.image('bat', batImage);
    this.load.image('daemarbora', daemarboraImage);
    this.load.image('deceleon', deceleonImage);
    this.load.image('demonic_essence', demonicEssenceImage);
    this.load.image('dune_crawler', duneCrawlerImage);
    this.load.image('green_slime', greenSlimeImage);
    this.load.image('nagaruda', nagarudaImage);
    this.load.image('rat', ratImage);
    this.load.image('scorpion', scorpionImage);
    this.load.image('skeleton', skeletonImage);
    this.load.image('snake', snakeImage);
    this.load.image('spider', spiderImage);
    this.load.image('stygian_lizard', stygianLizardImage);
  }

  //
  // On scene create
  //
  create() {

    // Create our forest background
    const background = this.add.group();
    ['forest-back', 'forest-lights', 'forest-middle', 'forest-front'].forEach(image => {
      var tilesprite = this.add.tileSprite(0, 0, 800, 600, image);
      background.add(tilesprite);
      tilesprite.setTileScale(2, 4);
    });
    background.setOrigin(0, 0);

    // Create the monsters group
    this.monsters = this.add.group();

    // Add all the monster sprites to the group
    monsterInfos.forEach(monsterInfo => {

      // Create the monster
      var monster = new Monster(this, 1000, 300, monsterInfo);
      this.monsters.add(monster);

      // Enable input so we can click it
      monster.setInteractive();
      monster.on('pointerdown', () => { this.monsterClicked(); });
    });

    this.setRandomMonster();
  }

  //
  // Set a random monster
  //
  setRandomMonster() {

    // If there is already a current monster then move it off-screen
    if (this.currentMonster) {
      this.currentMonster.setPosition(1000, 300);
    }

    // If there is currently monster text, destroy it
    if (this.monsterText)
      this.monsterText.destroy();

    // Grab a new monster and move it to center screen
    this.currentMonster = Phaser.Utils.Array.GetRandom(this.monsters.getChildren().filter(child => child.active));
    this.currentMonster.setPosition(500, 300);

    // Set the monster text
    var currentMonsterBounds = this.currentMonster.getBounds();
    var currentMonsterText = this.currentMonster.info.name;
    this.monsterText = this.add.text(
      currentMonsterBounds.x,
      currentMonsterBounds.y + currentMonsterBounds.height + 20,
      currentMonsterText);
  }

  //
  // Handle monster click
  //
  monsterClicked() {
    this.setRandomMonster();
  }
}