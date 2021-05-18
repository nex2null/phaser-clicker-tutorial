import { MainScene } from './Scenes/MainScene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Clicker Tutorial',
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: 'clicker-tutorial',
  scene: [MainScene]
};