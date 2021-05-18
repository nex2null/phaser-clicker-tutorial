import { MonsterTypeEnum } from "../Enums/MonsterTypeEnum";

//
// Monster
//
export class Monster extends Phaser.GameObjects.Sprite {

  // Properties
  info: MonsterInfo;
  currentHealth: number;

  // Constructor
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    info: MonsterInfo
  ) {
    super(scene, x, y, info.imageName);
    scene.add.existing(this);
    this.info = info;
    this.currentHealth = info.maxHealth;
  }

  // Damage the monster
  damage(amount: number) {

    // Reduce the current health by the amount
    this.currentHealth -= amount;
    if (this.currentHealth < 0)
      this.currentHealth = 0;

    // If the health is 0 then emit the killed event
    if (this.currentHealth == 0)
      this.emit('killed');
  }

  // Reset health
  resetHealth() {
    this.currentHealth = this.info.maxHealth;
  }
}

//
// Monster information
//
export class MonsterInfo {

  // Properties
  type: MonsterTypeEnum;
  name: string;
  imageName: string;
  maxHealth: number

  // Constructor
  constructor(type: MonsterTypeEnum, name: string, imageName: string, maxHealth: number) {
    this.type = type;
    this.name = name;
    this.imageName = imageName;
    this.maxHealth = maxHealth;
  }
}

//
// List of monster informations
//
export var monsterInfos: Array<MonsterInfo> = [
  new MonsterInfo(MonsterTypeEnum.Aerocephal, 'Aerocephal', 'aerocephal', 10),
  new MonsterInfo(MonsterTypeEnum.Arcana_Drake, 'Arcana Drake', 'arcana_drake', 20),
  new MonsterInfo(MonsterTypeEnum.Aurum_Drakueli, 'Aurum Drakueli', 'aurum_drakueli', 30),
  new MonsterInfo(MonsterTypeEnum.Bat, 'Bat', 'bat', 5),
  new MonsterInfo(MonsterTypeEnum.Daemarbora, 'Daemarbora', 'daemarbora', 10),
  new MonsterInfo(MonsterTypeEnum.Deceleon, 'Deceleon', 'deceleon', 10),
  new MonsterInfo(MonsterTypeEnum.DemonicEssence, 'Demonic Essence', 'demonic_essence', 15),
  new MonsterInfo(MonsterTypeEnum.DuneCrawler, 'Dune Crawler', 'dune_crawler', 8),
  new MonsterInfo(MonsterTypeEnum.GreenSlime, 'Green Slime', 'green_slime', 3),
  new MonsterInfo(MonsterTypeEnum.Nagaruda, 'Nagaruda', 'nagaruda', 13),
  new MonsterInfo(MonsterTypeEnum.Rat, 'Rat', 'rat', 2),
  new MonsterInfo(MonsterTypeEnum.Scorpion, 'Scorpion', 'scorpion', 2),
  new MonsterInfo(MonsterTypeEnum.Skeleton, 'Skeleton', 'skeleton', 6),
  new MonsterInfo(MonsterTypeEnum.Snake, 'Snake', 'snake', 4),
  new MonsterInfo(MonsterTypeEnum.Spider, 'Spider', 'spider', 4),
  new MonsterInfo(MonsterTypeEnum.StygianLizard, 'Stygian Lizard', 'stygian_lizard', 20)
];